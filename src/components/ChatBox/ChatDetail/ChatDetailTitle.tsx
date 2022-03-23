import { DoubleRightOutlined } from '@ant-design/icons'
import React from 'react'

type ChatDetailTitleValue = {
  chatName: string
  show: boolean
  setShow: Function
}

const ChatDetailTitle = ({ chatName, show, setShow }: ChatDetailTitleValue) => {
  return (
    <div
      className=" m-0 flex h-12 w-full cursor-pointer flex-col items-center justify-center  pb-0 transition delay-500 ease-in-out"
      onClick={() => setShow(!show)}
    >
      <h3 className=" flex items-center justify-center gap-1 text-lg font-bold text-gray-600 dark:text-white">
        {chatName}
        <DoubleRightOutlined
          style={show === true ? { transform: 'rotate(90deg)' } : {}}
        />
      </h3>
      <div className=" m-0 flex w-full border-b-2 border-indigo-500 dark:border-white "></div>
    </div>
  )
}

export default ChatDetailTitle
