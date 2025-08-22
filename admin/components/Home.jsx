export default function Home() {
  // Sample data (replace with real API data later)
  const stats = [
    { title: "Total Classes", value: 12, icon: "bi-people", color: "primary" },
    { title: "Active Events", value: 5, icon: "bi-calendar", color: "success" },
    { title: "Registered Users", value: 84, icon: "bi-person", color: "info" },
    { title: "Media Files", value: 36, icon: "bi-images", color: "warning" },
  ];

  const upcomingEvents = [
    {
      id: 1,
      name: "Afrobeat Workshop",
      date: "2023-10-15",
      instructor: "Kofi",
    },
    { id: 2, name: "Traditional Dance", date: "2023-10-20", instructor: "Ama" },
  ];

  const recentActivity = [
    { id: 1, action: "New class added", time: "2 hours ago" },
    { id: 2, action: "User 'John' registered", time: "5 hours ago" },
  ];

  return (
    <div className="container-fluid">
      {/* Page Title */}
      <h2 className="mb-4">Dashboard Overview</h2>

      {/* Stats Cards */}
      <div className="row mb-4">
        {stats.map((stat, index) => (
          <div key={index} className="col-md-3 mb-3">
            <div className={`card border-0 bg-${stat.color} bg-opacity-10`}>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="card-subtitle text-muted">{stat.title}</h6>
                    <h3 className="card-title mt-2">{stat.value}</h3>
                  </div>
                  <i className={`bi ${stat.icon} fs-1 text-${stat.color}`}></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Quick Actions</h5>
              <div className="d-flex gap-2">
                <button className="btn btn-primary">
                  <i className="bi bi-plus-circle me-2"></i> Add Class
                </button>
                <button className="btn btn-success">
                  <i className="bi bi-calendar-plus me-2"></i> Create Event
                </button>
                <button className="btn btn-info">
                  <i className="bi bi-upload me-2"></i> Upload Media
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events & Recent Activity */}
      <div className="row">
        {/* Upcoming Events Table */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title d-flex justify-content-between align-items-center">
                Upcoming Events
                <a href="/events" className="btn btn-sm btn-outline-primary">
                  View All
                </a>
              </h5>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Event</th>
                      <th>Date</th>
                      <th>Instructor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {upcomingEvents.map((event) => (
                      <tr key={event.id}>
                        <td>{event.name}</td>
                        <td>{event.date}</td>
                        <td>{event.instructor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity Feed */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Recent Activity</h5>
              <ul className="list-group list-group-flush">
                {recentActivity.map((activity) => (
                  <li
                    key={activity.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    {activity.action}
                    <small className="text-muted">{activity.time}</small>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
