import React, { useEffect, useState } from 'react'
import ChatDetailTitle from './ChatDetailTitle'
import ChatDetailPhotoModel from './ChatDetailPhotoModel'
import { DocumentData } from 'firebase/firestore'
import { getChatPicures } from '../../../utils/function'

type ChatDetailPhotoType = {
  messages: string
  chatId: string
  messagesProp: DocumentData[]
  setMessagesProp: (val: DocumentData[]) => void
}

const ChatDetailPhoto = ({
  chatId,
  messages,
  messagesProp,
  setMessagesProp,
}: ChatDetailPhotoType) => {
  const [show, setShow] = useState<boolean>(false)
  const [pictures, setPictures] = useState<DocumentData[]>()
  const [loading, setLoading] = useState<boolean>(true)

  const handleZoomImage = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const pic = e.currentTarget.id
    return <ChatDetailPhotoModel pic={pic} />
  }

  useEffect(() => {
    const messagesJSON = JSON.parse(messages)
    if (chatId !== '') {
      getChatPicures({ messages: messagesJSON, setPictures })
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    getChatPicures({ messages: messagesProp, setPictures })
    setLoading(false)
  }, [messagesProp])

  return (
    <div className="flex h-2/4 flex-col overflow-scroll ">
      <ChatDetailTitle chatName="Photos" show={show} setShow={setShow} />
      {show && (
        <div className="m-2 flex cursor-pointer flex-wrap overflow-scroll ">
          {pictures?.map((pic, index) => (
            <img
              src={pic.message}
              alt="chat picture"
              key={index}
              className=" w-1/3 sm:w-1/4"
              id={pic.id}
            ></img>
          ))}
        </div>
      )}
    </div>
  )
}

export default ChatDetailPhoto
