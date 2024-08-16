import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <header className="w-full py-6">
      <div className="mx-auto flex justify-center space-x-[26px] py-2">
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-70}
          className="nav-link cursor-pointer text-lg font-medium text-gray-800 hover:text-blue-500 font-bold"
        >
          Home
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          offset={-70}
          className="nav-link cursor-pointer text-lg font-medium text-gray-800 hover:text-blue-500 font-bold"
        >
          Skills
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-70}
          className="nav-link cursor-pointer text-lg font-medium text-gray-800 hover:text-blue-500 font-bold"
        >
          Projects
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
