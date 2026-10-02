import { useContext } from "react";
import { FormContext } from "./App";

export default function InputContainer() {
  const { inputText, setInputText, handleInput } = useContext(FormContext);
  return (
    <form
      onSubmit={handleInput}
      className="flex items-center gap-4 bg-white rounded-md px-6 py-4 w-full"
    >
      <div className="w-6 h-6 rounded-full border border-custom-gray-300 cursor-pointer"></div>
      <input
        type="text"
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Create a new todo..."
        value={inputText}
        className="w-full px-4 py-1 rounded-xl bg-white outline-none"
      />
    </form>
  );
}
