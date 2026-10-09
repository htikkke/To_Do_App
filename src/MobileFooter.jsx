import { useContext } from "react";
import { FormContext } from "./App";

export default function MobileFooter() {
  const { setSelectedOption, mode, selectedOption } = useContext(FormContext);

  return (
    <div
      className={`${mode === "light" ? "bg-white" : "bg-custom-Navy-900"} rounded-md mt-4 shadow-2xl transition-colors flex gap-6 items-center justify-center px-6 py-4 text-custom-Gray-600`}
    >
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
  );
}
