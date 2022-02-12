import React from 'react'

const MessageHeader = () => {
  return (
    <div className="my-4 flex h-10 flex-col items-center">
      <h4 className="mb-px text-xl font-bold text-gray-600 dark:text-white">
        bright
      </h4>
      <p className="text-xs text-gray-700 dark:text-gray-400">
        last active 11 Feb 2022 11:30
      </p>
    </div>
  )
}

export default MessageHeader
