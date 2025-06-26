<<<<<<< HEAD
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete, onUpdate, onToggle }) => {
  return (
    <div>
      {console.log(todos)}
      {/* {console.log(onDelete)} */}
=======
import React from "react";
import TodoItem from "./TodoItem";
export default function TodoList({ todos, ...handlers }) {
  if (todos.length === 0)
    return <p className="text-center text-gray-400">Không có việc nào!</p>;

  return (
    <div>
>>>>>>> 43412db93fe9d94b28b35c76aa372662a9b4db87
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
<<<<<<< HEAD
          onDelete={onDelete}
          onUpdate={onUpdate}
          onToggle={onToggle}
=======
          onDelete={handlers.onDelete}
          onToggle={handlers.onToggle}
          onUpdate={handlers.onUpdate}
>>>>>>> 43412db93fe9d94b28b35c76aa372662a9b4db87
        />
      ))}
    </div>
  );
<<<<<<< HEAD
};

export default TodoList;
=======
}
>>>>>>> 43412db93fe9d94b28b35c76aa372662a9b4db87
