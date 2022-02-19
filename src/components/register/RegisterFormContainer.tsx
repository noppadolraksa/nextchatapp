import { useContext, useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ButtonRegister } from '../../utils/form/button'

import { TextError, TextHeader, TextSmLight } from '../../utils/form/text'
import { ConfirmPassword, Email, Nickname, Password } from './form'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { useRouter } from 'next/router'

interface IFormInputs {
  email: string
  password: string
  confirmPassword: string
  nickName: string
  formState: { errors: string }
}

export const RegisterFormContainer = () => {
  const router = useRouter()
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>()

  const password = useRef({})
  password.current = watch('password', '')

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    const auth = getAuth()
    const user = auth.currentUser
    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async (res) => {
        if (user) {
          await updateProfile(user, {
            displayName: data.nickName,
          })
          router.push('/')
        }
      })
      .catch((err) => {
        const errorMessage = err.message
        alert(`${errorMessage}`)
      })

    try {
      if (user) {
        await updateProfile(user, {
          displayName: data.nickName,
        })
        router.push('/')
      }
    } catch (error: any) {}

    // const auth = getAuth()

    // signInWithEmailAndPassword(auth, data.email, data.password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user
    //     console.log(user)
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code
    //     const errorMessage = error.message
    //   })
  }

  return (
    <form
      className=" m-8 flex w-full flex-col items-center justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextHeader>Register</TextHeader>
      <div className="flex w-full flex-col">
        <TextSmLight>e-mail</TextSmLight>
        <Email control={control} />
        {errors.email && <TextError>{errors.email.message}</TextError>}
      </div>
      <div className="flex gap-1">
        <div className="flex flex-col">
          <TextSmLight>password</TextSmLight>
          <Password control={control} />
          {errors.password && <TextError>{errors.password.message}</TextError>}
        </div>
        <div className="flex flex-col ">
          <TextSmLight>confirm-password</TextSmLight>

          <ConfirmPassword password={password} control={control} />
          {errors.confirmPassword && (
            <TextError>{errors.confirmPassword.message}</TextError>
          )}
        </div>
      </div>
      <div className="flex w-full flex-col">
        <TextSmLight>nickname</TextSmLight>
        <Nickname control={control} />
        {errors.nickName && <TextError>{errors.nickName.message}</TextError>}
      </div>
      <ButtonRegister>submit</ButtonRegister>
    </form>
  )
}
