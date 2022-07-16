import { User, UserCreate } from "@/project-types/user"
import { arrayRemove, arrayUnion, getDoc, onSnapshot, Unsubscribe } from "@firebase/firestore"
import { getFirestore, collection, doc, setDoc, serverTimestamp, getDocs } from "firebase/firestore"
import "firebase/storage"
import { app } from "src/utils/firebase/init"

export class UserService {
  static createUser = async ({
    id,
    name = null,
    email = null,
  }: {
    id: string
    name?: string | null
    email?: string | null
  }): Promise<void> => {
    const db = getFirestore(app)

    const snapshot = await getDoc(doc(db, "users", id))
    if (snapshot.exists()) {
      return
    }

    const request: UserCreate = {
      id: id,
      email: email,
      name: name,
      created: serverTimestamp(),
      updated: serverTimestamp(),
    }

    try {
      await setDoc(doc(db, "users", id), request)
    } catch (e) {
      console.error("Error adding document: ", e)
    }
  }

  //   static addFavorite = async ({ id, corpId }: { id: string; corpId: string }): Promise<void> => {
  //     const db = getFirestore(app)

  //     console.log(id)

  //     try {
  //       await setDoc(
  //         doc(db, 'users', id),
  //         {
  //           favorites: arrayUnion(corpId),
  //         },
  //         { merge: true }
  //       )
  //     } catch (e) {
  //       console.error('Error adding document: ', e)
  //     }
  //   }

  //   static removeFavorite = async ({ id, corpId }: { id: string; corpId: string }): Promise<void> => {
  //     const db = getFirestore(app)

  //     try {
  //       await setDoc(
  //         doc(db, 'users', id),
  //         {
  //           favorites: arrayRemove(corpId),
  //         },
  //         { merge: true }
  //       )
  //     } catch (e) {
  //       console.error('Error adding document: ', e)
  //     }
  //   }

  static fetchUser = async ({ id }: { id: string }): Promise<User | undefined> => {
    const db = getFirestore(app)
    const docSnapshot = await getDoc(doc(db, "users", id))
    return docSnapshot.data() as User
  }

  static onUserChanged = ({
    id,
    callback,
  }: {
    id: string
    callback: (user: User) => void
  }): Unsubscribe => {
    const db = getFirestore(app)
    return onSnapshot(doc(db, "users", id), (doc) => {
      if (doc.exists()) {
        callback(doc.data() as User)
      }
    })
  }
}
