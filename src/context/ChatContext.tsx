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
import { auth, db } from '../../config/firebase'

import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { colorPalette, randomProperty } from '../utils/color'
import { AuthContextDefaultValues, AuthContextInterface } from './AuthContext'

export type ChatContextInterface = {
  select: string
  //Dispatch<SetStateAction<string>>    <= string is the type of select

  setSelect: Dispatch<SetStateAction<string>>
  chat: AuthContextInterface
  setChat: Dispatch<SetStateAction<AuthContextInterface>>
}

const chatContextDefaultValues: ChatContextInterface = {
  select: '',
  setSelect: () => {},
  chat: AuthContextDefaultValues,
  setChat: () => {},
}

export const ChatContext = createContext<ChatContextInterface>(
  chatContextDefaultValues
)
//[ChatContextInterface, Dispatch<SetStateAction<ChatContextInterface>>] | null

export const ChatProvider: FC = ({ children }) => {
  const [select, setSelect] = useState<string>('')
  const [chat, setChat] = useState<AuthContextInterface>(
    AuthContextDefaultValues
  )

  const router = useRouter()

  // const toggleSelect = (select: react.SetStateAction<string>) => {
  //   setSelect(select)
  // }

  // useEffect(() => {}, [])

  return (
    <>
      <ChatContext.Provider value={{ select, chat, setSelect, setChat }}>
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
