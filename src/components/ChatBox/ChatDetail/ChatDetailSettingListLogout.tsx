import { LogoutOutlined } from '@ant-design/icons'
import React from 'react'
import { getAuth, signOut } from '@firebase/auth'
import { useRouter } from 'next/router'

const ChatDetailSettingListLogout = () => {
  const auth = getAuth()
  const router = useRouter()

  const handleSignOut = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    e.preventDefault()
    signOut(auth)
      .then(() => {
        console.log('log out successfully')
        router.push('/login')
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <p
      className=" m-0 flex h-12 w-5/6 cursor-pointer items-center justify-between  rounded-xl bg-slate-300 pl-4 pr-4 text-sm font-bold text-gray-800 dark:bg-gray-600 dark:text-gray-200"
      onClick={(e) => {
        handleSignOut(e)
      }}
    >
      Logout
      <LogoutOutlined />
    </p>
  )
}

export default ChatDetailSettingListLogout
