import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
export default function Dashboard() {
  return (
    <div className="p-4">
      <Header />
      <Sidebar />
      <h3 className="mb-4">Dashboard Overview</h3>
      <div className="row">
        <div className="col-md-3 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total Classes</h5>
              <p className="card-text fs-2">12</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Upcoming Events</h5>
              <p className="card-text fs-2">5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
