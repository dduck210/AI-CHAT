<<<<<<< HEAD
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
=======
import React, { useEffect, useState } from "react";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import { getTodos, addTodo, deleteTodo, updateTodo } from "../api/todos";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noti, setNoti] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const res = await getTodos();
      setTodos(res.data);
    } catch (err) {
      setNoti("Không tải được danh sách.");
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (text) => {
    try {
      setLoading(true);
      const res = await addTodo({ todo: text, completed: false, userId: 1 });
      setTodos([res.data, ...todos]);
      setNoti("🟢 Thêm việc thành công!");
    } catch {
      setNoti("🔴 Lỗi khi thêm việc!");
    } finally {
      setLoading(false);
      removeNoti();
>>>>>>> 43412db93fe9d94b28b35c76aa372662a9b4db87
    }
  };

  const handleDelete = async (id) => {
    try {
<<<<<<< HEAD
      await axios.delete(`${API_URL}/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
      setNotification("Đã xoá task");
    } catch (err) {
      console.log("DELETE_ERROR:", err);
      setNotification("K xoá được task");
    }
    removeNotification();
=======
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
      setNoti("🟢 Đã xoá việc!");
    } catch {
      setNoti("🔴 Không xoá được việc!");
    }
    removeNoti();
>>>>>>> 43412db93fe9d94b28b35c76aa372662a9b4db87
  };

  const handleToggle = async (id, completed) => {
    try {
<<<<<<< HEAD
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
=======
      const found = todos.find((t) => t.id === id);
      const updated = { ...found, completed };
      await updateTodo(id, updated);
      setTodos(todos.map((t) => (t.id === id ? { ...t, completed } : t)));
      setNoti("🟢 Đã cập nhật trạng thái!");
    } catch {
      setNoti("🔴 Cập nhật trạng thái thất bại!");
    }
    removeNoti();
  };

  const handleUpdate = async (id, text) => {
    try {
      const found = todos.find((t) => t.id === id);
      const updated = { ...found, todo: text };
      await updateTodo(id, updated);
      setTodos(todos.map((t) => (t.id === id ? { ...t, todo: text } : t)));
      setNoti("🟢 Đã sửa việc!");
    } catch {
      setNoti("🔴 Lỗi khi sửa việc!");
    }
    removeNoti();
  };

  const removeNoti = () => setTimeout(() => setNoti(""), 2000);

  const filteredTodos = todos.filter((todo) =>
    todo.todo.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="max-w-lg mx-auto mt-6 px-4">
      <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          {/* <span role="img" aria-label="todo"></span> */}
          Danh sách việc cần làm
        </h2>
        <TodoForm onAdd={handleAdd} />
        <input
          className="w-full border rounded-lg px-3 py-2 my-4 focus:outline-none focus:border-blue-400 transition"
          placeholder="Tìm kiếm việc..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {noti && (
          <div
            className={`mb-4 p-3 text-base rounded-lg shadow
            ${
              noti.includes("🟢")
                ? "bg-green-50 border border-green-400 text-green-600"
                : "bg-red-50 border border-red-400 text-red-600"
            }`}
          >
            {noti}
          </div>
        )}
        {loading ? (
          <div className="flex items-center justify-center h-32">
            <svg
              className="animate-spin h-8 w-8 text-blue-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              ></path>
            </svg>
            <span className="text-blue-600 font-semibold text-lg">
              Đang tải...
            </span>
          </div>
        ) : (
          <TodoList
            todos={filteredTodos}
            onDelete={handleDelete}
            onToggle={handleToggle}
            onUpdate={handleUpdate}
          />
        )}
      </div>
    </section>
  );
}
>>>>>>> 43412db93fe9d94b28b35c76aa372662a9b4db87
