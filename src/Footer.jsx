export default function Footer() {
  return (
    <div className="flex items-center justify-between px-6 py-4 text-custom-Gray-600 text-sm">
      <div>
        <p className="cursor-pointer hover:text-custom-Navy-900 transition-all">
          items left
        </p>
      </div>
      <div className="flex gap-4">
        <p className="cursor-pointer hover:text-custom-Navy-900 transition-all">
          All
        </p>
        <p className="cursor-pointer  hover:text-custom-Navy-900 transition-all">
          Active
        </p>
        <p className="cursor-pointer  hover:text-custom-Navy-900 transition-all">
          Completed
        </p>
      </div>
      <div>
        <p className="cursor-pointer  hover:text-custom-Navy-900 transition-all">
          Clear Completed
        </p>
      </div>
    </div>
  );
}
