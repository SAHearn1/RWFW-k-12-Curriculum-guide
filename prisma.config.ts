import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    // Default to a local SQLite database so `prisma generate` can run without
    // a DATABASE_URL (e.g., during CI or fresh installs). Production
    // deployments can override this via the DATABASE_URL environment variable.
    url: process.env.DATABASE_URL ?? "file:./dev.db",
  },
});
