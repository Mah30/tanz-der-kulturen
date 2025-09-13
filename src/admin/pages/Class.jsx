import { useState, useEffect } from "react";
import AddClassModal from "../components/ClassModal";
import EditClassModal from "../components/EditClassModal";
import AdminLayout from "../components/AdminLayout";
import { classesAPI } from "../../services/api";

function Class() {
  const [classes, setClasses] = useState([]);

  // Fetch classes from database on mount
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await classesAPI.getAll();
        setClasses(response.data.data || []);
      } catch {
        setClasses([]);
      }
    };
    fetchClasses();
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editClass, setEditClass] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [activeSection, setActiveSection] = useState("ongoing"); // Section state for tab buttons

  // Filter classes by search term
  const filteredClasses = classes.filter(
    (cls) =>
      (cls.names &&
        cls.names.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (cls.instructor &&
        cls.instructor.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Split classes by status
  const ongoingClasses = filteredClasses.filter(
    (cls) => cls.status === "ongoing"
  );
  const upcomingClasses = filteredClasses.filter(
    (cls) => cls.status === "upcoming"
  );
  const completedClasses = filteredClasses.filter(
    (cls) => cls.status === "completed"
  );

  // Delete a class
  const handleDelete = async (id) => {
    if (window.confirm("Delete this class permanently?")) {
      try {
        await classesAPI.delete(id);
        setClasses(classes.filter((cls) => cls.id !== id));
        setSuccessMsg("Class deleted successfully!");
        setTimeout(() => setSuccessMsg(""), 3000);
      } catch {
        alert("Failed to delete class. Please try again.");
      }
    }
  };

  // Edit a class
  const handleEdit = (cls) => {
    setEditClass(cls);
    setShowEditModal(true);
  };

  // Save edited class
  const handleUpdateClass = async (updatedClass) => {
    try {
      await classesAPI.update(updatedClass.id, updatedClass);
      setClasses(
        classes.map((cls) => (cls.id === updatedClass.id ? updatedClass : cls))
      );
      setShowEditModal(false);
      setSuccessMsg("Class updated successfully!");
      setTimeout(() => setSuccessMsg(""), 3000);
    } catch {
      alert("Failed to update class. Please try again.");
    }
  };

  // Save new class to database and update state
  const handleSaveClass = async (newClass) => {
    try {
      const response = await classesAPI.create(newClass);
      const savedClass = response.data || { ...newClass, id: Date.now() };
      setClasses([...classes, savedClass]);
      setShowModal(false);
      setSuccessMsg("Class added successfully!");
      setTimeout(() => setSuccessMsg(""), 3000);
    } catch {
      alert("Failed to save class. Please try again.");
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
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <h2 className="text-2xl font-bold">Manage Classes</h2>
          <button
            className="inline-flex items-center  bg-black hover:bg-gray-800 text-white font-semibold px-4 py-2 rounded shadow"
            onClick={() => setShowModal(true)}
          >
            {/* Plus icon SVG */}
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
              placeholder="Search classes or instructors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Section Tabs */}
        <div className="flex gap-2 mb-6">
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
        {activeSection === "ongoing" && (
          <>
            <h3 className="text-xl font-semibold mb-2">Ongoing Classes</h3>
            <div className="bg-white rounded shadow mb-8">
              <div className="overflow-x-auto">
                <ClassTable
                  classes={ongoingClasses}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              </div>
            </div>
          </>
        )}
        {activeSection === "upcoming" && (
          <>
            <h3 className="text-xl font-semibold mb-2">Upcoming Classes</h3>
            <div className="bg-white rounded shadow mb-8">
              <div className="overflow-x-auto">
                <ClassTable
                  classes={upcomingClasses}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              </div>
            </div>
          </>
        )}
        {activeSection === "completed" && (
          <>
            <h3 className="text-xl font-semibold mb-2">Completed Classes</h3>
            <div className="bg-white rounded shadow mb-8">
              <div className="overflow-x-auto">
                <ClassTable
                  classes={completedClasses}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              </div>
            </div>
          </>
        )}

        {/* Add Class Modal */}
        <AddClassModal
          show={showModal}
          onClose={() => setShowModal(false)}
          onSave={handleSaveClass}
        />
        {/* Edit Class Modal */}
        <EditClassModal
          show={showEditModal}
          onClose={() => setShowEditModal(false)}
          onSave={handleUpdateClass}
          classData={editClass}
        />
      </div>
    </AdminLayout>
  );
}

export default Class;

// Helper table component for reuse
function ClassTable({ classes, onEdit, onDelete }) {
  if (!classes.length) {
    return (
      <div className="text-center py-8 text-gray-500">No classes found</div>
    );
  }
  return (
    <table className="min-w-full text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 text-left font-semibold">Class Name</th>
          <th className="px-4 py-2 text-left font-semibold">Instructor</th>
          <th className="px-4 py-2 text-left font-semibold">Schedule</th>
          <th className="px-4 py-2 text-left font-semibold">Students</th>
          <th className="px-4 py-2 text-left font-semibold">Actions</th>
        </tr>
      </thead>
      <tbody>
        {classes.map((cls) => (
          <tr key={cls.id} className="border-b last:border-b-0">
            <td className="px-4 py-2">{cls.names}</td>
            <td className="px-4 py-2">{cls.instructor}</td>
            <td className="px-4 py-2">{cls.schedule}</td>
            <td className="px-4 py-2">{cls.students}</td>
            <td className="px-4 py-2 flex gap-2">
              <button
                className="inline-flex items-center px-2 py-1 text-xs font-medium text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
                onClick={() => onEdit(cls)}
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
                onClick={() => onDelete(cls.id)}
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
