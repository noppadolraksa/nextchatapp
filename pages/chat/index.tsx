import { useRouter } from 'next/router'
import { FC } from 'react'
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

const Home: FC = ({ children }) => {
  const router = useRouter()

  return (
    <Layout>
      <HeadTags />
      <Main>
        <ChatNameContainer />
        {router.pathname === '/chat' && (
          <div className=" relative m-0   flex w-3/4 flex-col items-center justify-center border-l-2 border-gray-300  dark:border-gray-500">
            <TextSm>please select friends to chat...</TextSm>
          </div>
        )}

        {children}
      </Main>
    </Layout>
  )
}
export default Home
