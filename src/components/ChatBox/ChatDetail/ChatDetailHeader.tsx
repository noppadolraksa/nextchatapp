import { SettingOutlined } from '@ant-design/icons'
import { useTheme } from 'next-themes'
import React from 'react'
import ChatDetailSettingIcon from './ChatDetailSettingIcon'

type Props = {
  chatName: string
}

const ChatDetailHeader = ({ chatName }: Props) => {
  const { theme, setTheme } = useTheme()

  return (
    <div className=" relative flex h-12 w-full items-center justify-center pt-4">
      <h3 className="mb-px  text-xl font-bold text-gray-600 dark:text-white">
        {chatName}
      </h3>
    </div>
  )
}

export default ChatDetailHeader
