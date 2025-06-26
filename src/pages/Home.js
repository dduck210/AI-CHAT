import { useEffect, useState } from "react";
import axios from "axios";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import { CircularProgress } from "@mui/material";

const API_URL = "http://localhost:3001/todos";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(API_URL);
        setTimeout(() => {
          setTodos(res.data);
          setLoading(false);
        }, 1500);
      } catch (error) {
        setNotification("K thể load data, vui lòng thử lại");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAdd = async (text) => {
    try {
      setLoading(true);
      const res = await axios.post(API_URL, {
        todo: text,
        completed: false,
        userId: 1,
      });
      setTodos([res.data, ...todos]);
      setNotification("Thêm task thành công");
    } catch {
      setNotification("Lỗi khi thêm task");
    } finally {
      setLoading(false);
      removeNotification();
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
      setNotification("Đã xoá task");
    } catch (err) {
      console.log("DELETE_ERROR:", err);
      setNotification("K xoá được task");
    }
    removeNotification();
  };

  const handleToggle = async (id, completed) => {
    try {
      const found = todos.find((task) => task.id === id);
      const updated = { ...found, completed };
      await axios.put(`${API_URL}/${id}`, updated);
      setTodos(
        todos.map((task) => (task.id === id ? { ...task, completed } : task))
      );
      setNotification("Đã cập nhật trạng thái");
    } catch {
      setNotification("Cập nhật trạng thái thất bại");
    }
    removeNotification();
  };

  const handleEdit = async (id, text) => {
    try {
      const found = todos.find((task) => task.id === id);
      const updated = { ...found, todo: text };
      await axios.put(`${API_URL}/${id}`, updated);
      setTodos(
        todos.map((task) => (task.id === id ? { ...task, todo: text } : task))
      );
      setNotification("Đã sửa task");
    } catch {
      setNotification("Lỗi khi sửa task");
    }
    removeNotification();
  };

  const removeNotification = () => setTimeout(() => setNotification(""), 2000);

  if (loading) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center bg-white">
        <span className="text-blue-600 font-semibold text-lg mb-2">
          Loading...
        </span>
        <CircularProgress />
      </div>
    );
  }

  return (
    <section className="w-full mt-0">
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          To Do List
        </h2>
        <TodoForm onAdd={handleAdd} />
        {notification && (
          <div
            className={`mb-4 p-3 text-base rounded-lg shadow
          ${
            notification.includes("")
              ? "bg-green-50 border border-green-400 text-green-600"
              : "bg-red-50 border border-red-400 text-red-600"
          }`}
          >
            {notification}
          </div>
        )}
        <TodoList
          todos={todos}
          onDelete={handleDelete}
          onToggle={handleToggle}
          onUpdate={handleEdit}
        />
      </div>
    </section>
  );
};

export default Home;
