import { Link } from "react-router-dom";

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
    <div className="w-50 m-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Course Name</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr
              key={student.id}
              className="d-flex flex-row justify-content-between"
            >
              <td>{student.name}</td>
              <td>
                <div>
                  <button className="btn btn-danger mx-3">Delete</button>
                  <button className="btn btn-success">Update</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link className="btn btn-primary" to="/new-student">
        Add Student
      </Link>
    </div>
  );
};

export default Students;
