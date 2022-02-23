import {
  ProfilePicture,
  ProfilePictureWithName,
} from '../../../utils/ProfilePicture'

type ChatNameValue = {
  displayName: string
  color: string
  photoURL: string
  select: any
  uid: string
}

const ChatName = ({
  displayName,
  color,
  photoURL,
  select,
  uid,
}: ChatNameValue) => {
  return (
    <div
      className={`mx-2 my-0 flex cursor-pointer flex-col justify-center rounded-xl p-2 transition-all duration-300   ease-in-out hover:bg-slate-300  hover:dark:bg-indigo-500
      ${select === uid ? 'bg-gray-300 dark:bg-slate-600 ' : 'bg-inherit'}
      `}
      id={uid}
      // style={
      //   select === email
      //     ? { backgroundColor: '#a5b4fc' }
      //     : { backgroundColor: 'inherit' }
      // }
    >
      {/* ${select && 'bg-indigo-300'} */}
      <div className="mr-2 mb-2 mt-0 flex items-center justify-start ">
        <ProfilePictureWithName
          photoURL={photoURL}
          displayName={displayName}
          color={color}
        />
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
