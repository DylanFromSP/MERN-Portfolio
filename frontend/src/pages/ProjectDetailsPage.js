import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetailPage = () => {
  const { id } = useParams(); 
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`/api/projects/${id}`);
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

    const getYouTubeEmbedURL = (url) => {
      const videoId = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    };


  return (
    <div className="p-4">
      <h1 className="text-[#14213D] font-bold text-3xl md:text-6xl text-center p-6 md:p-8">
        {project.title}
      </h1>
      {project.video_url && (
        <iframe
          className="w-full aspect-video"
          src={getYouTubeEmbedURL(project.video_url)}
          title={project.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
      <img
        className="rounded-lg w-full h-64 object-cover md:h-96"
        src={project.image}
        alt={project.title}
      />
      <h1 className='text-[#14213D] font-bold text-3xl md:text-6xl text-center pt-8 md:pt-10'>
        Project Description
      </h1>
      <p className="mt-4 text-black text-center italic font-normal">
        {project.description}
      </p>
    </div>
  );
};

export default ProjectDetailPage;
