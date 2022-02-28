import { useState } from 'react'
import ChatNameHeader from '../ChatBox/ChatName/ChatNameHeader'
import ChatNameList from '../ChatBox/ChatName/ChatNameList'

export const ChatNameContainer = () => {
  // const [switchToFriends, setSwitchToFriends] = useState<boolean>(true)
  return (
    <section className="flex w-1/4  flex-col ">
      <ChatNameHeader
      // switchToFriends={switchToFriends}
      // setSwitchToFriends={setSwitchToFriends}
      />
      <ChatNameList />
    </section>
  )
}
