import React from "react";

const Students = () => {
  const students = [
    {
      id: 1,
      name: "Alice",
    },
    {
      id: 2,
      name: "Bob",
    },
    {
      id: 3,
      name: "Charlie",
    },
  ];

  return (
    <div>
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
      <button className="btn btn-secondary">
        <a href="/new-student">Add Student</a>
      </button>
    </div>
  );
};

export default Students;
