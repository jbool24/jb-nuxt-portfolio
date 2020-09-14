const { Nuxt, Builder } = require('nuxt')
const fastify = require('fastify')({
  logger: true,
})

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 9000,
  } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  await fastify.register(require('middie'))
  fastify.use(nuxt.render)

  fastify.listen(port, host, (err, address) => {
    console.log('-'.repeat(79))
    console.log(`Running server on ${address}`)
    console.log('-'.repeat(79))
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  })
}

start()
