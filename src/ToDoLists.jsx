import { useContext } from "react";
import { FormContext } from "./App";
import Footer from "./Footer";

export default function ToDoLists() {
  const { todos, toggleToDo, deleteToDo, selectedOption } =
    useContext(FormContext);
  // Calculate all,active and completed
  const filterToDos = todos.filter((todo) => {
    if (selectedOption === "active") return !todo.completed;
    if (selectedOption === "completed") return todo.completed;
    return true;
  });
  // If there are no todos, don't render the container or footer
  if (todos.length === 0) return null;
  return (
    <div
      id="toDoListContainer"
      className="bg-white rounded-md divide-y divide-custom-gray-300 shadow-2xl"
    >
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center gap-6 justify-between px-6 py-4 group cursor-pointer"
        >
          {/* Check-box */}
          <button
            onClick={() => toggleToDo(todo.id)}
            className={`relative w-6 h-6 rounded-full border p-px cursor-pointer transition-all flex items-center justify-center
              ${todo.completed ? "bg-linear-to-br from-[hsl(192,100%,67%)] to-[hsl(280,87%,65%)] border-transparent" : "border-custom-gray-300 hover:bg-linear-to-br hover:from-[hsl(192,100%,67%)] hover:to-[hsl(280,87%,65%)]"}`}
          >
            <span
              className={`w-full h-full rounded-full flex items-center justify-center
          ${todo.completed ? "bg-transparent" : "bg-white"}
        `}
            ></span>
            {/* right-mark in the check-box */}
            {todo.completed && (
              <img
                src="/asset/images/icon-check.svg"
                alt="check-mark"
                className="absolute w-3 h-3 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            )}
          </button>
          {/* Text */}
          <span
            className={`text-lg cursor-pointer ${todo.completed ? "line-through text-custom-gray-300" : "text-custom-Gray-600"}`}
          >
            {todo.text}
          </span>
          {/* cross-icon */}
          <img
            onClick={() => deleteToDo(todo.id)}
            src="/asset/images/icon-cross.svg"
            alt="cross-icon"
            className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
          />
        </div>
      ))}
      <Footer />
    </div>
  );
}
