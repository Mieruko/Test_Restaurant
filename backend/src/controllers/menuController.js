import pool from "../config/db.js";

export async function getMenu(req, res) {
  try {
    const [rows] = await pool.query("SELECT * FROM menu");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: "Lỗi server", error: err.message });
  }
}
