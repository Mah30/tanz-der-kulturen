import Header from "../../components/Header";
import Sidebar from "../components/main/Sidebar";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";
export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8">
          <h3 className="mb-8 text-3xl font-bold text-gray-800">
            Dashboard Overview
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center">
              <h5 className="text-lg font-semibold mb-2 text-gray-700">
                Total Classes
              </h5>
              <p className="text-4xl font-extrabold text-blue-600">12</p>
            </div>
            <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center">
              <h5 className="text-lg font-semibold mb-2 text-gray-700">
                Upcoming Events
              </h5>
              <p className="text-4xl font-extrabold text-green-600">5</p>
            </div>
            {/* Add more dashboard cards here as needed */}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
