import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      className="bg-dark text-white p-3"
      style={{ width: "250px", minHeight: "100vh" }}
    >
      <ul className="nav flex-column">
        <li className="nav-item mb-3">
          <Link to="../admin/pages/Admin" className="nav-link text-white">
            <i className="bi bi-house me-2"></i> Dashboard
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link to="../admin/pages/Class" className="nav-link text-white">
            <i className="bi bi-people me-2"></i> Classes
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link to="/events" className="nav-link text-white">
            <i className="bi bi-calendar me-2"></i> Events
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link to="/media" className="nav-link text-white">
            <i className="bi bi-images me-2"></i> Media
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link to="/settings" className="nav-link text-white">
            <i className="bi bi-gear me-2"></i> Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}
