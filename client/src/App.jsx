import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Courses from "./components/Courses";
import Student from "./components/Students";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/courses" element={<Courses />} />
        <Route path="/students" element={<Student />} />
      </Routes>
    </Router>
  );
}

export default App;
