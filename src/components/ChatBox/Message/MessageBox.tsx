import React from 'react'
import { ProfilePicture } from '../../../utils/ProfilePicture'
import MessageText from './MessageText'

const MessageBox = () => {
  return (
    <div className="flex h-full flex-col justify-start overflow-scroll">
      <div className="mx-4 flex gap-2">
        <ProfilePicture
          photoURL={null}
          displayName="noppadol raksasiripong"
          color="bubble-gum"
        />
        <div className="flex w-full flex-col items-start">
          <MessageText
            text="Lorem assadas asad ad s wdad wd"
            whoSaid="other"
            read={true}
          />
          <MessageText
            text="Lorem assadas asad ad s wdad wd"
            whoSaid="me"
            read={true}
          />
          <MessageText
            text="Lorem assadas asad ad s wdad wd"
            whoSaid="me"
            read={true}
          />
          <MessageText
            text="Lorem assadas asad ad s wdad wdLorem assadas asad ad s wdad wdLorem assadas asad ad s wdad wdLorem assadas asad ad s wdad wdLorem assadas asad ad s wdad wdLorem assadas asad ad s wdad wdLorem assadas asad ad s wdad wd"
            whoSaid="me"
            read={false}
          />
        </div>
      </div>
    </div>
  )
}

export default MessageBox
