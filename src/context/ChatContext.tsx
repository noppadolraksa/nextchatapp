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
import { getChatByChatId } from '../utils/firebaseApi/ChatApi'

export type ChatContextInterface = {
  chat: any
  setChat: Dispatch<SetStateAction<any>>
  chatId: string
  setChatId: Dispatch<SetStateAction<string>>
}

const chatContextDefaultValues: ChatContextInterface = {
  chat: null,
  setChat: () => {},
  chatId: '',
  setChatId: () => {},
}

export const ChatContext = createContext<ChatContextInterface>(
  chatContextDefaultValues
)
//[ChatContextInterface, Dispatch<SetStateAction<ChatContextInterface>>] | null

export const ChatProvider: FC = ({ children }) => {
  const [chat, setChat] = useState(null)
  const [chatId, setChatId] = useState<string>('')
  const currentUser = useAuth()

  // const toggleSelect = (select: react.SetStateAction<string>) => {
  //   setSelect(select)
  // }

  // useEffect(() => {
  //   getChatByChatId(chatId).then((data: any) => {
  //     // setChat(data)
  //     console.log(data)
  //   })
  //   // console.log(chat)
  // }, [chatId])

  return (
    <>
      <ChatContext.Provider value={{ chat, setChat, chatId, setChatId }}>
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
