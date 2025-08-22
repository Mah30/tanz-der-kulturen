import { useState } from "react";
import AddClassModal from "../components/ClassModal";
import AdminLayout from "../components/AdminLayout";

export default function AdminClasses() {
  const [classes, setClasses] = useState([
    {
      id: 1,
      name: "Afrobeat Beginners",
      instructor: "Kofi Mensah",
      schedule: "Mon/Wed 6-8PM",
      students: 15,
    },
    {
      id: 2,
      name: "Traditional Dance",
      instructor: "Ama Osei",
      schedule: "Tue/Thu 4-6PM",
      students: 22,
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter classes by search term
  const filteredClasses = classes.filter(
    (cls) =>
      cls.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cls.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Delete a class
  const handleDelete = (id) => {
    if (window.confirm("Delete this class permanently?")) {
      setClasses(classes.filter((cls) => cls.id !== id));
    }
  };

  return (
    <AdminLayout>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Manage Classes</h2>
          <button
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            <i className="bi bi-plus-lg me-2"></i> Add Class
          </button>
        </div>

        {/* Search Bar */}
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search classes or instructors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Classes Table */}
        <div className="card shadow-sm">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Class Name</th>
                    <th>Instructor</th>
                    <th>Schedule</th>
                    <th>Students</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredClasses.map((cls) => (
                    <tr key={cls.id}>
                      <td>{cls.name}</td>
                      <td>{cls.instructor}</td>
                      <td>{cls.schedule}</td>
                      <td>{cls.students}</td>
                      <td>
                        <button className="btn btn-sm btn-outline-primary me-2">
                          <i className="bi bi-pencil"></i> Edit
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleDelete(cls.id)}
                        >
                          <i className="bi bi-trash"></i> Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Add Class Modal */}
        <AddClassModal
          show={showModal}
          onClose={() => setShowModal(false)}
          onSave={(newClass) => {
            setClasses([...classes, { ...newClass, id: classes.length + 1 }]);
            setShowModal(false);
          }}
        />
      </div>
    </AdminLayout>
  );
}
