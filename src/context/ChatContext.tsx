import react, {
  useState,
  useEffect,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  FC,
} from 'react'
import { useRouter } from 'next/router'

import { colorPalette, randomProperty } from '../utils/color'
import { useAuth } from './AuthContext'

import { DocumentData } from 'firebase/firestore'

export type ChatContextInterface = {
  messagesContext: DocumentData | undefined
  setMessagesContext: Dispatch<SetStateAction<DocumentData | undefined>>
  chatIdContext: string
  setChatIdContext: Dispatch<SetStateAction<string>>
}
const ChatContextDefaultValues = {
  messagesContext: [],
  setMessagesContext: () => {},
  chatIdContext: '',
  setChatIdContext: () => {},
}

export const ChatContext = createContext<ChatContextInterface>(
  ChatContextDefaultValues
)
//[ChatContextInterface, Dispatch<SetStateAction<ChatContextInterface>>] | null

export const ChatProvider: FC = ({ children }) => {
  const [messagesContext, setMessagesContext] = useState<DocumentData>()
  const [chatIdContext, setChatIdContext] = useState<string>('')
  const currentUser = useAuth()

  // const toggleSelect = (select: react.SetStateAction<string>) => {
  //   setSelect(select)
  // }

  // useEffect(() => {
  //   getChatByChatIdContext(chatIdContext).then((data: any) => {
  //     // setChat(data)
  //     console.log(data)
  //   })
  //   // console.log(chat)
  // }, [chatIdContext])

  return (
    <>
      <ChatContext.Provider
        value={{
          messagesContext,
          setMessagesContext,
          chatIdContext,
          setChatIdContext,
        }}
      >
        {children}
      </ChatContext.Provider>
    </>
  )
}
// export const useAuth = () => useContext(AuthContext)
export const useChat = () => {
  const ctxValue = useContext(ChatContext)

  return ctxValue
}
// fetch context => const user = useAuth().currentUser
