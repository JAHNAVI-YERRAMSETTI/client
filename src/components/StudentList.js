import React, { useState } from 'react';
import './StudentList.css';

function StudentList() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ id: '', firstName: '', lastName: '', age: '' });

  // Handles input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  // Adds new student to the table
  const handleAddStudent = () => {
    if (newStudent.id && newStudent.firstName && newStudent.lastName && newStudent.age) {
      setStudents([...students, newStudent]);
      setNewStudent({ id: '', firstName: '', lastName: '', age: '' });
    }
  };

  return (
    <div className="student-list">
      <h2>Student List</h2>

      {/* Form to add a new student */}
      <div className="student-form">
        <input
          type="text"
          name="id"
          placeholder="Student ID"
          value={newStudent.id}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={newStudent.firstName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={newStudent.lastName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={newStudent.age}
          onChange={handleInputChange}
        />
        <button onClick={handleAddStudent}>Add Student</button>
      </div>

      {/* Table displaying student data */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.id}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
