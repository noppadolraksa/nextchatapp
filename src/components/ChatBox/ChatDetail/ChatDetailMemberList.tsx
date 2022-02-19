import React from 'react'
import { member } from '../../../../data'
import ProfilePicture from '../../../utils/ProfilePicture'

const ChatDetailMemberList = () => {
  return (
    <div className="mt-2 h-48 overflow-scroll transition-all  ">
      <div className="mx-3 mt-3 flex h-full  flex-col items-start justify-start ">
        {member.map((member, index) => (
          <div key={index} className="flex items-center justify-start gap-1">
            <ProfilePicture
              photoURL={null}
              name={member.name}
              color={member.color}
            />

            <p className=" w-1/2 overflow-hidden text-sm font-bold text-gray-600 dark:text-white">
              {member.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChatDetailMemberList
