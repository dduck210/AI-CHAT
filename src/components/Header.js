import { Link, useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const isAuth = !!localStorage.getItem("token");
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );

  useEffect(() => {
    // Cập nhật username khi login/register
    const handleStorage = () =>
      setUsername(localStorage.getItem("username") || "");
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  useEffect(() => {
    // Khi chuyển trang, cập nhật lại username (trường hợp login/register cùng tab)
    setUsername(localStorage.getItem("username") || "");
  }, [isAuth]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUsername("");
    toast.success("Logout thành công!");
=======
import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Header() {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
>>>>>>> 43412db93fe9d94b28b35c76aa372662a9b4db87
    navigate("/login");
  };

  return (
<<<<<<< HEAD
    <header className="bg-blue-600 text-white p-4 shadow">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          <Link to="/">Todo App</Link>
=======
    <header className="bg-blue-600 text-white p-4 mb-4 shadow">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          <Link to="/">📝 Todo App</Link>
>>>>>>> 43412db93fe9d94b28b35c76aa372662a9b4db87
        </h1>
        <nav className="flex gap-3 items-center">
          <Link to="/" className="hover:underline hidden sm:inline">
            Home
          </Link>
<<<<<<< HEAD
          {!isAuth && (
            <>
              <Link to="/login" className="hover:underline hidden sm:inline">
                Login
              </Link>
              <Link to="/register" className="hover:underline hidden sm:inline">
=======
          <Link to="/about" className="hover:underline hidden sm:inline">
            About
          </Link>
          {!user && (
            <>
              <Link to="/login" className="hover:underline">
                Login
              </Link>
              <Link to="/register" className="hover:underline">
>>>>>>> 43412db93fe9d94b28b35c76aa372662a9b4db87
                Register
              </Link>
            </>
          )}
<<<<<<< HEAD
          {isAuth && (
            <>
              <span className="font-semibold mr-2">{username}</span>
              <button
                className="bg-white/30 rounded px-2 py-1 ml-2"
=======
          {user && (
            <div className="flex items-center gap-2">
              <span className="bg-white/30 rounded px-2 py-1">
                {user.username}
              </span>
              <button
                className="px-3 py-1 bg-gray-50 text-blue-700 rounded hover:bg-blue-200 transition"
>>>>>>> 43412db93fe9d94b28b35c76aa372662a9b4db87
                onClick={handleLogout}
              >
                Logout
              </button>
<<<<<<< HEAD
            </>
=======
            </div>
>>>>>>> 43412db93fe9d94b28b35c76aa372662a9b4db87
          )}
        </nav>
      </div>
    </header>
  );
<<<<<<< HEAD
};

export default Header;
=======
}
>>>>>>> 43412db93fe9d94b28b35c76aa372662a9b4db87
