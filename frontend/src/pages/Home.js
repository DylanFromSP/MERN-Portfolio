import React from 'react';
import HomeDetails from './HomeDetails';
import SkillDetails from './SkillDetails';
import ProjectDetails from './ProjectDetails';

const Home = () => {
  return (
    <div>
      <section id="home">
        <HomeDetails />
      </section>
      <section id="skills">
        <SkillDetails />
      </section>
      <section id="projects" className='py-20'>
        <ProjectDetails />
      </section>
    </div>
  );
};

export default Home;
