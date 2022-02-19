import ProfilePicture from '../../../utils/ProfilePicture'

type ChatNameValue = {
  name: string
  color: string
  photoURL: string
}

const ChatName = ({ name, color, photoURL }: ChatNameValue) => {
  return (
    <div className="mx-2 my-0 flex cursor-pointer flex-col justify-center rounded-xl p-2  visited:bg-indigo-300 active:dark:bg-indigo-500 ">
      <div className="mr-2 mb-2 mt-0 flex items-center justify-start">
        <p className=" m-0 flex  items-center  overflow-x-hidden truncate whitespace-nowrap font-medium text-gray-900 dark:text-gray-200">
          <ProfilePicture photoURL={photoURL} name={name} color={color} />
          {name}
        </p>
        <div className=" my-auto h-px w-px rounded-full bg-indigo-500 p-1 dark:bg-gray-200" />
      </div>
      <div className="mb-0 flex items-center justify-between ">
        <p className="mb-0 h-5 w-5/6 overflow-hidden overflow-ellipsis whitespace-nowrap text-sm text-gray-700 dark:text-gray-400">
          Lorem ipsum dolor sit ametaasaa consectetur adipisicing elit. Suscipit
          aspernatur quibusdam cum commodi quod aliquam, ipsam cupiditate
          beatae, iure aperiam ea labore, unde veritatis ad ullam omnis totam
          hic nobis.
        </p>
        {/* date<1day ? 11:30 : 11Feb */}
        <p className="mb-0  h-5 text-sm text-gray-700 dark:text-gray-400">
          11Feb
        </p>
      </div>
    </div>
  )
}

export default ChatName
