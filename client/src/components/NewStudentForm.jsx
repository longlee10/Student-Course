import React from "react";

const NewStudentForm = () => {
  return (
    <form className="w-50 m-auto">
      <div className="form-group mb-3">
        <label htmlFor="studentNumber">Student Number</label>
        <input
          type="text"
          className="form-control"
          id="studentNumber"
          placeholder="Enter student number"
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="fName">First Name</label>
        <input
          type="text"
          className="form-control"
          id="fName"
          placeholder="Enter first name"
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="lName">Last Name</label>
        <input
          type="text"
          className="form-control"
          id="lName"
          placeholder="Enter last name"
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          className="form-control"
          id="address"
          placeholder="Enter address"
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="city">City</label>
        <input
          type="text"
          className="form-control"
          id="city"
          placeholder="Enter City"
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          className="form-control"
          id="phone"
          placeholder="Enter phone number"
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="program">Program</label>
        <input
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
