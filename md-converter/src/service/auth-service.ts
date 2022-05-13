import { onAuthStateChanged, Unsubscribe, User } from "@firebase/auth"
import { getAuth, signInAnonymously } from "firebase/auth"
import { destroyCookie } from "nookies"
import { app } from "../utils/firebase/init"

export class AuthService {

  // 匿名認証
  static signInAnonymously = async (): Promise<User> => {
    const auth = getAuth(app)
    const credential = await signInAnonymously(auth)
    return credential.user
  }

  static onAuthStateChanged = ({
    callback,
  }: {
    callback: (user: User | null) => void
  }): Unsubscribe => {
    const auth = getAuth()
    return onAuthStateChanged(auth, (user) => {
      callback(user)
    })
  }

  static signOut = async (): Promise<void> => {
    const auth = getAuth()
    destroyCookie(null, "__session")
    return auth.signOut()
  }
}
