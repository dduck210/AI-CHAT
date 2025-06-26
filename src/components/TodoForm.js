<<<<<<< HEAD
import { useState } from "react";
const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text) {
      setError("Vui lòng nhập công việc!");
      return;
    }
    setError("");
    onAdd(text);
    setText("");
  };

  // const handleDelete = (event) => {
  //   event.preventDefault();
  //   if (text) {
  //     setError("Xoá task");
  //   }
  // };

  return (
    <form
      className="flex flex-col sm:flex-row gap-3 mb-6 w-full"
      onSubmit={handleSubmit}
    >
      <div className="flex-1 flex flex-col">
        <input
          className={`border ${error ? "border-red-400" : "border-blue-300"} focus:border-blue-500 outline-none rounded-lg px-4 py-2 text-base shadow-sm transition-all duration-150 placeholder-gray-400 bg-white`}
          placeholder="Nhập công việc mới..."
          value={text}
          onChange={(event) => {
            setText(event.target.value);
            setError("");
          }}
          maxLength={100}
        />
        {error ? (
          <span className="text-red-500 text-sm mt-1 min-h-[20px]">
            {error}
          </span>
        ) : (
          <span className="invisible text-sm mt-1 min-h-[20px]">
            placeholder
          </span>
        )}
      </div>
      <button
        className="px-6 py-2 mb-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-base font-semibold shadow transition-all duration-150 w-full sm:w-auto"
=======
import React, { useState } from "react";
export default function TodoForm({ onAdd }) {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText("");
    }
  };
  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        className="flex-1 border p-2 rounded"
        placeholder="Nhập việc mới..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
>>>>>>> 43412db93fe9d94b28b35c76aa372662a9b4db87
        type="submit"
      >
        Thêm
      </button>
    </form>
  );
<<<<<<< HEAD
};

export default TodoForm;
=======
}
>>>>>>> 43412db93fe9d94b28b35c76aa372662a9b4db87
