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
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
      setNoti("🟢 Đã xoá việc!");
    } catch {
      setNoti("🔴 Không xoá được việc!");
    }
    removeNoti();
  };

  const handleToggle = async (id, completed) => {
    try {
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
