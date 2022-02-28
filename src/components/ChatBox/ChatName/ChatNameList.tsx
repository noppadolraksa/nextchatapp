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
import { useSelect } from '../../../context/SelectContext'
import { createChat, getChatByChatId } from '../../../firebaseApi/ChatApi'
import { fetchFriends } from '../../../firebaseApi/FriendApi'

import { LoadingChatName } from '../../../utils/Loading'
import ChatName from './ChatName'

// type ChatNameListType = {
//   switchToFriends: boolean
// }

const ChatNameList = () => {
  const [friends, setFriends] = useState<AuthContextInterface[]>([])
  const { setChatId } = useChat()
  const [selectId, setSelectId] = useState<string>('')
  const { select, setSelect } = useSelect()
  const { setChat } = useChat()
  const currentUser = useAuth()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(true)
    fetchFriends(currentUser).then((res: any): void => {
      setFriends(res)
      setLoading(false)
    })
  }, [currentUser])

  const handleSelect = (uid: string) => {
    setSelectId(uid)
    const setSelectByUid = friends.find((friend) => friend.uid === uid)!
    setSelect(setSelectByUid)

    createChat(uid, currentUser).then((chatId) => {
      setChatId(chatId)
      setChat(getChatByChatId(chatId))
    })
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
              select={selectId}
              uid={friend.uid}
              lastMessage="helloooo"
              lastMessageTime={friend.lastSeen}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChatNameList
