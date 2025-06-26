import { Link, useNavigate } from "react-router-dom";
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
    navigate("/login");
  };

  return (
    <header className="bg-blue-600 text-white p-4 shadow">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          <Link to="/">Todo App</Link>
        </h1>
        <nav className="flex gap-3 items-center">
          <Link to="/" className="hover:underline hidden sm:inline">
            Home
          </Link>
          {!isAuth && (
            <>
              <Link to="/login" className="hover:underline hidden sm:inline">
                Login
              </Link>
              <Link to="/register" className="hover:underline hidden sm:inline">
                Register
              </Link>
            </>
          )}
          {isAuth && (
            <>
              <span className="font-semibold mr-2">{username}</span>
              <button
                className="bg-white/30 rounded px-2 py-1 ml-2"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
