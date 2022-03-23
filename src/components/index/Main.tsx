import { FC } from 'react'

export const Main: FC = ({ children }) => {
  return (
    <main className="m-auto  flex h-5/6 w-5/6 justify-between rounded-3xl bg-gray-200 shadow-sm shadow-indigo-500 dark:bg-gray-700">
      {children}
    </main>
  )
}
