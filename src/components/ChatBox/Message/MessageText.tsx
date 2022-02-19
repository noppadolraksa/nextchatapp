import React from 'react'

type MessageTextValue = {
  text: string
  whoSaid: string
  read: boolean
}

const MessageText = ({ text, whoSaid, read }: MessageTextValue) => {
  return (
    <div
      className={`flex w-full flex-col  ${
        whoSaid === 'other' ? 'items-start' : ' items-end'
      } `}
    >
      <div
        className={`flex ${whoSaid === 'me' && 'flex-row-reverse'} items-end`}
      >
        <p
          className={`m-1 flex flex-1 items-center  rounded-md ${
            whoSaid === 'other' ? 'bg-gray-300' : 'bg-indigo-500 text-white'
          }   p-2 text-sm font-light`}
        >
          {text}
        </p>
        <div className="m-0 mb-2 flex flex-col">
          {!read ? (
            <p className="h-0 text-xs font-light dark:text-white">11:30</p>
          ) : (
            <div>
              <p className="ml-0.5 h-0 text-xs font-light dark:text-white">
                read
              </p>

              <p className="h-0 text-xs font-light dark:text-white">11:30</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MessageText
