import { Pool } from "pg";

export const pool = new Pool({
    host: "localhost",
    port: 5432,
    database: "cookie-auth",
    user: process.env["PGUSER"],
    password: process.env["PGPASSWORD"],
})

export const query = (text: string, params?: (string | number | bollean)[]) => {
    return pool.query(text, params)
}