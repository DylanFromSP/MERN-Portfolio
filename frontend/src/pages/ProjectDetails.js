import React, { useState, useEffect } from 'react';
import Portfolio_Pic from "../images/portfolio_pic.jfif";
import { Link, useNavigate } from 'react-router-dom';

const ProjectDetails = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await fetch("/api/projects/");
        const json = await response.json();
        if (response.ok) {
          setProjects(json);
        } else {
          console.error('Failed to fetch projects:', json);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    getProjects();
  }, []);

  const handleViewProject = (projectId) => {
    if (projectId) {
      navigate(`/projects/${projectId}`);
    } else {
      console.error('Invalid project ID:', projectId);
    }
  };

  return (
    <div className='p-4'>
      <h1 className='text-[#14213D] font-bold text-3xl md:text-6xl text-center p-6 md:p-8'>
        Projects
      </h1>
      <div className='flex flex-wrap gap-6 justify-center px-4 mb-6'>
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <div
              key={index}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full sm:w-72 md:w-80 lg:w-96"
            >
              <Link to={`/projects/${project._id}`}>
                <img
                  className="rounded-t-lg w-full h-48 object-cover md:h-64"
                  src={project.image || Portfolio_Pic} 
                  alt={project.title || 'Project Image'}
                />
              </Link>
              <div className="p-5">
                <Link to={`/projects/${project._id}`}>
                  <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {project.title}
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {project.description?.split(' ').slice(0, 20).join(' ') + (project.description?.split(' ').length > 20 ? '...' : '')}
                </p>
                <button
                  onClick={() => handleViewProject(project._id)}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  View Project
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-700 dark:text-gray-400">No projects available</p>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
