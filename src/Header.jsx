import { useContext } from "react";
import { FormContext } from "./App";

export default function Header() {
  const { mode, setMode } = useContext(FormContext);
  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  return (
    <div id="header" className="flex justify-between items-center">
      <h1 className="uppercase text-white font-bold text-4xl tracking-widest">
        Todo
      </h1>
      <img
        onClick={toggleMode}
        className="cursor-pointer"
        src={
          mode === "light"
            ? "./asset/images/icon-moon.svg"
            : "./asset/images/icon-sun.svg"
        }
      />
    </div>
  );
}
