import logger from 'utils/logger'
import fastify from 'server'

fastify.listen(process.env.PORT, (err) => {
  logger.info(`Server listening on port ${process.env.PORT}`)
  if (err) {
    logger.error(err)
    process.exit(1)
  }
})
