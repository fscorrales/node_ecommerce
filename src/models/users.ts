import mongoose from 'mongoose'

type creationRole = 'seller' | 'customer'
type role = creationRole | 'admin'

export interface IBaseUser {
  username: string
  email: string
  image?: string | null
}

export interface ILoginUser {
  username: string
  password: string
}

export interface ICreateUser extends ILoginUser {
  email: string
  role: creationRole
  image?: string | null
}

export interface IUpdateUser {
  username?: string | null
  email?: string | null
  image?: string | null
}

export interface IQueryUser extends IUpdateUser {
  _id?: mongoose.Types.ObjectId
  role?: role
}

export interface IUser extends IBaseUser {
  hash_password: string
  role: role
  deactivated_at?: Date
}

export interface IPublicStoredUser extends IBaseUser {
  _id: mongoose.Types.ObjectId
  role: role
  desactivated_at?: Date
}

export interface IPrivateStoredUser extends IPublicStoredUser {
  hash_password: string
}

const userSchema = new mongoose.Schema<IUser>({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  hash_password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'seller', 'customer'],
    default: 'customer'
  },
  image: {
    type: String,
    required: false
  },
  deactivated_at: {
    type: Date,
    required: false
  }
}, {
  versionKey: false
})

userSchema.statics.getDeleted = function () {
  return this.find({ deactivated_at: { $ne: null } })
}

userSchema.statics.getNotDeleted = function () {
  return this.find({ deactivated_at: { $eq: null } })
}

export const Users = mongoose.model('users', userSchema)
