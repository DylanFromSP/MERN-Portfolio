import React, { useEffect, useState } from 'react';

const SkillDetails = () => {
  const [skills, setSkills] = useState(null);
  const [image, setImage] = useState("");
  const [allImage, setAllImage] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const response = await fetch("/api/skills");
      const json = await response.json();

      if (response.ok) {
        setSkills(json);
      } else {
        console.error('Failed to fetch skills:', json);
      }
    };

    fetchSkills();
  }, []);

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

  const uploadImage = async () => {
    try {
      const response = await fetch("/api/skills/uploadImage", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          base64: image,
        }),
      });
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await fetch("/api/skills/");
        const json = await response.json();
        if (response.ok) {
          setAllImage(json);
        } else {
          console.error('Failed to fetch images:', json);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    getImages();
  }, []);
 

  return (
    <div>
      <div className='bg-[#14213D] p-4 md:p-8'>
        <h1 className='text-white font-bold text-3xl md:text-6xl text-center mb-6'>
          Skills
        </h1>
        <div className='max-w-6xl mx-auto'>
          <div className='flex flex-wrap gap-3 justify-center'>
            {allImage?.map(data => (
              <img
                key={data._id}
                className='w-20 h-20 md:w-48 md:h-48 object-cover'
                src={data.image}
                alt="Skill"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;

{/* {skills && skills.map((skill) => (
          <p key={skill._id}>{skill.title}</p>
        ))}
        <input
          accept='image/*'
          type='file'
          onChange={convertToBase64}
        />
        { image === "" || image === null ? "" : 
          <img width={100} height={100} src={`data:image/jpeg;base64,${image}`} alt="Selected" /> 
        }
        <button onClick={uploadImage}>Upload</button> */}