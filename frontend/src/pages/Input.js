import React, { useState } from 'react';

const InputHome = () => {
    const [skillTitle, setSkillTitle] = useState("");
    const [skillImage, setSkillImage] = useState("");
    const [projectTitle, setProjectTitle] = useState("");
    const [projectImage, setProjectImage] = useState("");
    const [projectVideoUrl, setProjectVideoUrl] = useState("");
    const [projectGithubUrl, setProjectGithubUrl] = useState("");
    const [projectWebsiteUrl, setProjectWebsiteUrl] = useState("");
    const [projectFigmaUrl, setProjectFigmaUrl] = useState("");
    const [projectDescription, setProjectDescription] = useState("");

    const convertToBase64 = (e, setImageCallback) => {
        console.log(e);
        const reader = new FileReader();

        reader.readAsDataURL(e.target.files[0]);

        reader.onload = () => {
            console.log(reader.result);
            setImageCallback(reader.result);
        };

        reader.onerror = (error) => {
            console.log("Error: ", error);
        };
    };

    const uploadSkill = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/skills/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                    title: skillTitle,
                    base64: skillImage,
                }),
            });

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error uploading skill:", error);
        }
    };

    const uploadProject = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/projects/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                    title: projectTitle,
                    base64: projectImage,
                    video_url: projectVideoUrl,
                    github_url: projectGithubUrl,
                    website_url: projectWebsiteUrl,
                    figma_url: projectFigmaUrl,
                    description: projectDescription
                }),
            });

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error uploading project:", error);
        }
    };

    return (
        <div className='w-full h-screen p-4 md:p-8'>
            <div className='skills-bg p-4 rounded-lg mb-4'>
                <h1 className='text-white font-bold text-3xl md:text-6xl text-center my-6'>
                    Upload Skill
                </h1>
                <form onSubmit={uploadSkill} className='space-y-6'>
                    <div>
                        <label htmlFor='title' className='block mb-2 text-sm font-medium text-white'>
                            Skill Title
                        </label>
                        <input
                            id='title'
                            type='text'
                            placeholder='Enter skill title'
                            value={skillTitle}
                            onChange={(e) => setSkillTitle(e.target.value)}
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='skillImage' className='block mb-2 text-sm font-medium text-white'>
                            Skill Image
                        </label>
                        <input
                            id='skillImage'
                            accept='image/*'
                            type='file'
                            onChange={(e) => convertToBase64(e, setSkillImage)}
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                            required
                        />
                        {skillImage && (
                            <img
                                width={100}
                                height={100}
                                src={skillImage}
                                alt="Selected"
                                className='mt-4'
                            />
                        )}
                    </div>
                    <button
                        type='submit'
                        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
                    >
                        Upload Skill
                    </button>
                </form>
            </div>

            <div className='skills-bg p-4 rounded-lg'>
                <h1 className='text-white font-bold text-3xl md:text-6xl text-center my-6'>
                    Upload Project
                </h1>
                <form onSubmit={uploadProject} className='space-y-6'>
                    <div>
                        <label htmlFor='projectTitle' className='block mb-2 text-sm font-medium text-white'>
                            Project Title
                        </label>
                        <input
                            id='projectTitle'
                            type='text'
                            placeholder='Enter project title'
                            value={projectTitle}
                            onChange={(e) => setProjectTitle(e.target.value)}
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='projectImage' className='block mb-2 text-sm font-medium text-white'>
                            Project Image
                        </label>
                        <input
                            id='projectImage'
                            accept='image/*'
                            type='file'
                            onChange={(e) => convertToBase64(e, setProjectImage)}
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                            required
                        />
                        {projectImage && (
                            <img
                                width={100}
                                height={100}
                                src={projectImage}
                                alt="Selected"
                                className='mt-4'
                            />
                        )}
                    </div>
                    <div>
                        <label htmlFor='projectVideoUrl' className='block mb-2 text-sm font-medium text-white'>
                            Video URL
                        </label>
                        <input
                            id='projectVideoUrl'
                            type='text'
                            placeholder='Enter video URL'
                            value={projectVideoUrl}
                            onChange={(e) => setProjectVideoUrl(e.target.value)}
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                        />
                    </div>
                    <div>
                        <label htmlFor='projectGithubUrl' className='block mb-2 text-sm font-medium text-white'>
                            GitHub URL
                        </label>
                        <input
                            id='projectGithubUrl'
                            type='text'
                            placeholder='Enter GitHub URL'
                            value={projectGithubUrl}
                            onChange={(e) => setProjectGithubUrl(e.target.value)}
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                        />
                    </div>
                    <div>
                        <label htmlFor='projectWebsiteUrl' className='block mb-2 text-sm font-medium text-white'>
                            Website URL
                        </label>
                        <input
                            id='projectWebsiteUrl'
                            type='text'
                            placeholder='Enter website URL'
                            value={projectWebsiteUrl}
                            onChange={(e) => setProjectWebsiteUrl(e.target.value)}
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                        />
                    </div>
                    <div>
                        <label htmlFor='projectFigmaUrl' className='block mb-2 text-sm font-medium text-white'>
                            Figma URL
                        </label>
                        <input
                            id='projectFigmaUrl'
                            type='text'
                            placeholder='Enter Figma URL'
                            value={projectFigmaUrl}
                            onChange={(e) => setProjectFigmaUrl(e.target.value)}
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                        />
                    </div>
                    <div>
                        <label htmlFor='projectDescription' className='block mb-2 text-sm font-medium text-white'>
                            Project Description
                        </label>
                        <textarea
                            id='projectDescription'
                            placeholder='Enter project description'
                            value={projectDescription}
                            onChange={(e) => setProjectDescription(e.target.value)}
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                        />
                    </div>
                    <button
                        type='submit'
                        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
                    >
                        Upload Project
                    </button>
                </form>
            </div>
        </div>
    );
};

export default InputHome;
