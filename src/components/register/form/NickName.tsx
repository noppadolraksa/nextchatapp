import { Controller, Control } from 'react-hook-form'
import { Input2 } from '../../../utils/form/input'

export const Nickname = ({ control }: { control: Control }): JSX.Element => {
  return (
    <Controller
      render={({ field }) => <Input2 {...field} type="text" />}
      name="nickName"
      control={control}
      rules={{
        required: 'nickname required..',
        minLength: {
          value: 2,
          message: 'nickname must be at least 2 characters',
        },
        maxLength: {
          value: 15,
          message: 'nickname has 15 characters limit',
        },
        pattern: {
          value: /^[a-zA-Z0-9]*$/,
          message: 'nickname only contain characters and numbers',
        },
      }}
    />
  )
}
