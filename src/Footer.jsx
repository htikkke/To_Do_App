export default function Footer() {
  return (
    <div className="flex items-center justify-between px-6 py-4 text-custom-Gray-600 text-sm">
      <div>
        <p>items left</p>
      </div>
      <div className="flex gap-4">
        <p>All</p>
        <p>Active</p>
        <p>Completed</p>
      </div>
      <div>
        <p>Clear Completed</p>
      </div>
    </div>
  );
}
