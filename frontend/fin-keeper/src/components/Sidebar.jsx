function Sidebar() {
  return (
    <aside className="w-40 bg-white p-5 border-r border-gray-300">
      <h2 className="mb-5 font-bold">FinKeeper</h2>

      <nav className="space-y-2">
        <a className="block text-gray-700 no-underline" href="#">
          Dashboard
        </a>
        <a className="block text-gray-700 no-underline" href="#">
          Expenses
        </a>
        <a className="block text-gray-700 no-underline" href="#">
          Reports
        </a>
        <a className="block text-gray-700 no-underline" href="#">
          Settings
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
