import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const STORAGE_KEY = "todolist_user";

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  // Khi app load, lấy user từ localStorage nếu có
  useEffect(() => {
    const userText = localStorage.getItem(STORAGE_KEY);
    if (userText) {
      try {
        setUser(JSON.parse(userText));
      } catch {}
    }
  }, []);

  // Khi login, set user vào state và localStorage
  const login = (user) => {
    setUser(user);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  };

  // Khi logout, xóa user khỏi state và localStorage
  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
