import React, { useState } from 'react';

const InputHome = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");

    const convertToBase64 = (e) => {
        console.log(e);
        const reader = new FileReader();
        
        reader.readAsDataURL(e.target.files[0]);
        
        reader.onload = () => {
            console.log(reader.result);
            setImage(reader.result);
        };
        
        reader.onerror = (error) => {
            console.log("Error: ", error);
        };
    };

    const uploadSkill = async (e) => {
        e.preventDefault(); // Prevent form from reloading the page
        try {
            const response = await fetch("/api/skills/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                    title: title,
                    base64: image,
                }),
            });

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error uploading skill:", error);
        }
    };

    return (
        <div className='skills-bg w-full h-screen p-4 md:p-8'>
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
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                        required
                    />
                </div>
                <div>
                    <label htmlFor='image' className='block mb-2 text-sm font-medium text-white'>
                        Skill Image
                    </label>
                    <input
                        id='image'
                        accept='image/*'
                        type='file'
                        onChange={convertToBase64}
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                        required
                    />
                    {image && (
                        <img
                            width={100}
                            height={100}
                            src={image}
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
    );
}

export default InputHome;
