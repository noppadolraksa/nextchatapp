import React from 'react'
import ChatDetailSettingListDarkMode from './ChatDetailSettingListDarkMode'
import ChatDetailSettingListLogout from './ChatDetailSettingListLogout'

type Props = {
  darkMode: boolean
  setDarkMode: (val: boolean) => void
}

const ChatDetailSettingList = ({ darkMode, setDarkMode }: Props) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-start gap-2 ">
      <ChatDetailSettingListDarkMode
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <ChatDetailSettingListLogout />
    </div>
  )
}

export default ChatDetailSettingList
