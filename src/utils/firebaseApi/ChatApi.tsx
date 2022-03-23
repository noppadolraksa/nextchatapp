import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  where,
} from 'firebase/firestore'
import { db } from '../../../config/firebase'
import { AuthContextInterface } from '../../context/AuthContext'

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
    // console.log(
    //   querySnapshot.docs.find((chat) =>
    //     chat.data().users.find((user: string) => user === friendId)
    //   )?.id
    // )

    return chatAlreadyExist(friendId)?.id!
  }
}

export const getChatByChatId = async (chatId: string) => {
  // const { setChat } = useChat()
  const chatsRef = doc(db, 'chats', chatId)
  const chatsSnap = await getDoc(chatsRef)
  return chatsSnap.data()
}

type SendMessageType = {
  currentUser: AuthContextInterface
  chatId: string
  message: string
  messageType: string
}

export const sendMessage = async ({
  currentUser,
  chatId,
  message,
  messageType,
}: SendMessageType) => {
  if (message === '') {
  } else {
    //chage user active time
    const usersRef = doc(db, 'users', currentUser.uid)
    setDoc(usersRef, { lastSeen: serverTimestamp() }, { merge: true })
    //send message
    const messagesRef = collection(db, 'chats', chatId, 'messages')
    await addDoc(messagesRef, {
      timestamp: serverTimestamp(),
      message: message,
      displayName: currentUser.displayName,
      photoURL: currentUser.photoURL,
      messageType: messageType,
      uid: currentUser.uid,
    })
    //add latest message and corresponding time
    const chatsRef = doc(db, 'chats', chatId)
    await setDoc(
      chatsRef,
      {
        latestMessage: message,
        timestamp: serverTimestamp(),
      },
      { merge: true }
    )
  }
}

export const fetchMessage = (
  chatId: string,
  setMessages: (val: any) => void
) => {
  const messagesRef = collection(db, 'chats', chatId, 'messages')
  const q = query(messagesRef, orderBy('timestamp', 'asc'))
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    setMessages(
      querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        timestamp: doc.data().timestamp?.toDate().getTime(),
      }))
    )
  })
  return unsubscribe
}

export const fetchPicture = (
  chatId: string,
  setPictures: (val: any) => void
) => {
  const picturesRef = collection(db, 'chats', chatId, 'messages')
  const q = query(
    picturesRef,
    where('messageType', '==', 'image'),
    orderBy('timestamp', 'asc')
  )
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    setPictures(
      querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        timestamp: doc.data().timestamp?.toDate().getTime(),
      }))
    )
  })
  return unsubscribe
}
