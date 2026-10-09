import { useContext } from "react";
import { FormContext } from "./App";
import Footer from "./Footer";
import MobileFooter from "./mobileFooter";

export default function ToDoLists() {
  const { todos, toggleToDo, deleteToDo, selectedOption, mode } =
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
    <div>
      <div
        id="toDoListContainer"
        className={`${mode === "light" ? "bg-white divide-custom-gray-300" : "bg-custom-Navy-900 divide-custom-Purple-700"} rounded-md divide-y shadow-2xl transition-colors`}
      >
        {filterToDos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center gap-8 justify-between px-6 py-4 group cursor-pointer"
          >
            {/* Check-box */}
            <button
              onClick={() => toggleToDo(todo.id)}
              className={`relative w-6 h-6 rounded-full border p-px cursor-pointer transition-all flex items-center justify-center
              ${todo.completed ? "bg-linear-to-br from-[hsl(192,100%,67%)] to-[hsl(280,87%,65%)] border-transparent" : "border-custom-gray-300 hover:bg-linear-to-br hover:from-[hsl(192,100%,67%)] hover:to-[hsl(280,87%,65%)]"}`}
            >
              <span
                className={`w-full h-full rounded-full flex items-center justify-center transition-all ${
                  todo.completed
                    ? "bg-transparent"
                    : mode === "dark"
                      ? "bg-custom-Navy-900"
                      : "bg-white"
                }`}
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
      <MobileFooter />
      <p
        className={`bg-transparent mt-10 text-center text-sm ${mode === "light" ? "text-custom-gray-600" : "text-custom-Gray-600"}`}
      >
        Drag and drop to reorder list
      </p>
    </div>
  );
}
