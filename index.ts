import { server } from './src/app'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT ?? '3000'

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
