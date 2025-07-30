import { Knex, knex as setupKnex } from "knex";
import { env } from "../../shared/env";

export const config: Knex.Config = {
  client: "sqlite3",
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: "ts",
    tableName: "migrations",
    directory: "./db/migrations",
  },
};

export const knex = setupKnex(config);
