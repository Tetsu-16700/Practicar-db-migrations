import { Pool } from "pg";
import "dotenv/config";

export const pool = new Pool({
  host: process.env["PGHOST"],
  port: Number(process.env["PGUPORT"]),
  database: process.env["PGDATABASE"],
  user: process.env["PGUSER"],
  password: process.env["PGPASSWORD"],
});

export const query = (text: string, params?: (string | number | boolean)[]) => {
  return pool.query(text, params);
};
