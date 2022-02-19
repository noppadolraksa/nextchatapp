import React, { useState } from 'react'
import { picture } from '../../../../data'

import ChatDetailTitle from './ChatDetailTitle'
import { Modal, Button } from 'antd'
import ChatDetailPhotoModel from './ChatDetailPhotoModel'

//add html attribute
// declare module 'react' {
//   interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
//     url?: string
//     src?: string
//   }
// }

// declare module 'react' {
//   interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
//     url?: string
//   }
// }

const ChatDetailPhoto = () => {
  const [show, setShow] = useState<boolean>(false)

  const handleZoomImage = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const pic = e.currentTarget.id
    return <ChatDetailPhotoModel pic={pic} />
  }

  return (
    <div className="flex h-2/4 flex-col overflow-scroll ">
      <ChatDetailTitle chatName="Photos" show={show} setShow={setShow} />
      {show && (
        <div className="m-2 flex cursor-pointer flex-wrap overflow-scroll ">
          {picture.map((pic, index) => (
            <img
              src={pic}
              alt="chat picture"
              key={index}
              className=" w-1/3 sm:w-1/4"
              id={pic}
              onClick={(e) => handleZoomImage(e)}
            ></img>
          ))}
        </div>
      )}
    </div>
  )
}

export default ChatDetailPhoto
