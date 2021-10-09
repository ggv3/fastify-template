import supertest from 'supertest'
import logger from 'utils/logger'
import fastify from 'server'

beforeAll(async () => {
  logger.silent = true
  fastify.listen(3000)
  await fastify.ready()
})

afterAll(() => {
  logger.silent = false
})

describe('Server', () => {
  it("Should respond 401 for an endpoint that isn't defined", async () => {
    const response = await supertest(fastify.server).get('/foo')
    expect(response.statusCode).toEqual(401)
  })
})
