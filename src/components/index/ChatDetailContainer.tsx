import { DocumentData } from 'firebase/firestore'
import { useState } from 'react'
import ChatDetailMember from '../ChatBox/ChatDetail/ChatDetailMember'
import ChatDetailPhoto from '../ChatBox/ChatDetail/ChatDetailPhoto'
import ChatDetailSettingIcon from '../ChatBox/ChatDetail/ChatDetailSettingIcon'
import ChatDetailSetting from '../ChatBox/ChatDetail/ChatDetailSettingList'

type ChatDetailContainerType = {
  chat: any
  messages: string
  chatId: string
  messagesProp: DocumentData[]
  setMessagesProp: (val: DocumentData[]) => void
}

export const ChatDetailContainer = ({
  chat,
  messages,
  chatId,
  messagesProp,
  setMessagesProp,
}: ChatDetailContainerType) => {
  const [setting, setSetting] = useState<boolean>(false)
  const [darkMode, setDarkMode] = useState<boolean>(false)

  if (chat === undefined) {
    return (
      <>
        <section className="relative w-1/4">
          <div className="absolute  h-5/6 w-full ">
            <ChatDetailSettingIcon setting={setting} setSetting={setSetting} />
            {!setting ? (
              <></>
            ) : (
              <ChatDetailSetting
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            )}
          </div>
        </section>
      </>
    )
  }
  return (
    <section className="relative w-1/4">
      <div className="absolute  h-5/6 w-full ">
        <ChatDetailSettingIcon setting={setting} setSetting={setSetting} />
        {!setting ? (
          <>
            <ChatDetailMember chat={chat} />
            <ChatDetailPhoto
              messages={messages}
              chatId={chatId}
              messagesProp={messagesProp}
              setMessagesProp={setMessagesProp}
            />
          </>
        ) : (
          <ChatDetailSetting darkMode={darkMode} setDarkMode={setDarkMode} />
        )}
      </div>
    </section>
  )
}
