import { useState, useEffect } from "react";

export default function EditEventModal({ show, onClose, onSave, eventData }) {
  const [form, setForm] = useState({ ...eventData });

  // Reset form state when eventData changes
  useEffect(() => {
    setForm({ ...eventData });
  }, [eventData]);

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
        <h2 className="text-xl font-bold mb-4">Edit Event</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name || ""}
            onChange={handleChange}
            placeholder="Event Name"
            className="w-full border rounded px-3 py-2"
            required
          />
          <input
            type="date"
            name="date"
            value={form.date || ""}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
          <input
            type="text"
            name="location"
            value={form.location || ""}
            onChange={handleChange}
            placeholder="Location"
            className="w-full border rounded px-3 py-2"
            required
          />
          <input
            type="number"
            name="attendees"
            value={form.attendees || 0}
            onChange={handleChange}
            placeholder="Attendees"
            className="w-full border rounded px-3 py-2"
            min={0}
            required
          />
          <select
            name="status"
            value={form.status || "upcoming"}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="upcoming">Upcoming</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </select>
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
