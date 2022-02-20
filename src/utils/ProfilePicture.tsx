import React from 'react'

import { colorPalette } from './color'

type ProfilePictureValue = {
  photoURL: string | null
  name: string
  color: string
}

const ProfilePicture = ({ photoURL, name, color }: ProfilePictureValue) => {
  return (
    <>
      <p
        className={` m-0 flex h-9 w-9 flex-none items-center justify-center rounded-full  text-base font-bold`}
        style={{ backgroundColor: colorPalette[color] }}
      >
        {photoURL === null ? (
          name?.slice(0, 2).toUpperCase()
        ) : (
          <img alt="pic" className="rounded-full" src={photoURL} />
        )}
      </p>
    </>
  )
}

export default ProfilePicture
