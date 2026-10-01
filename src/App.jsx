import { useState, createContext } from "react";
import Header from "./Header";
import InputContainer from "./InputContainer";
import ToDoLists from "./ToDoLists";

const FormContext = createContext();
export default function App() {
  const [todos, setToDos] = useState([]);
  const [inputText, setInputText] = useState("");
  return (
    <FormContext.Provider value={{ todos, setToDos, inputText, setInputText }}>
      <div
        id="main-container"
        className="w-full min-h-screen bg-[url('/asset/images/bg-desktop-light.jpg')] bg-repeat-x flex items-center justify-center"
      >
        <div
          id="to-do-app-container"
          className="w-[40%] rounded-2xl p-6 flex flex-col gap-6"
        >
          <Header />
          <InputContainer />
          <ToDoLists />
        </div>
      </div>
    </FormContext.Provider>
  );
}
