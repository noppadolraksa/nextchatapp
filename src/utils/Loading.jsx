import React from 'react'
import ReactLoading from 'react-loading'

// type Props = {
//   type: string
//   color: string
// }

const Loading = ({ type, color }) => {
  return (
    <div className="m-auto flex h-screen w-screen items-center justify-center">
      <ReactLoading type={type} color={color} height={200} width={100} />
    </div>
  )
}

export default Loading
