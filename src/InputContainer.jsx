import { useContext } from "react";
import { FormContext } from "./App";

export default function InputContainer() {
  const { inputText, setInputText, handleInput, mode } =
    useContext(FormContext);
  return (
    <form
      onSubmit={handleInput}
      className={`flex items-center gap-4 ${mode === "light" ? "bg-white" : "bg-custom-Navy-900"} rounded-md px-6 py-4 w-full transition-all`}
    >
      <div
        className={`w-6 h-6 rounded-full border ${mode === "light" ? "border-custom-gray-300" : "border-custom-Gray-600"} cursor-pointer`}
      ></div>
      <input
        type="text"
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Create a new todo..."
        value={inputText}
        className={`w-full px-4 py-1 rounded-xl ${mode === "light" ? "bg-white" : "bg-custom-Navy-900 text-white"} outline-none transition-colors`}
      />
    </form>
  );
}
