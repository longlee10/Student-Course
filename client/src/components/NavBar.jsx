import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary mb-3">
      <ul className="navbar-nav d-flex flex-row">
        <li className="nav-item">
          <a className="nav-link text-light" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/students">
            Students
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="courses">
            Courses
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
