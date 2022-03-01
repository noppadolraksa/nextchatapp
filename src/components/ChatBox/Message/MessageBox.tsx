import {
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore'
import React, { useEffect, useRef, useState } from 'react'
import { db } from '../../../../config/firebase'
import { AuthContextDefaultValues } from '../../../context/AuthContext'
import { useChat } from '../../../context/ChatContext'
import { useSelect } from '../../../context/SelectContext'
import { fetchMessage } from '../../../utils/firebaseApi/ChatApi'
import { TextHeader, TextSm } from '../../../utils/form/text'
import { Loading, LoadingChatName } from '../../../utils/Loading'
import { ProfilePicture } from '../../../utils/ProfilePicture'

import MessageText from './MessageText'

const MessageBox = () => {
  const { select } = useSelect()
  const { chatId } = useChat()
  const [messages, setMessages] = useState<DocumentData[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const messagesEndRef = useRef<null | HTMLDivElement>(null)
  console.log(1)
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    setLoading(true)
    if (chatId !== '') {
      fetchMessage(chatId, setMessages)

      setLoading(false)
    }
  }, [chatId])

  return (
    <div className="relative flex h-full flex-col justify-start overflow-scroll">
      {select !== AuthContextDefaultValues ? (
        <>
          <LoadingChatName loading={loading} />

          {messages.map((message: DocumentData, index) => (
            <div key={index}>
              <MessageText
                text={message?.message}
                uid={message?.uid}
                displayName={message?.displayName}
                photoURL={message.photoURL}
                timestamp={message?.timestamp}
              />
            </div>
          ))}
          <div style={{ marginBottom: '1rem' }} ref={messagesEndRef}></div>
          {/* <MessageText
            text="Lorem assadas asad ad s wdad wdLorem assadas asad ad s wdad wdLorem assadas asad ad s wdad wdLorem assadas asad ad s wdad wdLorem assadas asad ad s wdad wdLorem assadas asad ad s wdad wdLorem assadas asad ad s wdad wd"
            uid=""
            timestamp={0}
            displayName=""
          /> */}
        </>
      ) : (
        <div className=" flex h-full w-full items-center justify-center ">
          <TextSm>please select friends to chat...</TextSm>
        </div>
      )}
    </div>
  )
}

export default MessageBox

// export  const getServerSideProps = async (context) = {
//   const messagesRef = collection(db, 'chats', context.query.id, 'messages')
//   const q = query(messagesRef, orderBy('timestamp', 'asc'))
// }
