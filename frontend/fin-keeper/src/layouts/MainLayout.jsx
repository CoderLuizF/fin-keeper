import Sidebar from "../components/Sidebar";

function MainLayout() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">Content</main>
    </div>
  );
}

export default MainLayout;
