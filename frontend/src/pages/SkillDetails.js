import React, { useEffect, useState } from 'react';

const SkillDetails = () => {
  const [skills, setSkills] = useState([]);


  useEffect(() => {
    const getSkills = async () => {
      try {
        const response = await fetch("https://mern-portfolio-sjao.onrender.com/api/skills/");
        const json = await response.json();
        if (response.ok) {
          setSkills(json);
        } else {
          console.error('Failed to fetch images:', json);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    getSkills();
  }, []);
 

  return (
    <div>
      <div className='skills-bg p-4 md:p-8'>
        <h1 className='text-white font-bold text-3xl md:text-6xl text-center mb-6'>
          Skills
        </h1>
        <div className='max-w-6xl mx-auto'>
          <div className='flex flex-wrap gap-3 justify-center'>
            {skills?.map(data => (
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