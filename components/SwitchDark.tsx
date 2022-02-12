import React, { useEffect, useState } from 'react'
import { Switch } from 'antd'
import { useTheme } from 'next-themes'

const SwitchDark = () => {
  const [darkMode, setDarkMode] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    if (darkMode === true) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [darkMode])

  return (
    <div className=" fixed  top-4 right-4 flex justify-center">
      <p className="mr-4 pr-4  dark:text-gray-200 ">Dark Mode ?</p>
      <Switch
        checked={darkMode}
        onClick={() => {
          setDarkMode(!darkMode)
        }}
      />
    </div>
  )
}

export default SwitchDark
