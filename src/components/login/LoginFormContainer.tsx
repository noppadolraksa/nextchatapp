import { ButtonSignIn } from '../../utils/form/button'

import {
  TextError,
  TextGoogleLogin,
  TextHeader,
  TextNeedAnAccount,
  TextSm,
} from '../../utils/form/text'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react'
import { Email } from './form/Email'
import { Password } from './form/Password'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

interface IFormInputs {
  email?: string
  password?: string
  formState?: { errors: string }
}

interface IValue {
  email: string
  password: string
}

export const LoginFormContainer = () => {
  const {
    handleSubmit,
    control,

    formState: { errors },
  } = useForm<IFormInputs>()

  const [defaultValues, setDefaultValues] = useState<IValue>({
    email: '',
    password: '',
  })

  const onSubmit = (data: IFormInputs) => {
    const auth = getAuth()

    signInWithEmailAndPassword(auth, data.email!, data.password!)
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
    <form
      className=" m-8 flex w-full flex-col items-center justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextHeader>Nextjs Chatapp</TextHeader>
      <TextSm>email</TextSm>

      <Email control={control} />
      {errors.email && <TextError>{errors.email.message}</TextError>}
      <TextSm>password</TextSm>
      <Password control={control} />
      {errors.password && <TextError>{errors.password.message}</TextError>}

      <ButtonSignIn data={defaultValues}>login/signin</ButtonSignIn>
      <TextNeedAnAccount />

      <TextGoogleLogin />
    </form>
  )
}
