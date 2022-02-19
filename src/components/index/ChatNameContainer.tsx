import ChatNameHeader from '../ChatBox/ChatName/ChatNameHeader'
import ChatNameList from '../ChatBox/ChatName/ChatNameList'

export const ChatNameContainer = () => {
  return (
    <section className="flex w-1/4  flex-col ">
      <ChatNameHeader />
      <ChatNameList />
    </section>
  )
}
