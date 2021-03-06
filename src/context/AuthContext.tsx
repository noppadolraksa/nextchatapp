import { useState, useEffect, createContext, useContext, FC } from 'react'
import { useRouter } from 'next/router'
import { auth, db } from '../../config/firebase'
import { serverTimestamp, getDoc, doc, setDoc } from 'firebase/firestore'

export type FriendsProps = {
  displayName: ''
  email: ''
  photoURL: ''
  color: ''
  uid: ''
}

export type AuthContextInterface = {
  displayName: string
  email: string
  lastSeen: any
  photoURL: string
  color: string
  uid: string
  friendsId: FriendsProps | null
}

export const AuthContextDefaultValues: AuthContextInterface = {
  displayName: '',
  email: '',
  lastSeen: null,
  photoURL: '',
  color: '',
  uid: '',
  friendsId: null,
}

export const AuthContext = createContext<AuthContextInterface>(
  AuthContextDefaultValues
)

export const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<AuthContextInterface>(
    AuthContextDefaultValues
  )

  const router = useRouter()

  useEffect(() => {
    return auth.onIdTokenChanged(async (user) => {
      if (user === null) {
        router.push('/login')
      }
      if (user !== null) {
        const getUserById = async () => {
          const usersRef = doc(db, 'users', user.uid)
          const usersSnap = await getDoc(usersRef)

          if (usersSnap.exists()) {
            const oldUser = usersSnap.data()
            const userData: AuthContextInterface = {
              displayName: oldUser.displayName!,
              email: oldUser.email!,
              lastSeen: serverTimestamp(),
              photoURL: oldUser.photoURL!,
              color: 'bubble-gum'!,
              uid: oldUser.uid!,
              friendsId: null,
            }
            await setDoc(doc(db, 'users', user.uid), userData)
            setCurrentUser(userData)
          } else {
            const userData: AuthContextInterface = {
              displayName: user.displayName!,
              email: user.email!,
              lastSeen: serverTimestamp(),
              photoURL: user.photoURL!,
              color: 'bubble-gum'!,
              uid: user.uid!,
              friendsId: null,
            }
            await setDoc(doc(db, 'users', user.uid), userData)
            setCurrentUser(userData)
            console.log('set user')
          }
        }
        getUserById()
        router.push('/chat')
      }
    })
  }, [])

  return (
    <>
      <AuthContext.Provider value={currentUser}>
        {children}
      </AuthContext.Provider>
    </>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
