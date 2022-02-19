import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'

type Props = {
  children: any
  data: { email: string; password: string }
}

export const ButtonSignIn = ({ children, data }: Props) => {
  const auth = getAuth()

  const handleSignIn = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
      })
  }

  return (
    <button
      type="submit"
      className="m-4 mx-auto flex h-6 w-36 items-center justify-center bg-indigo-500 py-2 text-sm font-semibold text-gray-200"
      onSubmit={(e) => {
        handleSignIn(e)
      }}
    >
      {children}
    </button>
  )
}

export const ButtonRegister = ({ children }: any) => {
  return (
    <button
      type="submit"
      className="mx-auto mt-4 flex h-6 w-36 items-center justify-center bg-indigo-500 py-2 text-sm font-semibold text-gray-200"
    >
      {children}
    </button>
  )
}
