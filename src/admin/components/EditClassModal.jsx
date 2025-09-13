import { useState, useEffect } from "react";

export default function EditClassModal({ show, onClose, onSave, classData }) {
  const [form, setForm] = useState({ ...classData });

  // Reset form state when classData changes
  useEffect(() => {
    setForm({ ...classData });
  }, [classData]);

  if (!show) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Edit Class</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="names"
            value={form.names || ""}
            onChange={handleChange}
            placeholder="Class Name"
            className="w-full border rounded px-3 py-2"
            required
          />
          <input
            type="text"
            name="instructor"
            value={form.instructor || ""}
            onChange={handleChange}
            placeholder="Instructor"
            className="w-full border rounded px-3 py-2"
            required
          />
          <input
            type="text"
            name="schedule"
            value={form.schedule || ""}
            onChange={handleChange}
            placeholder="Schedule"
            className="w-full border rounded px-3 py-2"
            required
          />
          <input
            type="number"
            name="students"
            value={form.students || 0}
            onChange={handleChange}
            placeholder="Number of Students"
            className="w-full border rounded px-3 py-2"
            min={0}
            required
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2  bg-black hover:bg-gray-800 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
