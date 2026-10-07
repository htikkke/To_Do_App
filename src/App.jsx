import { useState, createContext } from "react";
import Header from "./Header";
import InputContainer from "./InputContainer";
import ToDoLists from "./ToDoLists";

export const FormContext = createContext();
export default function App() {
  const [todos, setToDos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
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
      <div
        id="main-container"
        className="w-full min-h-screen bg-[url('/asset/images/bg-desktop-light.jpg')] bg-repeat-x flex items-start justify-center"
      >
        <div
          id="to-do-app-container"
          className="w-[40%] rounded-2xl p-6 flex flex-col gap-6 mt-18"
        >
          <Header />
          <InputContainer />
          <ToDoLists />
        </div>
      </div>
    </FormContext.Provider>
  );
}
