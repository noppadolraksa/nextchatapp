import React from 'react'

const ChatNameHeader = () => {
  return (
    <div className=" flex  w-full items-center justify-between p-4 ">
      <h3 className="my-auto flex px-3 text-xl font-bold text-gray-600 dark:text-white">
        My Chats
      </h3>
      <p className="my-auto mr-2 flex cursor-pointer items-center justify-center rounded-xl bg-indigo-500 py-px px-3 text-xl text-gray-200 dark:bg-indigo-500">
        +
      </p>
    </div>
  )
}

export default ChatNameHeader
