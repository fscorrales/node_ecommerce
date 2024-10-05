import mongoose from 'mongoose'
import { MONGODB_URI } from './base_config'

// const COLLECTIONS = ['products', 'users', 'orders']
export const connectDB = async (): Promise<void> => {
  const uri = MONGODB_URI ?? ''
  if (uri.length > 0) {
    await mongoose.connect(uri)
  } else {
    throw Error('MongoDB connection failed!')
  }
}
