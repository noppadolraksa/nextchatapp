import React from 'react'

type Button1Value = {
  name: string
  type: string
}

const Input1 = ({ name, type }: Button1Value) => {
  return (
    <div>
      <input
        name={name}
        type={type}
        className="w-full border-b-2 border-indigo-500 bg-inherit p-2 text-sm font-light text-gray-900 dark:text-gray-200"
      />
    </div>
  )
}

export default Input1
