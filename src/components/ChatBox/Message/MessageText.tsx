import moment from 'moment'
import React from 'react'
import { useAuth } from '../../../context/AuthContext'
import { ProfilePicture } from '../../../utils/ProfilePicture'

type MessageTextValue = {
  text: string
  uid: string
  timestamp: number
  displayName: string
  photoURL: string
  textType: string
}

const MessageText = ({
  text,
  uid,
  displayName,
  timestamp,
  photoURL,
  textType,
}: MessageTextValue) => {
  const currentUser = useAuth()

  return (
    <div className="mx-4 flex gap-2">
      <div
        className={`flex items-center justify-center ${
          uid === currentUser.uid ? 'invisible' : 'visible'
        }`}
      >
        <ProfilePicture photoURL={photoURL} displayName={displayName} />
      </div>
      <div className="flex w-full flex-col items-start">
        <div
          className={`flex w-full flex-col  ${
            uid !== currentUser.uid ? 'items-start' : ' items-end'
          } `}
        >
          <div
            className={`flex  ${
              uid === currentUser.uid && 'flex-row-reverse'
            } items-end`}
          >
            {textType === 'text' ? (
              <p
                className={`m-1 flex flex-1  items-center rounded-md ${
                  uid !== currentUser.uid
                    ? 'bg-gray-300'
                    : 'bg-indigo-500 text-white'
                }   p-2 text-sm font-light`}
                style={{ minHeight: '2rem' }}
              >
                {text}
              </p>
            ) : (
              <img
                className=" flex h-24 flex-1 items-center rounded-md object-contain p-1 "
                alt="picture"
                src={text}
              />
            )}
            <div className="m-0 mb-2 flex flex-col">
              <p className="h-0 text-xs font-light dark:text-white">
                {moment(timestamp).format('LT')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageText
