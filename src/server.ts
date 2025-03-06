import { env } from './env'
import { app } from './app'

app
  .listen({
    port: Number(env.PORT),
  })
  .then(() => {
    console.log('http server running')
  })
