import 'dotenv/config'

const ENV = process.env


export default {
    PORT: parseInt(ENV.PORT ?? '8080'),
    AWS_REGION: ENV.AWS_REGION
}