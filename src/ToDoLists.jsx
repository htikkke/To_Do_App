import { useContext } from "react";
import { FormContext } from "./App";

export default function ToDoLists() {
  const { todos } = useContext(FormContext);
  return (
    <div
      id="toDoListContainer"
      className="bg-white rounded-md divide-y divide-custom-gray-300 shadow-2xl"
    >
      {todos.map((todo) => (
        <div key={todo.id} className="flex items-center gap-6 px-6 py-4">
          <div className="w-6 h-6 rounded-full border border-custom-gray-300 cursor-pointer"></div>
          <span className="text-lg text-custom-Gray-600">{todo.text}</span>
        </div>
      ))}
    </div>
  );
}
