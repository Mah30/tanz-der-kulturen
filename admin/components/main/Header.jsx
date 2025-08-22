export default function Header() {
  return (
    <nav className="navbar navbar-light bg-light shadow-sm">
      <div className="container-fluid">
        <span className="navbar-brand">Afrikanischer Tanz Admin</span>
        <div className="dropdown">
          <button
            className="btn btn-light dropdown-toggle"
            id="dropdownUser"
            data-bs-toggle="dropdown"
          >
            <i className="bi bi-person me-2"></i> Admin
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
