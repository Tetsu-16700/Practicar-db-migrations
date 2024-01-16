import { Migration } from "../migrate";

export const up: Migration = async (params) => {
  params.context.query(`
    CREATE TABLE users (
        id SERIAL PRIMATY KEY,
        name VARCHAR(255) NOT NULL
    )
    `);
}
