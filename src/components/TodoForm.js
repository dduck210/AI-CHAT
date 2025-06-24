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
        type="submit"
      >
        Thêm
      </button>
    </form>
  );
}
