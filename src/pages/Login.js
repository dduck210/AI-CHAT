<<<<<<< HEAD
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import getUserByUsername from "../api/users";
import { toast } from "react-toastify";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!username || !password) {
      setError("Please enter complete information");
      return;
    }
    const user = await getUserByUsername(username);
    if (!user || user.password !== password) {
      setError("Wrong account or password");
      return;
    }
    localStorage.setItem("token", user.id);
    localStorage.setItem("username", user.username);
    toast.success("Login thành công!");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <form
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
        onSubmit={handleLogin}
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Login</h2>
        {error && <div className="mb-4 text-red-500">{error}</div>}
        <input
          className="w-full mb-4 px-4 py-2 border border-blue-300 rounded-lg"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          className="w-full mb-6 px-4 py-2 border border-blue-300 rounded-lg"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
=======
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
>>>>>>> 43412db93fe9d94b28b35c76aa372662a9b4db87
