import {
  addDoc,
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore'
import { db } from '../../config/firebase'
import { AuthContextInterface } from '../context/AuthContext'
import { useChat } from '../context/ChatContext'

//return chatId
export const createChat = async (
  friendId: string,
  currentUser: AuthContextInterface
) => {
  const chatsRef = collection(db, 'chats')
  const q = query(chatsRef, where('users', 'array-contains', currentUser.uid))
  const querySnapshot = await getDocs(q)
  const chatAlreadyExist = (friendId: string) => {
    return querySnapshot.docs.find(
      (chat) =>
        chat.data().users.find((user: string) => user === friendId)?.length > 0
    )
    // return querySnapshot.forEach((docs) => console.log(docs.data()))
  }

  //if no chat
  if (!chatAlreadyExist(friendId)) {
    const docSnap = await addDoc(chatsRef, {
      users: [currentUser.uid, friendId],
    })

    return docSnap.id
  } else {
    console.log(
      querySnapshot.docs.find((chat) =>
        chat.data().users.find((user: string) => user === friendId)
      )?.id
    )

    return chatAlreadyExist(friendId)?.id!
  }
}

export const getChatByChatId = async (chatId: string) => {
  // const { setChat } = useChat()
  const chatsRef = doc(db, 'chats', chatId)
  const chatsSnap = await getDoc(chatsRef)
  return chatsSnap.data()
}

// export const sendMessage = async (e) => {
// e.preventDefault()
// }
