export default function InputContainer() {
  return (
    <div className="flex items-center gap-4 bg-white rounded-md px-6 py-4 shadow-lg w-full">
      <div className="w-6 h-6 rounded-full border border-custom-gray-300 cursor-pointer"></div>
      <input
        type="text"
        placeholder="Create a new todo..."
        className="w-full p-4 rounded-xl bg-white"
      />
    </div>
  );
}
