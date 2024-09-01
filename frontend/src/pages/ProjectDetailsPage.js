import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Github_logo from "../images/Github_logo.png"
import Figma_logo from "../images/Figma_logo.png"
import Website_logo from "../images/Website_logo.png"

const ProjectDetailPage = () => {
  const { id } = useParams(); 
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`https://mern-portfolio-sjao.onrender.com/api/projects/${id}`);
        const json = await response.json();
        if (response.ok) {
          setProject(json);
        } else {
          console.error('Failed to fetch project:', json);
        }
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    };

    fetchProject();
  }, [id]);

  if (!project) {
    return <p>Loading...</p>;
  }

    const getYouTubeEmbedURL = (videoId) => {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    };


  return (
    <div className="p-4">
      <h1 className="text-[#14213D] font-bold text-3xl md:text-6xl text-center p-6 md:p-8">
        {project.title}
      </h1>
      <div className="flex items-center justify-center">
        {project.video_url && (
          <iframe
            className="rounded-lg w-full md:w-3/5 h-64 md:h-[600px]"
            src={getYouTubeEmbedURL(project.video_url)}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div className="flex justify-center my-4">
        <div className="flex flex-row flex-wrap justify-center gap-2 w-full md:w-auto">
        {project.github_url && (
            <Link to={project.github_url}>
              <button
                type="button"
                className="md:w-40 md:h-14 text-white bg-[#D49EFF] font-medium rounded-lg py-2 shadow-2xl hover:shadow-purple-500 duration-500"
              >
                <div className="flex items-center justify-center">
                  <img src={Github_logo} alt="GitHub Logo" className="h-8 md:h-10" />
                </div>
              </button>
            </Link>
          )}
          {project.website_url && (
            <Link to={project.website_url}>
              <button
                type="button"
                className="md:w-40 md:h-14 text-white bg-[#B7DBFF] font-medium rounded-lg py-2 shadow-2xl hover:shadow-blue-500 duration-500"
              >
                <div className="flex items-center justify-center">
                  <img src={Website_logo} alt="Website Logo" className="h-8 md:h-8" />
                  <p className="text-black font-extrabold text-sm md:text-sm mr-3">Website</p>
                </div>
              </button>
            </Link>
          )}
          {project.figma_url && (
            <Link to={project.figma_url}>
              <button
                type="button"
                className="md:w-40 md:h-14 text-white bg-slate-300 font-medium rounded-lg py-2 shadow-2xl hover:shadow-gray-500 duration-500"
              >
                <div className="flex items-center justify-center h-8 mx-4">
                  <img src={Figma_logo} alt="Figma Logo" className="h-4 md:h-6" />
                </div>
              </button>
            </Link>
          )}
        </div>
      </div>
      <h1 className='text-[#14213D] font-bold text-3xl md:text-6xl text-center pt-8 md:pt-16'>
        Project Description
      </h1>
      <div className="flex items-center justify-center">
        <p className="mt-4 md:text-lg text-black text-center italic font-normal md:w-1/2">
          {project.description}
        </p>
      </div>
      <h1 className='text-[#14213D] font-bold text-3xl md:text-6xl text-center pt-8 md:pt-16'>
        Built With
      </h1>
      <div className="flex justify-center gap-4 mt-4">
        {project.skills.map((skill) => (
          <div key={skill._id} className="flex flex-col items-center">
            <img
              className="w-20 h-20 md:w-48 md:h-48 object-cover shadow-xl rounded- 3xl"
              src={skill.image}
              alt={skill.title}
            />
            <p className="mt-2 text-black text-center">{skill.title}</p>
          </div>
        ))}
    </div>
  </div>
  );
};

export default ProjectDetailPage;
