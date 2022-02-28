import React, { useRef, useState } from 'react'

import { PaperClipOutlined, SendOutlined } from '@ant-design/icons'
import { useTheme } from 'next-themes'
import { AuthContextDefaultValues, useAuth } from '../../../context/AuthContext'
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore'
import { db } from '../../../../config/firebase'
import { useSelect } from '../../../context/SelectContext'
import { useChat } from '../../../context/ChatContext'
import { sendMessage } from '../../../utils/firebaseApi/ChatApi'

const MessageInput = () => {
  const { theme, setTheme } = useTheme()
  const [message, setMessage] = useState<string>('')

  const currentUser = useAuth()
  const { select } = useSelect()
  const { chatId } = useChat()

  const handleSendMassage = (
    e: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLButtonElement>
  ) => {
    e.preventDefault()
    setMessage('')
    sendMessage(currentUser, chatId, message).then(() => {})
  }

  return (
    <div className="mb-1 flex h-12 justify-between">
      {select !== AuthContextDefaultValues ? (
        <>
          <form
            className="w-5/6"
            onSubmit={(e) => {
              handleSendMassage(e)
            }}
          >
            <input
              type="text"
              placeholder="Message here.."
              className="h-full w-full bg-inherit p-2 text-gray-600 dark:text-white"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </form>
          <div className=" flex items-center justify-center gap-1">
            <p className="m-auto flex h-9 w-9 cursor-pointer items-center justify-center text-lg text-slate-900 dark:text-white ">
              <PaperClipOutlined />
            </p>
            <div className=" mr-2 flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500">
              <button
                type="submit"
                onClick={(e) => {
                  handleSendMassage(e)
                }}
              >
                <SendOutlined
                  style={{
                    color: 'white',
                    fontSize: '16px',
                    marginLeft: '3px',
                    marginBottom: '4px',
                    cursor: 'pointer',
                  }}
                />
              </button>
            </div>
          </div>
        </>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default MessageInput
