type role = 'seller' | 'admin' | 'customer'

export interface UsersEntry {
  id: number
  username: string
  email: string
  password: string
  role: role
}
