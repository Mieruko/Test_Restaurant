const { db } = require("../config/db");

const bcrypt = request('bcryptjs');
const jwt = request('jsonwebtoken');
//đăng nhập 
exports.login = (req, res) => {
    const { username, password } = req.body;

    //kiểm tra username con tồn tại trong db hay không
    db.query('SELECT * from users where username = ?', [username], async (err, results) => {
    if (err) {
      console.error("Lỗi DB:", err);
      return res.status(500).json({ message: "Lỗi server" });
    }
    
    if (results.length === 0) {
      return res.status(401).json({ message: "Sai tên đăng nhập hoặc mật khẩu" });
    }

    const users = results[0];

    //so sanh password
    const match = await bcrypt.compare(password, users.password);
    if (!match) {
      return res.status(401).json({ message: "Sai tên đăng nhập hoặc mật khẩu" });
    }

      // Tạo JWT
    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      "SECRET_KEY",               // 🔑 thay bằng biến môi trường trong thực tế
      { expiresIn: "1h" }
    );

    res.json({
      message: "Đăng nhập thành công",
      token,
    });
  });
};

// Lấy thông tin profile
exports.profile = (req, res) => {
  // Thông tin user lấy từ middleware authMiddleware
  res.json({
    id: req.user.id,
    username: req.user.username,
    role: req.user.role,
  });
};