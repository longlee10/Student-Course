import React from "react";
import { useRef } from "react";

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

  return (
    <form
      className="w-50 m-auto"
      onSubmit={(e) => {
        e.preventDefault();

        const data = {
          studentNumber: studentNumber.current.value,
          fName: fName.current.value,
          lName: lName.current.value,
          email: email.current.value,
          password: password.current.value,
          address: address.current.value,
          city: city.current.value,
          phone: phone.current.value,
          program: program.current.value,
        };

        console.log(data);
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
        />
      </div>

      <button type="submit" className="btn btn-primary mt-3">
        Submit
      </button>
    </form>
  );
};

export default NewStudentForm;
