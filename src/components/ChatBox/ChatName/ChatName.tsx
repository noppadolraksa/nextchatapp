import moment from 'moment'
import { ProfilePictureWithName } from '../../../utils/ProfilePicture'

type ChatNameValue = {
  displayName: string
  color: string
  photoURL: string
  select: any
  uid: string
  lastMessage: string
  lastMessageTime: any
}

const ChatName = ({
  displayName,
  photoURL,
  select,
  uid,
  lastMessage,
  lastMessageTime,
}: ChatNameValue) => {
  return (
    <div
      className={`mx-2 my-0 flex cursor-pointer flex-col justify-center rounded-xl p-2 transition-all duration-300   ease-in-out hover:bg-slate-300  hover:dark:bg-indigo-500
      ${select === uid ? 'bg-gray-300 dark:bg-slate-600 ' : 'bg-inherit'}
      `}
      id={uid}
    >
      <div className="mr-2 mb-2 mt-0 flex items-center justify-start ">
        <ProfilePictureWithName photoURL={photoURL} displayName={displayName} />
      </div>
      <div className="mb-0 flex items-center justify-between ">
        <p className="mb-0 h-5 w-5/6 overflow-hidden overflow-ellipsis whitespace-nowrap text-sm text-gray-700 dark:text-gray-400">
          {lastMessage}
        </p>

        <p className="mb-0  h-5 whitespace-nowrap text-xs text-gray-700 dark:text-gray-400">
          {moment(lastMessageTime?.seconds * 1000).format('LT')}
        </p>
      </div>
    </div>
  )
}

export default ChatName
