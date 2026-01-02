import { config } from 'dotenv'
import z from 'zod'

config({ path: process.env.NODE_ENV == 'production' ? '.env.production' : '.env.local' })


const env = z.object({
    NODE_ENV: z.string(),

    DATABASE_URL: z.string(),

    DATABASE_AUTH_TOKEN: z.string(), 
}).parse(process.env)

export default env