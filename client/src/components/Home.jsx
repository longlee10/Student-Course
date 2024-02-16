import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-50 m-auto">
      <h1 className="text-center">Welcome to MyCentennial.</h1>
      <p>
        {"View courses ->"}
        <Link to="/courses" className="btn btn-primary m-2">
          Courses
        </Link>
      </p>
      <p>
        {"View students ->"}
        <Link to="/students" className="btn btn-primary m-2">
          Students
        </Link>
      </p>
    </div>
  );
};

export default Home;
