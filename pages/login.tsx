import { Switch } from 'antd'
import React from 'react'
import Input1 from '../components/Input1'
import SwitchDark from '../components/SwitchDark'

const login = () => {
  return (
    <div className=" flex h-screen w-screen  bg-gradient-to-b from-gray-200 to-gray-300 dark:from-slate-800 dark:to-slate-900">
      <div className="m-auto flex  h-72 w-96 rounded-3xl bg-gray-200 shadow-sm shadow-indigo-500 dark:bg-gray-700">
        <form className="m-auto flex h-5/6 w-4/6 flex-col">
          <h2 className="mx-auto pt-3 text-xl text-gray-600 dark:text-gray-200">
            Nextjs Chatapp
          </h2>
          <p className="m-1 text-xs text-gray-500 dark:text-gray-400">
            username
          </p>

          <Input1 name="username" type="text" />
          <p className="m-1 text-xs text-gray-500 dark:text-gray-400">
            password
          </p>
          <Input1 name="password" type="password" />

          <button
            type="submit"
            className="mx-auto mt-4 h-6 w-36  bg-indigo-500 text-sm font-semibold text-gray-200"
          >
            login/signin
          </button>
        </form>
      </div>

      <SwitchDark />
    </div>
  )
}

export default login
