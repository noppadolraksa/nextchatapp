import {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  FC,
} from 'react'
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

export const ChatProvider: FC = ({ children }) => {
  const [messagesContext, setMessagesContext] = useState<DocumentData>()
  const [chatIdContext, setChatIdContext] = useState<string>('')

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

export const useChat = () => {
  const ctxValue = useContext(ChatContext)

  return ctxValue
}
