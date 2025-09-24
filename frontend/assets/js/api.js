// api.js

// Fake login
async function login(username, password) {
  if (username === "admin" && password === "123") {
    return { message: "Đăng nhập thành công", token: "fake-jwt-token" };
  }
  return { message: "Sai tài khoản hoặc mật khẩu" };
}

// Fake menu
async function getMenu() {
  return [
    { id: 1, tenMon: "Phở bò", gia: 45000 },
    { id: 2, tenMon: "Coca-Cola", gia: 15000 }
  ];
}
