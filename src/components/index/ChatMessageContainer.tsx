import MessageBox from '../ChatBox/Message/MessageBox'
import MessageHeader from '../ChatBox/Message/MessageHeader'
import MessageInput from '../ChatBox/Message/MessageInput'

export const ChatMessageContainer = () => {
  return (
    <section className=" relative box-border flex w-2/4 flex-col justify-between border-x-2 border-gray-300 dark:border-gray-500">
      <MessageHeader />
      <MessageBox />
      <MessageInput />
    </section>
  )
}
