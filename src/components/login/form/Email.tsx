import { Controller, Control } from 'react-hook-form'
import { Input1 } from '../../../utils/form/input'

export const Email = ({ control }: { control: Control }) => {
  return (
    <Controller
      render={({ field }) => (
        <Input1 {...field} type="text" innerRef={field.ref} />
      )}
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
