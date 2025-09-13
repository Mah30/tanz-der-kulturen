// src/layouts/AdminLayout.js
import Header from "../components/main/Header";
import Sidebar from "../components/main/Sidebar";
import Footer from "../components/main/Footer";

export default function AdminLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 bg-gray-50">
          {children} {/* Page content renders here */}
        </main>
      </div>
      <Footer />
    </div>
  );
}
