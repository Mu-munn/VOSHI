import { FieldValue } from 'firebase/firestore'

type UserBase = {
  id: string
  email: string | null
  favorites: string[]
  name: string | null
}

export type User = UserBase & {
  created: Date
  updated: Date
}

export type UserCreate = UserBase & {
  created: FieldValue
  updated: FieldValue
}
