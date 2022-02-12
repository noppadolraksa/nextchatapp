import React from 'react'

const MessageText = () => {
  return (
    <div className="mx-4 flex gap-2">
      <p className="mt-1 flex h-9 w-9 flex-none  items-center justify-center rounded-full bg-slate-500 text-lg font-bold">
        AD
      </p>
      <div className="flex flex-col items-start">
        <p className="m-1 flex flex-1 items-center  rounded-md  bg-green-300 p-2 text-sm font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          excepturi suscipit dolore sequi at quisquam sit obcaecati harum quas
          corporis. Saepe optio odit qui illo eos vero sequi exercitationem
          fugit.
        </p>
        <p className="m-1 flex flex-1 items-center  rounded-md  bg-green-300 p-2 text-sm font-light">
          Lorem ipsum
        </p>
      </div>
    </div>
  )
}

export default MessageText
