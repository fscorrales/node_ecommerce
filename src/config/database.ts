import mongoose from 'mongoose'
import { MONGODB_URI } from './__base_config'

const DB_NAME = 'bootcamp_eCommerce_app'
// const COLLECTIONS = ['products', 'users', 'orders']
export const connectDB = async (): Promise<void> => {
  const uri = MONGODB_URI ?? ''
  if (uri.length > 0) {
    await mongoose.connect(uri + '/' + DB_NAME)
  } else {
    throw Error('MongoDB connection string not found')
  }
}
