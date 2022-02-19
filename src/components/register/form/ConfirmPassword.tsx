import { MutableRefObject } from 'react'
import { Controller, Control } from 'react-hook-form'
import { Input2 } from '../../../utils/form/input'

interface IProps {
  control: Control
  password: MutableRefObject<{}>
}

export const ConfirmPassword = ({ control, password }: IProps): JSX.Element => {
  return (
    <Controller
      render={({ field }) => <Input2 {...field} type="password" />}
      name="confirmPassword"
      control={control}
      rules={{
        required: 'password required..',
        validate: {
          validate: (value) =>
            value === password.current || 'the password do not match',
        },
      }}
    />
  )
}
