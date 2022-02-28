import React, { Dispatch, SetStateAction } from 'react'
import { useAuth } from '../../../context/AuthContext'
import { ProfilePicture } from '../../../utils/ProfilePicture'

// type ChatNameType = {
//   switchToFriends: boolean
//   setSwitchToFriends: (val: boolean) => void
// }

const ChatNameHeader = (
  {
    // switchToFriends,
    // setSwitchToFriends,
  }
) => {
  const currentUser = useAuth()
  return (
    <div className=" flex  w-full items-center justify-between p-4 transition-all duration-1000 ease-in-out ">
      <div className="flex items-center justify-center gap-1">
        <div
        // className={`${
        //   switchToFriends
        //     ? 'rounded-full shadow-md shadow-slate-900 dark:shadow-gray-500'
        //     : ''
        // } cursor-pointer`}
        // onClick={() => {
        //   setSwitchToFriends(!switchToFriends)
        // }}
        >
          <ProfilePicture
            photoURL={currentUser?.photoURL}
            displayName={currentUser?.displayName}
            color={currentUser?.color}
          />
        </div>
        <h3 className="my-auto flex  text-xl font-bold text-gray-600 dark:text-white">
          Chats
        </h3>
      </div>
      <p className="my-auto mr-2 flex cursor-pointer items-center justify-center rounded-xl bg-indigo-500 py-px px-3 text-xl text-gray-200 dark:bg-indigo-500">
        +
      </p>
    </div>
  )
}

export default ChatNameHeader
