import {
  addDoc,
  collection,
  DocumentData,
  getDocs,
  query,
  where,
} from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { db } from '../../../../config/firebase'
import {
  useAuth,
  AuthProvider,
  AuthContextInterface,
  AuthContext,
  AuthContextDefaultValues,
} from '../../../context/AuthContext'
import { useChat } from '../../../context/ChatContext'
import { createChat } from '../../../firebaseApi/ChatApi'

import { LoadingChatName } from '../../../utils/Loading'
import ChatName from './ChatName'

const ChatNameList = () => {
  const [friends, setFriends] = useState<AuthContextInterface[]>([])
  // const { select, setSelect } = useChat()
  // const { select, setSelect } = useChat()

  const { select, setSelect } = useChat()

  const currentUser = useAuth()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchFriends = async () => {
      setLoading(true)
      if (currentUser !== AuthContextDefaultValues) {
        const usersRef = collection(db, 'users')
        const q = query(usersRef, where('email', '!=', currentUser.email))
        const arrayOfData: DocumentData[] = []
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
          arrayOfData.push(doc.data())
        })

        return arrayOfData
      } else {
        return console.log('no user')
      }
    }
    fetchFriends().then((res: any): void => {
      setFriends(res)
      setLoading(false)
    })
  }, [currentUser])

  const handleSelect = (uid: string) => {
    setSelect(uid)
    createChat(uid, currentUser).then(() => {})
  }

  return (
    <div className="relative">
      <LoadingChatName loading={loading} />
      <div className="h-full overflow-scroll">
        {friends?.map((friend: AuthContextInterface) => (
          <div
            key={friend.uid}
            id={friend.uid}
            onClick={() => handleSelect(friend.uid)}
          >
            <ChatName
              displayName={friend.displayName}
              color={friend.color}
              photoURL={friend.photoURL}
              select={select}
              uid={friend.uid}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChatNameList
