import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import MessageHeader from '../../src/components/ChatBox/Message/MessageHeader'
import MessageBox from '../../src/components/ChatBox/Message/MessageBox'
import MessageInput from '../../src/components/ChatBox/Message/MessageInput'
import Home from '.'
import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  orderBy,
  query,
} from 'firebase/firestore'
import { db } from '../../config/firebase'
import { GetServerSideProps } from 'next'
import { LoadingChatName } from '../../src/utils/Loading'
import { ChatDetailContainer } from '../../src/components/index'

type ChatRoomType = {
  chat: any
  messages: string
  id: string
}

const ChatRoom = ({ chat, id, messages }: ChatRoomType) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [messagesProp, setMessagesProp] = useState<DocumentData[]>([])
  const router = useRouter()
  useEffect(() => {
    const handleStart = (url: string) => {
      url !== router.pathname ? setLoading(true) : setLoading(false)
    }
    const handleComplete = () => setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)
  }, [router])

  return (
    <Home
      chat={chat}
      chatId={id}
      messages={messages}
      messagesProp={messagesProp}
      setMessagesProp={setMessagesProp}
    >
      <section className=" relative box-border flex w-2/4 flex-col justify-between border-x-2 border-indigo-200 dark:border-gray-500">
        <LoadingChatName loading={loading} />
        <MessageHeader />
        <MessageBox
          chat={chat}
          chatId={id}
          messages={messages}
          messagesProp={messagesProp}
          setMessagesProp={setMessagesProp}
        />
        <MessageInput />
      </section>
    </Home>
  )
}

export default ChatRoom

export const getServerSideProps = async (context: {
  params: { chatId: string }
}) => {
  const messagesRef = collection(
    db,
    'chats',
    context.params?.chatId,
    'messages'
  )
  const q = query(messagesRef, orderBy('timestamp', 'asc'))
  const querySnapshot = await getDocs(q)
  const messages = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
    timestamp: doc.data().timestamp?.toDate().getTime(),
  }))

  const docRef = doc(db, 'chats', context.params?.chatId)
  const docSnap = await getDoc(docRef)

  return {
    props: {
      chat: JSON.stringify(docSnap.data()),
      id: context.params?.chatId,
      messages: JSON.stringify(messages),
    },
  }
}
