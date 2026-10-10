import { useState, createContext } from "react";
import Header from "./Header";
import InputContainer from "./InputContainer";
import ToDoLists from "./ToDoLists";

// Background images
import bgLightDesktop from "../public/asset/images/bg-desktop-light.jpg";
import bgDarkDesktop from "../public/asset/images/bg-desktop-dark.jpg";
import bgDarkMobile from "../public/asset/images/bg-mobile-dark.jpg";
import bgLightMobile from "../public/asset/images/bg-mobile-light.jpg";

export const FormContext = createContext();
export default function App() {
  const [todos, setToDos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [selectedOption, setSelectedOption] = useState("all");
  const [mode, setMode] = useState("light");

  const handleInput = (e) => {
    e.preventDefault();
    if (!inputText.trim()) {
      return;
    }
    const newToDo = {
      id: Date.now(),
      text: inputText,
      completed: false,
    };
    setToDos([...todos, newToDo]);
    setInputText("");
  };

  const toggleToDo = (id) => {
    setToDos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteToDo = (id) => {
    setToDos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  const currentBg = mode === "light" ? bgLightDesktop : bgDarkDesktop;
  const currentMobileBg = mode === "light" ? bgLightMobile : bgDarkMobile;
  return (
    <FormContext.Provider
      value={{
        todos,
        setToDos,
        inputText,
        setInputText,
        handleInput,
        toggleToDo,
        deleteToDo,
        selectedOption,
        setSelectedOption,
        mode,
        setMode,
      }}
    >
      <main
        id="main-container"
        style={{
          backgroundImage: `url(${currentBg})`,
          "--mobile-bg": `url(${currentMobileBg})`,
        }}
        className={`min-h-screen w-full flex justify-center bg-no-repeat bg-top transition-colors duration-300 ${
          mode === "dark" ? "bg-custom-Navy-950" : "bg-white"
        }`}
      >
        <div
          id="to-do-app-container"
          className="mx-auto mt-18 flex w-[98%] max-w-xl flex-col gap-6 rounded-2xl p-6 max-[500px]:mt-10"
        >
          <Header />
          <InputContainer />
          <ToDoLists />
        </div>
      </main>
    </FormContext.Provider>
  );
}
