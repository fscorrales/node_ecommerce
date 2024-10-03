import { server } from './src/app'
import { PORT } from './src/config/base_config'
import { connectDB } from './src/config/database'

// server.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })

connectDB()
  .then(() => {
    console.log('Connected to database!')
    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  })
  .catch((error) => {
    console.log(error.message)
  })
