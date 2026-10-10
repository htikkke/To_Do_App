import { useState, createContext } from "react";
import Header from "./Header";
import InputContainer from "./InputContainer";
import ToDoLists from "./ToDoLists";

// Background images
import bgLightDesktop from "./asset/images/bg-desktop-light.jpg";
import bgLightMobile from "./asset/images/bg-mobile-light.jpg";
import bgDarkDesktop from "./asset/images/bg-desktop-dark.jpg";
import bgDarkMobile from "./asset/images/bg-mobile-dark.jpg";

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
          backgroundImage: `url(${
            mode === "light" ? bgLightDesktop : bgDarkDesktop
          })`,
        }}
        className={`w-full min-h-screen bg-repeat-x bg-contain ${
          mode === "dark" ? "bg-custom-Navy-950" : ""
        } flex items-start justify-center transition-all max-[500px]:bg-(image:--bg-mobile)`}
      >
        <div
          id="to-do-app-container"
          className="w-[98%] sm:w-[90%] max-w-xl rounded-2xl p-6 flex flex-col gap-6 mt-18 max-[500px]:mt-10"
        >
          <Header />
          <InputContainer />
          <ToDoLists />
        </div>
      </main>
    </FormContext.Provider>
  );
}
