import React from 'react';
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';

const Navbar = () => {

    const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`w-full py-6 sticky top-0 z-10 duration-300
        ${
            hasShadow ? 'shadow-md' : ''
      }`}
    >
      <div className="mx-auto flex justify-center space-x-[26px] py-2">
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-100}
          className="nav-link cursor-pointer text-lg font-medium text-gray-800 hover:text-blue-500 font-bold"
        >
          Home
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          offset={-40}
          className="nav-link cursor-pointer text-lg font-medium text-gray-800 hover:text-blue-500 font-bold"
        >
          Skills
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-40}
          className="nav-link cursor-pointer text-lg font-medium text-gray-800 hover:text-blue-500 font-bold"
        >
          Projects
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
