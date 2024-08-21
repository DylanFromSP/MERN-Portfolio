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
            hasShadow ? 'shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]' : ''
      }`}
    >
      <div className="mx-auto flex justify-center space-x-[26px] py-2">
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-100}
          className="nav-link cursor-pointer text-lg font-medium text-gray-800 hover:text-[#a700d1] font-bold"
        >
          Home
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          offset={-90}
          className="nav-link cursor-pointer text-lg font-medium text-gray-800 hover:text-[#a700d1] font-bold"
        >
          Skills
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-90}
          className="nav-link cursor-pointer text-lg font-medium text-gray-800 hover:text-[#a700d1] font-bold"
        >
          Projects
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
