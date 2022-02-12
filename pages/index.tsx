import Head from 'next/head'
import ChatName from '../components/ChatName'
import MessageHeader from '../components/Message/MessageHeader'
import MessageInput from '../components/Message/MessageInput'
import MessageText from '../components/Message/MessageText'
import SwitchDark from '../components/SwitchDark'

export default function Home() {
  return (
    <div className=" flex h-screen w-screen  bg-gradient-to-b from-gray-200 to-gray-300 dark:from-slate-800 dark:to-slate-900">
      <Head>
        <title>Nextjs Chatbot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="m-auto  flex h-5/6 w-5/6 justify-between rounded-3xl bg-gray-200 shadow-sm shadow-indigo-500 dark:bg-gray-700">
        <section className="flex w-1/4  flex-col ">
          <div className=" flex h-12 w-full items-center justify-between pt-4 ">
            <div className="my-auto flex px-3 text-xl font-bold text-gray-600 dark:text-white">
              My Chats
            </div>
            <p className="my-auto mr-2 flex items-center justify-center rounded-xl bg-indigo-500 py-px px-3 text-xl text-gray-200 dark:bg-indigo-500">
              +
            </p>
          </div>
          <div className="mt-4 h-full  w-full overflow-auto">
            <ChatName name="bright" />
            <ChatName name="muk" />
            <ChatName name="dew" />
            <ChatName name="bright" />
            <ChatName name="muk" />
            <ChatName name="bright" />
            <ChatName name="muk" />
            <ChatName name="dew" />
            <ChatName name="bright" />
            <ChatName name="muk" />
            <ChatName name="bright" />
            <ChatName name="muk" />
            <ChatName name="dew" />
            <ChatName name="bright" />
            <ChatName name="muk" />
          </div>
        </section>
        <section className=" relative box-border flex w-2/4 flex-col justify-between border-x-2 border-gray-300 dark:border-gray-500">
          <MessageHeader />
          <MessageText />
          <MessageInput />
        </section>
        <section className="w-1/4 "></section>
      </main>
      <SwitchDark />
    </div>
  )
}
