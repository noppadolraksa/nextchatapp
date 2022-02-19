import {
  ChatDetailContainer,
  ChatMessageContainer,
  ChatNameContainer,
  HeadTags,
  Layout,
  Main,
} from '../src/components/index'

export default function Home() {
  return (
    <Layout>
      <HeadTags />
      <Main>
        <ChatNameContainer />
        <ChatMessageContainer />
        <ChatDetailContainer />
      </Main>
    </Layout>
  )
}
