import React from 'react'

import { colorPalette } from './color'

type ProfilePictureValue = {
  photoURL: string | null
  displayName: string
}

export const ProfilePicture = ({
  photoURL,
  displayName,
}: ProfilePictureValue) => {
  return (
    <>
      <p
        className={` m-0 flex h-8 w-8 flex-none items-center justify-center rounded-full   text-base font-bold`}
        style={
          photoURL === null
            ? { backgroundColor: '#3ab7bf' }
            : { backgroundColor: 'inherit' }
        }
      >
        {photoURL === null ? (
          displayName?.slice(0, 2).toUpperCase()
        ) : (
          <img alt="pic" className="rounded-full" src={photoURL} />
        )}
      </p>
    </>
  )
}

export const ProfilePictureWithName = ({
  photoURL,

  displayName,
}: ProfilePictureValue) => {
  return (
    <div className=" m-1 flex w-full  items-center gap-1 truncate   ">
      <ProfilePicture photoURL={photoURL} displayName={displayName} />

      <p className="my-auto min-w-0 truncate font-medium text-gray-900 hover:text-clip dark:text-gray-200">
        {displayName}
      </p>
    </div>
  )
}
