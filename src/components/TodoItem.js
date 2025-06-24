import React, { useState } from "react";
export default function TodoItem({ todo, onDelete, onToggle, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo.todo);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editedTodo.trim()) {
      onUpdate(todo.id, editedTodo);
      setEditing(false);
    }
  };

  return (
    <div
      className={`flex items-center justify-between p-2 border rounded mb-2 
      ${todo.completed ? "bg-green-100" : "bg-white"}`}
    >
      <div className="flex items-center gap-2 flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id, !todo.completed)}
        />
        {editing ? (
          <form onSubmit={handleEditSubmit} className="flex-1 flex gap-2">
            <input
              className="border rounded px-2 py-1 flex-1"
              value={editedTodo}
              onChange={(e) => setEditedTodo(e.target.value)}
              autoFocus
            />
            <button
              type="submit"
              className="px-2 py-1 bg-blue-500 text-white rounded"
            >
              Save
            </button>
            <button
              type="button"
              className="px-2 py-1 bg-gray-300 rounded"
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
          </form>
        ) : (
          <>
            <span
              className={todo.completed ? "line-through text-gray-500" : ""}
            >
              {todo.todo}
            </span>
          </>
        )}
      </div>
      {!editing && (
        <div className="flex gap-2">
          <button
            className="bg-yellow-300 px-2 py-1 rounded text-xs"
            onClick={() => setEditing(true)}
          >
            Sửa
          </button>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded text-xs"
            onClick={() => onDelete(todo.id)}
          >
            Xoá
          </button>
        </div>
      )}
    </div>
  );
}
