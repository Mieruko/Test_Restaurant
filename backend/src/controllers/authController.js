import { findUser } from "../models/UserModel.js";

export async function login(req, res) {
  const { username, password } = req.body;
  try {
    const user = await findUser(username, password);
    if (user) {
      res.json({ message: "Đăng nhập thành công", user });
    } else {
      res.status(401).json({ message: "Sai tài khoản hoặc mật khẩu" });
    }
  } catch (err) {
    res.status(500).json({ message: "Lỗi server", error: err.message });
  }
}
