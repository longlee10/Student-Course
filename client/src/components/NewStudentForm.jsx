import React from "react";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewStudentForm = () => {
  const studentNumber = useRef(null);
  const fName = useRef(null);
  const lName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const address = useRef(null);
  const city = useRef(null);
  const phone = useRef(null);
  const program = useRef(null);

  const navigate = useNavigate();

  return (
    <form
      className="w-50 m-auto"
      onSubmit={async (e) => {
        e.preventDefault();

        const data = {
          studentNumber: studentNumber.current.value,
          firstName: fName.current.value,
          lastName: lName.current.value,
          email: email.current.value,
          password: password.current.value,
          address: address.current.value,
          city: city.current.value,
          phoneNumber: phone.current.value,
          program: program.current.value,
        };

        await axios.post("http://localhost:5000/students", data);

        navigate("/students");
      }}
    >
      <div className="form-group mb-3">
        <label htmlFor="studentNumber">Student Number</label>
        <input
          ref={studentNumber}
          type="text"
          className="form-control"
          id="studentNumber"
          placeholder="Enter student number"
          required
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="fName">First Name</label>
        <input
          ref={fName}
          type="text"
          className="form-control"
          id="fName"
          placeholder="Enter first name"
          required
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="lName">Last Name</label>
        <input
          ref={lName}
          type="text"
          className="form-control"
          id="lName"
          placeholder="Enter last name"
          required
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="email">Email address</label>
        <input
          ref={email}
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
          required
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="password">Password</label>
        <input
          ref={password}
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          required
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="address">Address</label>
        <input
          ref={address}
          type="text"
          className="form-control"
          id="address"
          placeholder="Enter address"
          required
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="city">City</label>
        <input
          ref={city}
          type="text"
          className="form-control"
          id="city"
          placeholder="Enter City"
          required
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="phone">Phone Number</label>
        <input
          ref={phone}
          type="text"
          className="form-control"
          id="phone"
          placeholder="Enter phone number"
          required
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="program">Program</label>
        <input
          ref={program}
          type="text"
          className="form-control"
          id="program"
          placeholder="Enter program"
          required
        />
      </div>

      <button type="submit" className="btn btn-primary mt-3">
        Submit
      </button>
    </form>
  );
};

export default NewStudentForm;
