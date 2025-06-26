<<<<<<< HEAD
import { useState } from "react";
const TodoItem = ({ todo, onDelete, onToggle, onUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo.todo);

  const handleEditSubmit = (event) => {
    event.preventDefault();
    if (editedTodo) {
=======
import React, { useState } from "react";
export default function TodoItem({ todo, onDelete, onToggle, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo.todo);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editedTodo.trim()) {
>>>>>>> 43412db93fe9d94b28b35c76aa372662a9b4db87
      onUpdate(todo.id, editedTodo);
      setEditing(false);
    }
  };

  return (
    <div
<<<<<<< HEAD
      className={`flex flex-col lg:flex-row items-start lg:items-center justify-between border border-gray-200 shadow-md rounded-xl mb-4 px-5 py-4 transition-all duration-200
      ${todo.completed ? "bg-gradient-to-r from-green-100 to-green-50" : "bg-white hover:bg-blue-50"}`}
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 flex-1 w-full">
=======
      className={`flex items-center justify-between p-2 border rounded mb-2 
      ${todo.completed ? "bg-green-100" : "bg-white"}`}
    >
      <div className="flex items-center gap-2 flex-1">
>>>>>>> 43412db93fe9d94b28b35c76aa372662a9b4db87
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id, !todo.completed)}
<<<<<<< HEAD
          className="w-5 h-5 accent-blue-500 transition-all duration-150"
        />
        {editing ? (
          <form
            onSubmit={handleEditSubmit}
            className="flex flex-col lg:flex-row gap-2 flex-1 w-full"
          >
            <input
              className="border border-blue-300 focus:border-blue-500 outline-none rounded-lg px-3 py-2 flex-1 text-base shadow-sm transition-all duration-150"
              value={editedTodo}
              onChange={(event) => setEditedTodo(event.target.value)}
              autoFocus
            />
            <div className="flex gap-2">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold shadow transition-all duration-150"
              >
                Save
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-xs font-semibold transition-all duration-150"
                onClick={() => setEditing(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <span
            className={
              "break-all flex-1 text-base font-medium transition-all duration-150 " +
              (todo.completed ? "line-through text-gray-400" : "text-gray-800")
            }
          >
            {todo.todo}
          </span>
        )}
      </div>
      {!editing && (
        <div className="flex gap-2 mt-3 lg:mt-0 lg:ml-4">
          <button
            className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg text-xs font-semibold shadow transition-all duration-150"
            onClick={() => setEditing(true)}
          >
            Edit
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-xs font-semibold shadow transition-all duration-150"
            onClick={() => onDelete(todo.id)}
          >
            Delete
=======
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
>>>>>>> 43412db93fe9d94b28b35c76aa372662a9b4db87
          </button>
        </div>
      )}
    </div>
  );
<<<<<<< HEAD
};

export default TodoItem;
=======
}
>>>>>>> 43412db93fe9d94b28b35c76aa372662a9b4db87
