import { DocumentData } from 'firebase/firestore'

type MessagesType = {
  messages: DocumentData[]
  setPictures: (val: DocumentData[]) => void
}

export const getChatPicures = ({ messages, setPictures }: MessagesType) => {
  const picturesData = messages?.filter(
    (message) => message.messageType === 'image'
  )
  setPictures(picturesData)
}
