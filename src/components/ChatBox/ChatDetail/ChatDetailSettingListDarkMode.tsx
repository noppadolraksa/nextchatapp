import { Switch } from 'antd'
import { useTheme } from 'next-themes'
import React, { useEffect } from 'react'

type Props = {
  darkMode: boolean
  setDarkMode: (val: boolean) => void
}

const ChatDetailSettingListDarkMode = ({ darkMode, setDarkMode }: Props) => {
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    if (darkMode === true) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [darkMode])

  return (
    <p
      className=" m-0 flex h-12 w-5/6 cursor-pointer items-center justify-between  rounded-xl bg-slate-300 pl-4 pr-4 text-sm font-bold text-gray-800 dark:bg-gray-600 dark:text-gray-200"
      onClick={() => setDarkMode(!darkMode)}
    >
      Dark Mode
      <Switch checked={darkMode} />
    </p>
  )
}

export default ChatDetailSettingListDarkMode
