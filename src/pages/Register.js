<<<<<<< HEAD
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import getUserByUsername, { createUser } from "../api/users";
import { toast } from "react-toastify";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    setError("");
    if (!username || !password || !confirmPassword) {
      setError("Please enter complete information");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const existedUser = await getUserByUsername(username);
      if (existedUser) {
        setError("Username already exists");
        return;
      }
      const user = await createUser({ username, password });
      localStorage.setItem("token", user.id);
      localStorage.setItem("username", user.username);
      toast.success("Đăng ký thành công!");
      setTimeout(() => {
        navigate("/");
      }, 500);
    } catch (err) {
      setError("Registration failed");
    }
  };

  if (localStorage.getItem("token")) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <form
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
        onSubmit={handleRegister}
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Register</h2>
        {error && <div className="mb-4 text-red-500">{error}</div>}
        <input
          className="w-full mb-4 px-4 py-2 border border-blue-300 rounded-lg"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          className="w-full mb-4 px-4 py-2 border border-blue-300 rounded-lg"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          className="w-full mb-6 px-4 py-2 border border-blue-300 rounded-lg"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
=======
import React, { useState, useContext } from "react";
import { register } from "../api/users";
import { UserContext } from "../components/UserContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { login } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [noti, setNoti] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim() || !password) {
      setNoti("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    try {
      const user = await register(username.trim(), password);
      login(user); // Lưu user vào context, hoặc localStorage nếu bạn muốn
      setNoti("Đăng ký thành công!");
      setTimeout(() => navigate("/"), 1200);
    } catch (e) {
      setNoti(e.message || "Đăng ký thất bại");
    }
  };

  return (
    <div className="max-w-xs mx-auto mt-12 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-3 text-center">
        Đăng ký tài khoản
      </h2>
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
          Đăng ký
        </button>
      </form>
      {noti && <div className="mt-2 text-xs text-red-700">{noti}</div>}
    </div>
  );
}
>>>>>>> 43412db93fe9d94b28b35c76aa372662a9b4db87
