import pool from "../config/db.js";

export async function getTables(req, res) {
  try {
    const [rows] = await pool.query("SELECT * FROM tables");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: "Lỗi server", error: err.message });
  }
}
