const mysql = require("mysql2");

// Tạo kết nối MySQL
const db = mysql.createConnection({
  host: "localhost",     // Địa chỉ server MySQL (thường là localhost)
  user: "root",          // Tài khoản MySQL của bạn
  password: "04122005",          // Mật khẩu MySQL (nếu có thì điền vào)
  database: "restaurant" // Tên database bạn tạo
});

// Kết nối
db.connect((err) => {
  if (err) {
    console.error("❌ Kết nối MySQL thất bại:", err);
    process.exit(1); // Dừng app nếu lỗi DB
  } else {
    console.log("✅ Đã kết nối MySQL thành công");
  }
});

module.exports = db;const db = request('./src/config/db');
exports.db = db;

