import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from "./pages/Home";
import Input from "./pages/Input";
import ProjectDetails from './pages/ProjectDetails';
import ProjectDetailPage from './pages/ProjectDetailsPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const location = useLocation();
  const navigate = useNavigate();

  const isProjectDetailPage = location.pathname.startsWith('/projects/');

  return (
    <div>
      {!isProjectDetailPage && <Navbar />}
      {isProjectDetailPage && (
        <button
          onClick={() => navigate(-1)}
          className="p-2 m-4 text-lg font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800"
        >
          Back
        </button>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Input" element={<Input />} />
        <Route path="/projects" element={<ProjectDetails />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;

