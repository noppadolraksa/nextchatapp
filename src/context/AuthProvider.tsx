import react, { useState, useEffect, createContext, useContext } from 'react'
import { useRouter } from 'next/router'
import { auth, db } from '../../config/firebase'
import Loading from '../utils/Loading'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { colorPalette, randomProperty } from '../utils/color'

export type AuthContextInterface = {
  displayName: string | null
  email: string | null
  lastSeen: {}
  photoURL: string | null
  color: string
  uid: string
}

export const AuthContext = createContext<AuthContextInterface | null>(null)
//[AuthContextInterface, Dispatch<SetStateAction<AuthContextInterface>>] | null

export const AuthProvider = (props: {
  children:
    | boolean
    | react.ReactChild
    | react.ReactFragment
    | react.ReactPortal
    | null
    | undefined
}) => {
  const [currentUser, setCurrentUser] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const router = useRouter()

  useEffect(() => {
    return auth.onIdTokenChanged(async (user) => {
      if (!user) {
        setCurrentUser(null)
        setLoading(false)
        router.push('/login')
      } else {
        // const token = await user?.getIdToken()

        const userData: AuthContextInterface = {
          displayName: user.displayName,
          email: user.email,
          lastSeen: serverTimestamp(),
          photoURL: user.photoURL,
          color: 'bubble-gum',
          uid: user.uid,
        }
        await setDoc(doc(db, 'users', user.uid), userData)
        setCurrentUser(user)
        setLoading(false)
        console.log(currentUser)
        router.push('/')
      }
    })
  }, [])

  if (loading) {
    return <Loading type="spin" color="#6366f1" />
  }

  return (
    <AuthContext.Provider value={currentUser}>
      {props.children}
    </AuthContext.Provider>
  )
}
// export const useAuth = () => useContext(AuthContext)
export const useAuth = () => {
  return useContext(AuthContext)
}
// fetch context => const user = useAuth().currentUser
