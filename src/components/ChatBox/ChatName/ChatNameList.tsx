import { collection, getDoc, getDocs, query, where } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { db } from '../../../../config/firebase'
import {
  useAuth,
  AuthProvider,
  AuthContextInterface,
  AuthContext,
} from '../../../context/AuthProvider'
import ChatName from './ChatName'

const ChatNameList = () => {
  const [friends, setFriends] = useState<AuthContextInterface[] | null>(null)
  const user = useAuth()
  console.log(friends)
  useEffect(() => {
    const fetchFriends = async () => {
      if (user) {
        const usersRef = collection(db, 'users')
        const q = query(usersRef, where('email', '!=', user?.email))
        const querySnapshot = await getDocs(q)
        let data: AuthContextInterface | any = []
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          data.push(doc.data())
          // { ...doc.data(), doc.id }
        })
        setFriends(data)
      }
    }
    fetchFriends()
  }, [])

  return (
    <div className="h-full overflow-scroll">
      {friends?.map(
        (friend: any): JSX.Element => (
          <ChatName
            name={friend.displayName}
            color={friend.color}
            photoURL={friend.photoURL}
          />
        )
      )}
    </div>
  )
}

export default ChatNameList
