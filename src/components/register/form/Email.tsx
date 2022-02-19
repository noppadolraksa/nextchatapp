import { Controller, Control } from 'react-hook-form'
import { Input2 } from '../../../utils/form/input'

export const Email = ({ control }: { control: Control }): JSX.Element => {
  return (
    <Controller
      render={({ field }) => <Input2 {...field} type="text" />}
      name="email"
      control={control}
      rules={{
        required: 'email required..',
        minLength: {
          value: 5,
          message: 'email must be at least 5 characters',
        },
        maxLength: {
          value: 50,
          message: 'email has 50 characters limit',
        },
        pattern: {
          value:
            /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
          message: 'please fill email correctly',
        },
      }}
    />
  )
}
