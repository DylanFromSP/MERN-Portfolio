import React, { useState, useEffect } from 'react';
import Portfolio_Pic from "../images/portfolio_pic.jfif";
import { Link } from 'react-router-dom';

const ProjectDetails = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await fetch("/api/projects/");
        const json = await response.json();
        if (response.ok) {
          setProjects(json);
        } else {
          console.error('Failed to fetch images:', json);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    getProjects();
  }, []);

  return (
    <div>
      <h1 className='text-[#14213D] font-bold text-3xl md:text-6xl text-center p-6 md:p-8'>
        Projects
      </h1>
      <div className='flex flex-wrap gap-3 justify-center px-10 mb-6'>
        {projects.length > 0 ? (
          projects.map((project, index) => {
            const projectImage = projects.find(image => image.projectId === project.id)?.image || Portfolio_Pic;

            return (
              <Link
                to={`/projects/${project.id}`}
                key={index}
                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  className="object-cover w-full rounded-t-lg h-64 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  src={projectImage} 
                  alt={project.title || 'Project Image'}
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {project.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {project.description?.split(' ').slice(0, 20).join(' ') + (project.description?.split(' ').length > 20 ? '...' : '')}
                  </p>
                </div>
              </Link>
            );
          })
        ) : (
          <p className="text-center text-gray-700 dark:text-gray-400">No projects available</p>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;



// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const ProjectDetails = () => {
//   const [projects, setProjects] = useState([]);
//   const [title, setTitle] = useState("");
//   const [coverImage, setCoverImage] = useState("");
//   const [videoUrl, setVideoUrl] = useState("");
//   const [githubUrl, setGithubUrl] = useState("");
//   const [websiteUrl, setWebsiteUrl] = useState("");
//   const [figmaUrl, setFigmaUrl] = useState("");
//   const [description, setDescription] = useState("");
//   const [allImage, setAllImage] = useState([]);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       const response = await fetch("/api/projects");
//       const json = await response.json();

//       if (response.ok) {
//         setProjects(json);
//         console.log(json);
//       } else {
//         console.error('Failed to fetch projects:', json);
//       }
//     };

//     fetchProjects();
//   }, []);

//   const convertToBase64 = (e) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(e.target.files[0]);
//     reader.onload = () => {
//       setCoverImage(reader.result);
//     };
//     reader.onerror = (error) => {
//       console.log("Error: ", error);
//     };
//   };

//   const createProject = async () => {
//     try {
//       const response = await fetch("/api/projects", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify({
//           title,
//           cover_image: coverImage,
//           video_url: videoUrl,
//           github_url: githubUrl,
//           website_url: websiteUrl,
//           figma_url: figmaUrl,
//           description,
//         }),
//       });
  
//       const data = await response.json();
//       if (response.ok) {
//         setProjects(prevProjects => [data, ...prevProjects]); // Add new project to list
//         setTitle("");
//         setCoverImage("");
//         setVideoUrl("");
//         setGithubUrl("");
//         setWebsiteUrl("");
//         setFigmaUrl("");
//         setDescription("");
//       } else {
//         console.error('Failed to create project:', data);
//       }
//     } catch (error) {
//       console.error("Error creating project:", error);
//     }
//   };

//   useEffect(() => {
//     const getImages = async () => {
//       try {
//         const response = await fetch("/api/projects/");
//         const json = await response.json();
//         if (response.ok) {
//           setAllImage(json);
//         } else {
//           console.error('Failed to fetch images:', json);
//         }
//       } catch (error) {
//         console.error('Error fetching images:', error);
//       }
//     };

//     getImages();
//   }, []);

//   return (
//     <div>
//       <h1 className='text-[#14213D] font-bold text-3xl md:text-6xl text-center p-4 md:p-8 pt-10 md:pt-12'>
//         Projects
//       </h1>

//       <div className='bg-white p-4 md:p-8 mb-6 rounded-lg shadow-lg'>
//         <h2 className='text-2xl font-semibold mb-4'>Add New Project</h2>
//         <input
//           type='text'
//           placeholder='Enter project title'
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className='block w-full mb-2 p-2 border rounded'
//         />
//         <input
//           accept='image/*'
//           type='file'
//           onChange={convertToBase64}
//           className='block w-full mb-2 p-2 border rounded'
//         />
//         {coverImage && (
//           <img
//             width={100}
//             height={100}
//             src={coverImage}
//             alt="Selected"
//             className='mb-4'
//           />
//         )}
//         <input
//           type='text'
//           placeholder='Enter video URL'
//           value={videoUrl}
//           onChange={(e) => setVideoUrl(e.target.value)}
//           className='block w-full mb-2 p-2 border rounded'
//         />
//         <input
//           type='text'
//           placeholder='Enter GitHub URL'
//           value={githubUrl}
//           onChange={(e) => setGithubUrl(e.target.value)}
//           className='block w-full mb-2 p-2 border rounded'
//         />
//         <input
//           type='text'
//           placeholder='Enter website URL'
//           value={websiteUrl}
//           onChange={(e) => setWebsiteUrl(e.target.value)}
//           className='block w-full mb-2 p-2 border rounded'
//         />
//         <input
//           type='text'
//           placeholder='Enter Figma URL'
//           value={figmaUrl}
//           onChange={(e) => setFigmaUrl(e.target.value)}
//           className='block w-full mb-2 p-2 border rounded'
//         />
//         <textarea
//           placeholder='Enter project description'
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className='block w-full mb-2 p-2 border rounded'
//         />
//         <button onClick={createProject} className='bg-blue-500 text-white px-4 py-2 rounded'>
//           Create Project
//         </button>
//       </div>

//       <div className='flex flex-wrap gap-3 justify-center px-10 mb-6'>
//         {projects.length > 0 ? (
//           projects.map((project) => {
//             const projectImage = allImage.find(image => image.projectId === project._id)?.cover_image ;

//             return (
//               <Link
//                 to={`/projects/${project._id}`}
//                 key={project._id}
//                 className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
//               >
//                 <img
//                   className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
//                   src={projectImage} 
//                   alt={project.title || 'Project Image'}
//                 />
//                 <div className="flex flex-col justify-between p-4 leading-normal">
//                   <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                     {project.title}
//                   </h5>
//                   <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                     {project.description?.split(' ').slice(0, 20).join(' ') + (project.description?.split(' ').length > 20 ? '...' : '')}
//                   </p>
//                 </div>
//               </Link>
//             );
//           })
//         ) : (
//           <p className="text-center text-gray-700 dark:text-gray-400">No projects available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;