import { drizzle } from "drizzle-orm/libsql"
import * as schema from "./schemas"
import env from "../config/env"


const db = env.NODE_ENV == "production" ? drizzle({
    connection: {
        url: env.DATABASE_URL,
        authToken: env.DATABASE_AUTH_TOKEN
    },
    schema
}) : drizzle(env.DATABASE_URL, {
    schema
})

export default db