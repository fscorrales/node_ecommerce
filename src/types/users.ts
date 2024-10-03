type creationRole = 'seller' | 'customer'
type role = creationRole | 'admin'

export interface BaseUser {
  username: string
  email: string
  image?: string | null
}

// Chequear el tema de los nulos porque no debería estar vacio
export interface UpdateUser {
  username?: string | null
  email?: string | null
  image?: string | null
}

export interface CreateUser extends BaseUser {
  password: string
  role: creationRole
}

export interface LoginUser {
  username: string
  password: string
}

export interface PublicStoredUser extends BaseUser {
  role: role
  desactivated_at?: Date
}

export interface PrivateStoredUser extends PublicStoredUser {
  hash_password: string
}
