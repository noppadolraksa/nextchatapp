import React from 'react'

import { PaperClipOutlined, SendOutlined } from '@ant-design/icons'
import { useTheme } from 'next-themes'

const MessageInput = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div className="mb-1 flex h-12 justify-between">
      <div className="w-5/6">
        <input
          type="text"
          placeholder="Message here.."
          className="h-full w-full bg-inherit p-2 text-gray-600 dark:text-white"
        />
      </div>
      <div className=" flex items-center justify-center gap-1">
        <p className="m-auto flex h-9 w-9 items-center justify-center text-lg text-slate-900 dark:text-white ">
          <PaperClipOutlined />
        </p>
        <div className="mr-2 flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500">
          <SendOutlined
            style={{
              color: 'white',
              fontSize: '16px',
              marginLeft: '2px',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default MessageInput
