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
      {photoURL === null ? (
        <p
          className={` flex h-9 w-9 flex-none items-center justify-center rounded-full  text-base font-bold`}
          style={{ backgroundColor: colorPalette[color] }}
        >
          {name.slice(0, 2).toUpperCase()}
        </p>
      ) : (
        <img
          alt="pic"
          src={photoURL}
          className={` flex h-9 w-9  flex-none items-center justify-center rounded-full  text-base font-bold`}
          style={{ backgroundColor: colorPalette[color] }}
        ></img>
      )}
    </>
  )
}

export default ProfilePicture
