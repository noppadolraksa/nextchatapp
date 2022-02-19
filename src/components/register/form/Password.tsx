import { Controller, Control } from 'react-hook-form'
import { Input2 } from '../../../utils/form/input'

export const Password = ({ control }: { control: Control }) => {
  return (
    <Controller
      render={({ field }) => <Input2 {...field} type="password" />}
      name="password"
      control={control}
      rules={{
        required: 'password required..',
        minLength: {
          value: 5,
          message: 'password must be at least 5 characters',
        },
        maxLength: {
          value: 20,
          message: 'password has 20 characters limit',
        },
        pattern: {
          value: /\S*(\S*([a-zA-Z]\S*[0-9])|([0-9]\S*[a-zA-Z]))\S*/,
          message: 'password only contain characters and numbers',
        },
      }}
    />
  )
}
