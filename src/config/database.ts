import mongoose from 'mongoose'
import { MONGODB_URI, DB_NAME } from './base_config'

// const COLLECTIONS = ['products', 'users', 'orders']
export const connectDB = async (): Promise<void> => {
  const uri = MONGODB_URI ?? ''
  if (uri.length > 0) {
    const uriWithDB = `${MONGODB_URI}${DB_NAME}`
    await mongoose.connect(uriWithDB)
    // console.log(`MongoDB connected to: ${uriWithDB}`)
  } else {
    throw Error('MongoDB connection failed!')
  }
}
