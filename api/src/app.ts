import fastify from "fastify";

export const app = fastify()

app.get('/', () => {
    return {
        status: 'ok',
        message: 'Hello World'
    }
})
