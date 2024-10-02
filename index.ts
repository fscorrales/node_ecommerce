import { server } from './src/app'
import { PORT } from './src/config/__base_config'

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
