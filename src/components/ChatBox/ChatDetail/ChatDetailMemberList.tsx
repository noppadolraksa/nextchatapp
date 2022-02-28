import React from 'react'
import { member } from '../../../../data'
import { ProfilePictureWithName } from '../../../utils/ProfilePicture'

const ChatDetailMemberList = () => {
  return (
    <div className="mt-2 h-48 overflow-scroll  transition delay-500 ease-in-out ">
      <div className="mx-2 mb-2 mt-0 flex flex-col items-center justify-start">
        {/* <div className=" mx-3 mt-3 flex h-full  flex-col items-start justify-start "> */}
        {member.map((member, index) => (
          <ProfilePictureWithName
            photoURL={null}
            displayName={member.name}
            key={index}
          />
          // <div key={index} className="flex items-center justify-start gap-1">
          //   <ProfilePicture
          //     photoURL={null}
          //     displayName={member.name}
          //     color={member.color}
          //   />

          //   <p className=" my-auto min-w-0 truncate text-sm font-bold text-gray-600 dark:text-white">
          //     {member.name}
          //   </p>
          // </div>
        ))}
      </div>
    </div>
  )
}

export default ChatDetailMemberList
