import { DocumentData } from 'firebase/firestore'
import { useRouter } from 'next/router'
import { FC, ReactNode, useState } from 'react'
import MessageBox from '../../src/components/ChatBox/Message/MessageBox'
import {
  ChatDetailContainer,
  ChatMessageContainer,
  ChatNameContainer,
  HeadTags,
  Layout,
  Main,
} from '../../src/components/index'
import { TextSm } from '../../src/utils/form/text'

type HomeType = {
  chat: any
  messages: string
  chatId: string
  messagesProp: DocumentData[]
  setMessagesProp: (val: DocumentData[]) => void
  children: ReactNode
}

const Home = ({
  children,
  chat,
  messages,
  chatId,
  messagesProp,
  setMessagesProp,
}: HomeType) => {
  const router = useRouter()
  const [setting, setSetting] = useState<boolean>(false)

  return (
    <Layout>
      <HeadTags />
      <Main>
        <ChatNameContainer />
        {router.pathname === '/chat' && (
          <>
            <div className=" relative m-0   flex w-2/4 flex-col items-center justify-center border-x-2 border-indigo-200  dark:border-gray-500">
              <TextSm>please select friends to chat...</TextSm>
            </div>
          </>
        )}

        {children}
        <ChatDetailContainer
          chat={chat}
          chatId={chatId}
          messages={messages}
          messagesProp={messagesProp}
          setMessagesProp={setMessagesProp}
        />
      </Main>
    </Layout>
  )
}
export default Home
