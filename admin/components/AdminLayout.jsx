// src/layouts/AdminLayout.js
import Header from "../components/main/Header";
import Sidebar from "../components/main/Sidebar";
import Footer from "../components/main/Footer";

export default function AdminLayout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main className="flex-grow-1 p-4">
          {children} {/* Page content renders here */}
        </main>
      </div>
      <Footer />
    </div>
  );
}
