import { DocumentData } from 'firebase/firestore'
import React, { useEffect, useRef, useState } from 'react'
import { AuthContextDefaultValues } from '../../../context/AuthContext'
import { useChat } from '../../../context/ChatContext'
import { useSelect } from '../../../context/SelectContext'
import { fetchMessage } from '../../../utils/firebaseApi/ChatApi'
import { TextSm } from '../../../utils/form/text'
import MessageText from './MessageText'

type MessageBoxType = {
  chat: any
  messages: string
  chatId: string
  messagesProp: DocumentData[]
  setMessagesProp: (val: DocumentData[]) => void
}

const MessageBox = ({
  chat,
  messages,
  chatId,
  messagesProp,
  setMessagesProp,
}: MessageBoxType) => {
  const { select } = useSelect()
  const [loading, setLoading] = useState<boolean>(true)
  const messagesEndRef = useRef<null | HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  useEffect(() => {
    scrollToBottom()
  }, [messagesProp])

  useEffect(() => {
    if (chatId !== '') {
      fetchMessage(chatId, setMessagesProp)
      setMessagesProp(JSON.parse(messages))
      setLoading(false)
    }
  }, [chatId])

  return (
    <div className="relative flex h-full flex-col justify-start overflow-scroll">
      {select !== AuthContextDefaultValues ? (
        <>
          {messagesProp.length !== 0 ? (
            messagesProp?.map((message: DocumentData, index) => (
              <div key={index}>
                <MessageText
                  text={message?.message}
                  uid={message?.uid}
                  displayName={message?.displayName}
                  photoURL={message.photoURL}
                  timestamp={message?.timestamp}
                  textType={message?.messageType}
                />
              </div>
            ))
          ) : (
            <div className=" flex h-full w-full items-center justify-center ">
              <TextSm>send me some text please...</TextSm>
            </div>
          )}
          <div style={{ marginBottom: '1rem' }} ref={messagesEndRef}></div>
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
