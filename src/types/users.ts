type creationRole = 'seller' | 'customer'
type role = creationRole | 'admin'

export interface BaseUser {
  username: string
  email: string
  image?: string
}

export interface CreationUser extends BaseUser {
  password: string
  role: creationRole
}

export interface LoginUser {
  username: string
  password: string
}

export interface PublicStoredUser extends BaseUser {
  id: number
  role: role
  desactivated_at?: Date
}

export interface PrivateStoredUser extends PublicStoredUser {
  password: string // Cambiar a hash_password
}

export interface UsersEntry {
  id: number
  username: string
  email: string
  password: string
  role: role
}
