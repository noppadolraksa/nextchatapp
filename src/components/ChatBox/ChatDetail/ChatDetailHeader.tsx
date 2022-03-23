import React from 'react'

type Props = {
  chatName: string
}

const ChatDetailHeader = ({ chatName }: Props) => {
  return (
    <div className=" relative flex h-12 w-full items-center justify-center pt-4">
      <h3 className="mb-px  text-xl font-bold text-gray-600 dark:text-white">
        {chatName}
      </h3>
    </div>
  )
}

export default ChatDetailHeader
