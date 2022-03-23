import { useEffect, useRef } from 'react'
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
  email?: string
  password?: string
  confirmPassword?: string
  nickName?: string
  formState?: { errors: string }
}

export const RegisterFormContainer = () => {
  const router = useRouter()
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>()

  const password = useRef<string | undefined>(undefined)
  password.current = watch('password', '')

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    const auth = getAuth()

    await createUserWithEmailAndPassword(auth, data.email!, data.password!)
      .then(async (userCreditional) => {
        const user = userCreditional.user
        await updateProfile(user, {
          displayName: data.nickName,
        })
        router.push('/chat')
      })
      .catch((err: { message: any }) => {
        const errorMessage = err.message
        alert(`${errorMessage}`)
      })
  }
  useEffect(() => {
    const auth = getAuth()
    const user = auth.currentUser
    if (user) {
      router.push('/chat')
    }
  }, [])

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
