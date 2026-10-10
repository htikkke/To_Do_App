import { useContext } from "react";
import { FormContext } from "./App";
import moonIcon from "../public/asset/images/icon-moon.svg";
import sunIcon from "../public/asset/images/icon-sun.svg";

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
      {/* warp with button for keyboard user and screen-reader */}
      <button
        type="button"
        onClick={toggleMode}
        aria-label={
          mode === "light" ? "Switch to dark theme" : "Switch to light theme"
        }
        className="cursor-pointer focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4 rounded-sm"
      >
        <img
          src={mode === "light" ? moonIcon : sunIcon}
          alt=""
          className="w-6 h-6"
        />
      </button>
    </div>
  );
}
