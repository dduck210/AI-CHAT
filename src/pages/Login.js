import React, { useState, useContext } from "react";
import { login as loginApi } from "../api/users";
import { UserContext } from "../components/UserContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [noti, setNoti] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await loginApi(username.trim(), password);
    if (!user) {
      setNoti("Sai tên đăng nhập hoặc mật khẩu!");
      return;
    }
    login(user);
    setNoti("Đăng nhập thành công!");
    setTimeout(() => navigate("/"), 1000);
  };

  return (
    <div className="max-w-xs mx-auto mt-12 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-3 text-center">Đăng nhập</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          className="border rounded px-3 py-2"
          placeholder="Tên đăng nhập"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="border rounded px-3 py-2"
          placeholder="Mật khẩu"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Đăng nhập
        </button>
      </form>
      {noti && <div className="mt-2 text-xs text-red-700">{noti}</div>}
    </div>
  );
}
