import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function MainLayout() {
  return (
    <div className="flex h-screen bg-[#f5f6fa] font-sans">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-5">Content</main>
      </div>
    </div>
  );
}

export default MainLayout;
