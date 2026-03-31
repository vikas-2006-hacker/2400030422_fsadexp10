import React, { useState } from "react";
import "./StudentManager.css";

function StudentManager() {

  // ✅ Initial students
  const [students, setStudents] = useState([
    { id: 1, name: "Vikas", course: "CSE" },
    { id: 2, name: "Rahul", course: "AI" },
    { id: 3, name: "Sneha", course: "DS" },
    { id: 4, name: "Anu", course: "IT" },
    { id: 5, name: "Kiran", course: "ECE" }
  ]);

  // ✅ New student object
  const [newStudent, setNewStudent] = useState({
    id: "",
    name: "",
    course: ""
  });

  // ✅ Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({
      ...newStudent,
      [name]: value
    });
  };

  // ✅ Add student
  const addStudent = () => {
    if (!newStudent.id || !newStudent.name || !newStudent.course) {
      alert("Please fill all fields");
      return;
    }

    setStudents([...students, newStudent]);

    // clear input fields
    setNewStudent({ id: "", name: "", course: "" });
  };

  // ✅ Delete student
  const deleteStudent = (id) => {
    const updated = students.filter((s) => s.id !== id);
    setStudents(updated);
  };

  return (
    <div className="container">
      <h2>Student Manager</h2>

      {/* Input Fields */}
      <input
        type="number"
        name="id"
        placeholder="ID"
        value={newStudent.id}
        onChange={handleChange}
      />

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={newStudent.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="course"
        placeholder="Course"
        value={newStudent.course}
        onChange={handleChange}
      />

      <button onClick={addStudent}>Add Student</button>

      {/* Display Students */}
      {students.length === 0 ? (
        <p>No students available</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Course</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.course}</td>
                <td>
                  <button onClick={() => deleteStudent(s.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentManager;