import {
  collection,
  DocumentData,
  getDocs,
  query,
  where,
} from 'firebase/firestore'
import { db } from '../../../config/firebase'
import {
  AuthContextDefaultValues,
  AuthContextInterface,
} from '../../context/AuthContext'

export const fetchFriends = async (currentUser: AuthContextInterface) => {
  if (currentUser !== AuthContextDefaultValues) {
    const usersRef = collection(db, 'users')
    const q = query(usersRef, where('email', '!=', currentUser.email))
    const arrayOfData: DocumentData[] = []
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      arrayOfData.push(doc.data())
    })

    return arrayOfData
  } else {
    return console.log('no friends')
  }
}
