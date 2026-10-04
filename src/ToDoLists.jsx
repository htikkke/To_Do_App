import { useContext } from "react";
import { FormContext } from "./App";
import Footer from "./Footer";

export default function ToDoLists() {
  const { todos, toggleToDo } = useContext(FormContext);
  // If there are no todos, don't render the container or footer
  if (todos.length === 0) return null;
  return (
    <div
      id="toDoListContainer"
      className="bg-white rounded-md divide-y divide-custom-gray-300 shadow-2xl"
    >
      {todos.map((todo) => (
        <div key={todo.id} className="flex items-center gap-6 px-6 py-4">
          <button
            onClick={() => toggleToDo(todo.id)}
            className={`w-6 h-6 rounded-full border cursor-pointer transition-all flex items-center justify-center
              ${todo.completed ? "bg-linear-to-br from-[hsl(192,100%,67%)] to-[hsl(280,87%,65%)] border-transparent" : "bg-transparent border-custom-gray-300"}`}
          >
            {todo.completed && (
              <img src="/asset/images/icon-check.svg" alt="check-mark" />
            )}
          </button>
          <span
            className={`text-lg  ${todo.completed ? "line-through text-custom-gray-300" : "text-custom-Gray-600"}`}
          >
            {todo.text}
          </span>
        </div>
      ))}
      <Footer />
    </div>
  );
}
