import { defineConfig } from "drizzle-kit";
import env from "./server/config/env";

const dbCredentials =
  process.env.NODE_ENV === "production"
    ? {
        url: env.DATABASE_URL!,
        authToken: env.DATABASE_AUTH_TOKEN,
      }
    : { url: env.DATABASE_URL! };

export default defineConfig({
  out: "./server/database/migrations",
  schema: "./server/database/schemas/index.ts",
  dialect: env.NODE_ENV === "production" ? "turso" : "sqlite",
  dbCredentials,
});