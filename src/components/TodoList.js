import React from "react";
import TodoItem from "./TodoItem";
export default function TodoList({ todos, ...handlers }) {
  if (todos.length === 0)
    return <p className="text-center text-gray-400">Không có việc nào!</p>;

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={handlers.onDelete}
          onToggle={handlers.onToggle}
          onUpdate={handlers.onUpdate}
        />
      ))}
    </div>
  );
}
