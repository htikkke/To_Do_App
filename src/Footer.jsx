import { useContext } from "react";
import { FormContext } from "./App";

export default function Footer() {
  const { setToDos, todos, selectedOption, setSelectedOption, mode } =
    useContext(FormContext);
  const leftThingsToDo = todos.filter((todo) => !todo.completed).length;
  const clearCompleted = () => {
    setToDos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };
  return (
    <div className="flex items-center justify-between px-6 py-4 text-custom-Gray-600 text-sm">
      <div>
        <p
          className={`cursor-pointer ${mode === "light" ? "hover:text-custom-Navy-900" : "hover:text-white"} transition-all`}
        >
          {leftThingsToDo} {leftThingsToDo > 1 ? "items" : "item"} left
        </p>
      </div>
      <div className="flex gap-4">
        <p
          onClick={() => setSelectedOption("all")}
          className={`cursor-pointer ${mode === "light" ? "hover:text-custom-Navy-900" : "hover:text-white"} transition-all ${selectedOption === "all" ? "text-custom-blue-500" : "text-custom-Gray-600"}`}
        >
          All
        </p>
        <p
          onClick={() => setSelectedOption("active")}
          className={`cursor-pointer ${mode === "light" ? "hover:text-custom-Navy-900" : "hover:text-white"} transition-all ${selectedOption === "active" ? "text-custom-blue-500" : "text-custom-Gray-600"}`}
        >
          Active
        </p>
        <p
          onClick={() => setSelectedOption("completed")}
          className={`cursor-pointer ${mode === "light" ? "hover:text-custom-Navy-900" : "hover:text-white"} transition-all ${selectedOption === "completed" ? "text-custom-blue-500" : "text-custom-Gray-600"}`}
        >
          Completed
        </p>
      </div>
      <div>
        <p
          onClick={clearCompleted}
          className={`cursor-pointer  ${mode === "light" ? "hover:text-custom-Navy-900" : "hover:text-white"} transition-all`}
        >
          Clear Completed
        </p>
      </div>
    </div>
  );
}
