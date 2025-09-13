import { useState, useEffect } from "react";
import AddClassModal from "./ClassModal";
import AddEventModal from "./AddEventModal";
import { classesAPI, eventsAPI } from "../../services/api";

export default function Home() {
  const [showClassModal, setShowClassModal] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [stats, setStats] = useState([
    { title: "Total Classes", value: 0, icon: "bi-people", color: "primary" },
    { title: "Total Events", value: 0, icon: "bi-calendar", color: "success" },
    { title: "Registered Users", value: 0, icon: "bi-person", color: "info" },
    { title: "Media Files", value: 0, icon: "bi-images", color: "warning" },
  ]);

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

  useEffect(() => {
    fetch(
      "http://localhost/tanz-der-kulturen-main/src/admin/php-api/get_dashboard_stats.php"
    )
      .then((res) => res.json())
      .then((data) => {
        setStats([
          {
            title: "Total Classes",
            value: data.totalClasses,
            icon: "bi-people",
            color: "primary",
          },
          {
            title: "Total Events",
            value: data.totalEvents,
            icon: "bi-calendar",
            color: "success",
          },
          {
            title: "Registered Users",
            value: data.registeredUsers,
            icon: "bi-person",
            color: "info",
          },
          {
            title: "Media Files",
            value: data.mediaFiles,
            icon: "bi-images",
            color: "warning",
          },
        ]);
      });
  }, []);

  // Save new class to database
  const handleSaveClass = async (newClass) => {
    try {
      await classesAPI.create(newClass);
      setShowClassModal(false);
      setSuccessMsg("Class added successfully!");
      setErrorMsg("");
      setTimeout(() => setSuccessMsg(""), 3000);
    } catch (error) {
      setErrorMsg(error.response?.data?.error || "Failed to save class.");
      setSuccessMsg("");
      setTimeout(() => setErrorMsg(""), 4000);
    }
  };

  // Save new event to database
  const handleSaveEvent = async (newEvent) => {
    try {
      await eventsAPI.create(newEvent);
      setShowEventModal(false);
      setSuccessMsg("Event added successfully!");
      setErrorMsg("");
      setTimeout(() => setSuccessMsg(""), 3000);
    } catch (error) {
      setErrorMsg(error.response?.data?.error || "Failed to save event.");
      setSuccessMsg("");
      setTimeout(() => setErrorMsg(""), 4000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {successMsg && (
        <div className="bg-green-100 border border-green-300 text-green-800 px-4 py-2 rounded mb-4">
          {successMsg}
        </div>
      )}
      {errorMsg && (
        <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 px-4 py-2 rounded mb-4">
          {errorMsg}
        </div>
      )}
      {/* Page Title */}
      <h2 className="mb-8 text-3xl font-bold text-gray-800">
        Dashboard Overview
      </h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-6 flex items-center justify-between"
          >
            <div>
              <h6 className="text-gray-500 text-sm font-medium">
                {stat.title}
              </h6>
              <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
            </div>
            <span className="text-3xl">
              {stat.title === "Total Classes" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M17 8a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
              {stat.title === "Total Events" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              )}
              {stat.title === "Registered Users" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-indigo-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.797.657 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
              {stat.title === "Media Files" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M4 16V8a2 2 0 012-2h12a2 2 0 012 2v8M4 16l4-4a2 2 0 012.828 0l2.344 2.344a2 2 0 002.828 0L20 12"
                  />
                </svg>
              )}
            </span>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <h5 className="text-lg font-semibold mb-4">Quick Actions</h5>
        <div className="flex flex-wrap gap-4">
          <button
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded shadow"
            onClick={() => setShowClassModal(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add Class
          </button>
          <button
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded shadow"
            onClick={() => setShowEventModal(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Create Event
          </button>
          <button className="inline-flex items-center bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-4 py-2 rounded shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M4 16V8a2 2 0 012-2h12a2 2 0 012 2v8M4 16l4-4a2 2 0 012.828 0l2.344 2.344a2 2 0 002.828 0L20 12"
              />
            </svg>
            Upload Media
          </button>
        </div>
      </div>

      {/* Modals for Quick Actions */}
      <AddClassModal
        show={showClassModal}
        onClose={() => setShowClassModal(false)}
        onSave={handleSaveClass}
      />
      <AddEventModal
        show={showEventModal}
        onClose={() => setShowEventModal(false)}
        onSave={handleSaveEvent}
      />

      {/* Upcoming Events & Recent Activity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Upcoming Events Table */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-lg font-semibold">Upcoming Events</h5>
            <a
              href="/events"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              View All
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold">Event</th>
                  <th className="px-4 py-2 text-left font-semibold">Date</th>
                  <th className="px-4 py-2 text-left font-semibold">
                    Instructor
                  </th>
                </tr>
              </thead>
              <tbody>
                {upcomingEvents.map((event) => (
                  <tr key={event.id} className="border-b last:border-b-0">
                    <td className="px-4 py-2">{event.name}</td>
                    <td className="px-4 py-2">{event.date}</td>
                    <td className="px-4 py-2">{event.instructor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Activity Feed */}
        <div className="bg-white rounded-xl shadow p-6">
          <h5 className="text-lg font-semibold mb-4">Recent Activity</h5>
          <ul className="divide-y divide-gray-200">
            {recentActivity.map((activity) => (
              <li
                key={activity.id}
                className="flex justify-between items-center py-2"
              >
                <span>{activity.action}</span>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
