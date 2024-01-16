import "dotenv/config";
import path from "path";
import { pool } from "./db";
import { JSONStorage, Umzug } from "umzug";

const umzug = new Umzug({
  migrations: { glob: path.join(__dirname, "migrations", "*.ts") },
  context: pool,
  storage: new JSONStorage(),
  logger: console,
});

export type Migration = typeof umzug._types.migration;

(async () => {
  // Checks migrations and run them if they are not already applied. To keep
  // track of the executed migrations, a table (and sequelize model) called SequelizeMeta
  // will be automatically created (if it doesn't exist already) and parsed.
  await umzug.up();
})();
