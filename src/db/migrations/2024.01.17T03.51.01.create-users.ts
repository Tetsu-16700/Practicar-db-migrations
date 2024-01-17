import { Migration } from "../migrate";

export const up: Migration = async (params) => {
  params.context.query(
    `CREATE TABLE users ( id SERIAL PRIMARY KEY , name VARCHAR(50) NOT NULL)`
  );
};
export const down: Migration = async (params) => {
    params.context.query(`DROP TABLE users`);
};
