import React from 'react'
import { useAuth } from '../../../context/AuthContext'
import { ProfilePicture } from '../../../utils/ProfilePicture'

const ChatNameHeader = () => {
  const currentUser = useAuth()

  return (
    <div className=" flex  w-full items-center justify-between p-4 transition-all duration-1000 ease-in-out ">
      <div className="flex items-center justify-center gap-2">
        <div>
          <ProfilePicture
            photoURL={currentUser?.photoURL}
            displayName={currentUser?.displayName}
          />
        </div>
        <h3 className="my-auto flex  text-lg font-bold text-indigo-900 dark:text-indigo-300">
          {'hi~ ' + currentUser?.displayName}
        </h3>
      </div>
      <p className="my-auto mr-2 flex cursor-pointer items-center justify-center rounded-xl bg-indigo-500 py-px px-3 text-xl text-gray-200 dark:bg-indigo-500">
        +
      </p>
    </div>
  )
}

export default ChatNameHeader
