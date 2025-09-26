const API_URL = "http://localhost:3000";

// Đăng nhập
async function login(username, password) {
  const res = await fetch(`${API_URL}/users?username=${username}&password=${password}`);
  const data = await res.json();
  if (data.length > 0) {
    localStorage.setItem("user", JSON.stringify(data[0]));
    return { success: true, user: data[0] };
  } else {
    return { success: false, message: "Sai tài khoản hoặc mật khẩu" };
  }
}

// Lấy menu
async function getMenu() {
  const res = await fetch(`${API_URL}/menu`);
  return res.json();
}
