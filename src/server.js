import Fastify from 'fastify'
import userController from 'controllers/userController'
import logger from 'utils/logger'

require('dotenv').config()

const fastify = Fastify({
  logger: false,
})

fastify.register(userController)

fastify.get('/*', (request, reply) => {
  reply.code(401).send('Forbidden')
  logger.warn(`Endpoint ${request.url} was called`)
})

export default fastify
