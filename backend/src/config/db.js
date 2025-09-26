import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",         // thay user MySQL
  password: "04122005",         // thay password MySQL
  database: "restaurant"
});

export default pool;
