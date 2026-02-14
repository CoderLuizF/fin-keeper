import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function MainLayout() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-area">
        <Header />
        <main className="content">Content</main>
      </div>
    </div>
  );
}

export default MainLayout;
