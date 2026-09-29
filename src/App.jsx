import Header from "./Header";

export default function App() {
  return (
    <div
      id="main-container"
      className="w-full min-h-screen bg-[url('/asset/images/bg-desktop-light.jpg')] bg-repeat-x flex items-center justify-center"
    >
      <div
        id="to-do-app-container"
        className="w-[40%] rounded-2xl p-6 flex flex-row gap-8"
      >
        <Header />
      </div>
    </div>
  );
}
