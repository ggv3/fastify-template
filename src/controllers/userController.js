const userController = (fastify, _, done) => {
  fastify.get('/user', (_request, response) => {
    response.code(200).send({ userId: '12' })
  })
  done()
}

export default userController
