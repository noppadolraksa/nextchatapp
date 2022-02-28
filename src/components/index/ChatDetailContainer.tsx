import { useState } from 'react'
import ChatDetailHeader from '../ChatBox/ChatDetail/ChatDetailHeader'
import ChatDetailMember from '../ChatBox/ChatDetail/ChatDetailMember'
import ChatDetailPhoto from '../ChatBox/ChatDetail/ChatDetailPhoto'
import ChatDetailSettingIcon from '../ChatBox/ChatDetail/ChatDetailSettingIcon'
import ChatDetailSetting from '../ChatBox/ChatDetail/ChatDetailSettingList'

export const ChatDetailContainer = () => {
  const [setting, setSetting] = useState<boolean>(false)
  const [darkMode, setDarkMode] = useState<boolean>(false)

  return (
    <section className="relative w-1/4">
      <div className="absolute  h-5/6 w-full ">
        {/* <ChatDetailHeader chatName="" /> */}
        <ChatDetailSettingIcon setting={setting} setSetting={setSetting} />
        {!setting ? (
          <>
            <ChatDetailMember />
            <ChatDetailPhoto />
          </>
        ) : (
          <ChatDetailSetting darkMode={darkMode} setDarkMode={setDarkMode} />
        )}
      </div>
    </section>
  )
}
