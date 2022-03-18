import {
  addDoc,
  collection,
  DocumentData,
  getDocs,
  query,
  where,
} from 'firebase/firestore'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import { useAuth, AuthContextInterface } from '../../../context/AuthContext'
import { useChat } from '../../../context/ChatContext'
import { useSelect } from '../../../context/SelectContext'
import { createChat, getChatByChatId } from '../../../utils/firebaseApi/ChatApi'
import { fetchFriends } from '../../../utils/firebaseApi/FriendApi'

import { LoadingChatName } from '../../../utils/Loading'
import ChatName from './ChatName'

const ChatNameList = () => {
  const [friends, setFriends] = useState<AuthContextInterface[]>([])
  const { setChatIdContext, setMessagesContext } = useChat()
  const [selectId, setSelectId] = useState<string>('')
  const { select, setSelect } = useSelect()

  const currentUser = useAuth()
  const [loading, setLoading] = useState<boolean>(true)
  const router = useRouter()
  useEffect(() => {
    fetchFriends(currentUser).then((res: any): void => {
      setFriends(res)
      setLoading(false)
    })
  }, [currentUser])

  const handleSelect = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    const uid = e.currentTarget.id
    setSelectId(uid)
    const setSelectByUid = friends.find((friend) => friend.uid === uid)!
    setSelect(setSelectByUid)
    createChat(uid, currentUser).then((chatId) => {
      setChatIdContext(chatId)
      if (getChatByChatId(chatId) !== undefined) {
        setMessagesContext(getChatByChatId(chatId))
      }
      router.push(`/chat/${chatId}`)
    })
  }

  // useEffect(() => {}, [router.pathname])
  return (
    <div className="relative">
      <LoadingChatName loading={loading} />

      <div className="h-full overflow-scroll">
        {friends?.map((friend: AuthContextInterface) => (
          <div
            key={friend.uid}
            id={friend.uid}
            onClick={(e) => handleSelect(e)}
          >
            <ChatName
              displayName={friend.displayName}
              color={friend.color}
              photoURL={friend.photoURL}
              select={selectId}
              uid={friend.uid}
              lastMessage=""
              lastMessageTime={friend.lastSeen}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChatNameList
