import React, { useState } from 'react'
import ChatDetailTitle from './ChatDetailTitle'

import ChatDetailMemberList from './ChatDetailMemberList'

const ChatDetailMember = () => {
  const [show, setShow] = useState<boolean>(false)

  return (
    <div>
      <ChatDetailTitle chatName="Member List" show={show} setShow={setShow} />
      {show && <ChatDetailMemberList />}
    </div>
  )
}

export default ChatDetailMember
