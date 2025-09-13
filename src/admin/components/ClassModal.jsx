import React, { useState } from "react";
export default function AddClassModal({ show, onClose, onSave }) {
  const [formData, setFormData] = useState({
    names: "",
    instructor: "",
    schedule: "",
    students: 20,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({ names: "", instructor: "", schedule: "", students: 20 });
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg mx-4">
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h5 className="text-xl font-semibold">Add New Class</h5>
          <button
            type="button"
            className="text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
            onClick={onClose}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="px-6 py-4 grid grid-cols-1 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Class Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                value={formData.names}
                onChange={(e) =>
                  setFormData({ ...formData, names: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Instructor
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                value={formData.instructor}
                onChange={(e) =>
                  setFormData({ ...formData, instructor: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Schedule
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="e.g., Mon/Wed 6-8PM"
                value={formData.schedule}
                onChange={(e) =>
                  setFormData({ ...formData, schedule: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Students
              </label>
              <input
                type="number"
                min="1"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                value={formData.students}
                onChange={(e) =>
                  setFormData({ ...formData, students: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex justify-end gap-2 border-t px-6 py-4 bg-gray-50 rounded-b-xl">
            <button
              type="button"
              className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 font-medium"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded  bg-black hover:bg-gray-800 text-white font-semibold shadow"
            >
              Save Class
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
