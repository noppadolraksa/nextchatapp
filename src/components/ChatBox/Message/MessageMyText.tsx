import React from 'react'
import ProfilePicture from '../../../utils/ProfilePicture'

const MessageMyText = () => {
  return (
    <div className="flex h-full flex-col justify-start overflow-scroll">
      <div className="mx-4 flex gap-2">
        <ProfilePicture
          photoURL={null}
          displayName="noppadol raksasiripong"
          color="midnight"
        />
        <div className="flex flex-col items-start">
          <p className="m-1 flex flex-1 items-center  rounded-md  bg-green-300 p-2 text-sm font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            excepturi suscipit dolore sequi at quisquam sit obcaecati harum quas
            corporis. Saepe optio odit qui illo eos vero sequi exercitationem
            fugit.
          </p>
          <p className="m-1 flex flex-1 items-center  rounded-md  bg-green-300 p-2 text-sm font-light">
            Lorem ipsum
          </p>
        </div>
      </div>
    </div>
  )
}

export default MessageMyText
