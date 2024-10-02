import dotenv from 'dotenv'
dotenv.config()

export const MONGODB_URI = process.env.MONGODB_CONNECTION_STRING
if (MONGODB_URI?.length === 0) { throw Error('MongoDB connection string not found') }

export const {
  PORT = 3000, SALT_ROUND = 10, JWT_SECRET = 'super_secret_key'
} = process.env
