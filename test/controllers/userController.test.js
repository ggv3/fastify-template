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

describe('userController', () => {
  it('/user Should return valid user data', async () => {
    const response = await supertest(fastify.server).get('/user')
    expect(response.statusCode).toEqual(200)
    expect(response.body).toEqual({ userId: '12' })
  })
})
