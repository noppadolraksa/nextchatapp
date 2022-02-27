import {
  addDoc,
  collection,
  DocumentData,
  getDocs,
  query,
  where,
} from 'firebase/firestore'
import { db } from '../../config/firebase'
import { AuthContextInterface } from '../context/AuthContext'
import { useChat } from '../context/ChatContext'

export const createChat = async (
  id: string,
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
  if (!chatAlreadyExist(id)) {
    const docSnap = await addDoc(chatsRef, { users: [currentUser.uid, id] })
    console.log(docSnap.id)
  } else {
    console.log(chatAlreadyExist(id)?.data())
  }
}
