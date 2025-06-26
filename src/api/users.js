<<<<<<< HEAD
import axios from "axios";

const API_URL = "http://localhost:3001/users";

// Lấy user theo username
const getUserByUsername = async (username) => {
  const res = await axios.get(`${API_URL}?username=${username}`);
  return res.data[0];
};

// Tạo user mới
export const createUser = async ({ username, password }) => {
  const res = await axios.post(API_URL, { username, password });
  return res.data;
};

export default getUserByUsername;
=======
// src/api/users.js
import axios from "axios";
const API_URL = "http://localhost:3001/users";

// Đăng ký
export async function register(username, password) {
  // Kiểm tra username đã tồn tại chưa
  const res = await axios.get(`${API_URL}?username=${username}`);
  if (res.data.length > 0) throw new Error("Tên đăng nhập đã tồn tại!");
  // Thêm user mới
  const user = { username, password };
  const createRes = await axios.post(API_URL, user);
  return createRes.data;
}

// Đăng nhập
export async function login(username, password) {
  const res = await axios.get(
    `${API_URL}?username=${username}&password=${password}`
  );
  // Nếu có user trả về, đúng account
  if (res.data.length > 0) return res.data[0];
  return null;
}
>>>>>>> 43412db93fe9d94b28b35c76aa372662a9b4db87
