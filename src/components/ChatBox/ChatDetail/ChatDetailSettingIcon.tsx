import { SettingOutlined } from '@ant-design/icons'
import React from 'react'

type Props = {
  setting: boolean
  setSetting: (val: boolean) => void
}

const ChatDetailSettingIcon = ({ setting, setSetting }: Props) => {
  const handleOpenSetting = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    e.preventDefault()
    setSetting(!setting)
  }

  return (
    <div
      className="my-2 flex cursor-pointer items-center justify-center text-slate-800  dark:text-white"
      onClick={(e) => {
        handleOpenSetting(e)
      }}
    >
      <SettingOutlined />
    </div>
  )
}

export default ChatDetailSettingIcon
