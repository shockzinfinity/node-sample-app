const os = require('os')

// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hostname: os.hostname(), hello: 'world' }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000, "0.0.0.0")
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
