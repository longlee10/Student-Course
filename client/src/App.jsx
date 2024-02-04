import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Courses from "./components/Courses";
import Student from "./components/Students";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/students" element={<Student />} />
      </Routes>

      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </Router>
  );
}

export default App;
