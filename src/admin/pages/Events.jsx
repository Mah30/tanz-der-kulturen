import { useState, useEffect } from "react";
import { eventsAPI } from "../../services/api";
import AddEventModal from "../components/AddEventModal";
import EditEventModal from "../components/EditEventModal";

import AdminLayout from "../components/AdminLayout";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [successMsg, setSuccessMsg] = useState("");

  // Fetch events from database on mount
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await eventsAPI.getAll();
        console.log("Fetched events:", response.data);
        setEvents(response.data.data || []);
      } catch {
        setEvents([]);
      }
    };
    fetchEvents();
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editEvent, setEditEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  // const [statusFilter, setStatusFilter] = useState("all");
  const [activeSection, setActiveSection] = useState("upcoming");

  // Filter events by search term
  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  // Split events by status
  const ongoingEvents = filteredEvents.filter(
    (event) => event.status === "ongoing"
  );
  const upcomingEvents = filteredEvents.filter(
    (event) => event.status === "upcoming"
  );
  const completedEvents = filteredEvents.filter(
    (event) => event.status === "completed"
  );

  // Delete an event
  const handleDelete = async (id) => {
    if (window.confirm("Delete this event permanently?")) {
      try {
        await eventsAPI.delete(id);
        setEvents(events.filter((event) => event.id !== id));
        setSuccessMsg("Event deleted successfully!");
        setTimeout(() => setSuccessMsg(""), 3000);
      } catch {
        alert("Failed to delete event. Please try again.");
      }
    }
  };

  // Edit an event
  const handleEdit = (event) => {
    setEditEvent(event);
    setShowEditModal(true);
  };

  // Save edited event
  const handleUpdateEvent = async (updatedEvent) => {
    try {
      await eventsAPI.update(updatedEvent.id, updatedEvent);
      setEvents(
        events.map((event) =>
          event.id === updatedEvent.id ? updatedEvent : event
        )
      );
      setShowEditModal(false);
      setSuccessMsg("Event updated successfully!");
      setTimeout(() => setSuccessMsg(""), 3000);
    } catch {
      alert("Failed to update event. Please try again.");
    }
  };

  // Save new event to database and update state
  const handleSaveEvent = async (newEvent) => {
    try {
      const response = await eventsAPI.create(newEvent);
      const savedEvent = response.data || { ...newEvent, id: Date.now() };
      setEvents([...events, savedEvent]);
      setShowModal(false);
      setSuccessMsg("Event added successfully!");
      setTimeout(() => setSuccessMsg(""), 3000);
    } catch {
      alert("Failed to save event. Please try again.");
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-6xl mx-auto px-4 py-6">
        {successMsg && (
          <div className="bg-green-100 border border-green-300 text-green-800 px-4 py-2 rounded mb-4">
            {successMsg}
          </div>
        )}
        {/* Page Header + Add Button */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <h2 className="text-2xl font-bold">Manage Events</h2>
          <button
            className="inline-flex items-center bg-black hover:bg-gray-800 text-white font-semibold px-4 py-2 rounded shadow"
            onClick={() => setShowModal(true)}
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
            Add Event
          </button>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded shadow mb-6 p-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4-4m0 0A7 7 0 104 4a7 7 0 0013 13z"
                />
              </svg>
            </span>
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="Search events or locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Section Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            className={`px-4 py-2 rounded font-semibold border transition-colors ${
              activeSection === "upcoming"
                ? "text-gray border-gray-900"
                : "bg-white  hover:bg-gray-300"
            }`}
            onClick={() => setActiveSection("upcoming")}
          >
            Upcoming
          </button>
          <button
            className={`px-4 py-2 rounded font-semibold border transition-colors ${
              activeSection === "ongoing"
                ? "text-gray border-gray-900"
                : "bg-white  hover:bg-gray-300"
            }`}
            onClick={() => setActiveSection("ongoing")}
          >
            Ongoing
          </button>
          <button
            className={`px-4 py-2 rounded font-semibold border transition-colors ${
              activeSection === "completed"
                ? "text-gray border-gray-900"
                : "bg-white  hover:bg-gray-300"
            }`}
            onClick={() => setActiveSection("completed")}
          >
            Completed
          </button>
        </div>

        {/* Section Tables */}
        {activeSection === "upcoming" && (
          <>
            <h3 className="text-xl font-semibold mb-2">Upcoming Events</h3>
            <div className="bg-white rounded shadow mb-8">
              <div className="overflow-x-auto">
                <EventsTable
                  events={upcomingEvents}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              </div>
            </div>
          </>
        )}
        {activeSection === "ongoing" && (
          <>
            <h3 className="text-xl font-semibold mb-2">Ongoing Events</h3>
            <div className="bg-white rounded shadow mb-8">
              <div className="overflow-x-auto">
                <EventsTable
                  events={ongoingEvents}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              </div>
            </div>
          </>
        )}
        {activeSection === "completed" && (
          <>
            <h3 className="text-xl font-semibold mb-2">Completed Events</h3>
            <div className="bg-white rounded shadow mb-8">
              <div className="overflow-x-auto">
                <EventsTable
                  events={completedEvents}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              </div>
            </div>
          </>
        )}

        {/* Add Event Modal */}
        {showModal && (
          <AddEventModal
            show={showModal}
            onClose={() => setShowModal(false)}
            onSave={handleSaveEvent}
          />
        )}
        {/* Edit Event Modal */}
        {showEditModal && (
          <EditEventModal
            show={showEditModal}
            onClose={() => setShowEditModal(false)}
            onSave={handleUpdateEvent}
            eventData={editEvent}
          />
        )}
      </div>
    </AdminLayout>
  );
}

// Helper table component for reuse
function EventsTable({ events, onEdit, onDelete }) {
  if (!events.length) {
    return (
      <div className="text-center py-8 text-gray-500">No events found</div>
    );
  }
  return (
    <table className="min-w-full text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 text-left font-semibold">Event Name</th>
          <th className="px-4 py-2 text-left font-semibold">Date</th>
          <th className="px-4 py-2 text-left font-semibold">Location</th>
          <th className="px-4 py-2 text-left font-semibold">Attendees</th>
          <th className="px-4 py-2 text-left font-semibold">Status</th>
          <th className="px-4 py-2 text-left font-semibold">Actions</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event) => (
          <tr key={event.id} className="border-b last:border-b-0">
            <td className="px-4 py-2 font-semibold">{event.name}</td>
            <td className="px-4 py-2">{event.date}</td>
            <td className="px-4 py-2">{event.location}</td>
            <td className="px-4 py-2">{event.attendees}</td>
            <td className="px-4 py-2">
              <span
                className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                  event.status === "upcoming"
                    ? "bg-blue-100 text-blue-800"
                    : event.status === "ongoing"
                    ? "bg-green-100 text-green-800"
                    : event.status === "completed"
                    ? "bg-gray-200 text-gray-700"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
              </span>
            </td>
            <td className="px-4 py-2 flex gap-2">
              <button
                className="inline-flex items-center px-2 py-1 text-xs font-medium text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
                onClick={() => onEdit(event)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536M9 13h6m2 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Edit
              </button>
              <button
                className="inline-flex items-center px-2 py-1 text-xs font-medium text-red-600 border border-red-600 rounded hover:bg-red-50"
                onClick={() => onDelete(event.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
