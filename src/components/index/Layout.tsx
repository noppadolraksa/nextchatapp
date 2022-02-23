import { FC } from 'react'

export const Layout: FC = ({ children }) => {
  return (
    <div
      className={` flex h-screen w-screen  bg-gradient-to-b from-gray-200 to-gray-300  dark:from-slate-800 
    dark:to-slate-900`}
    >
      {children}
    </div>
  )
}
