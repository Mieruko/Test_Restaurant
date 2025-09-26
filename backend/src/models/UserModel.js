import pool from "../config/db.js";

export async function findUser(username, password) {
  const [rows] = await pool.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password]
  );
  return rows[0];
}
