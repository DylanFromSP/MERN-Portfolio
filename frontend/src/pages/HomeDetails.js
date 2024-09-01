import React from 'react';
import Github_logo from "../images/Github_logo.png"
import Linkedin_logo from "../images/Linkedin_logo.png"
import Portfolio_Pic from "../images/portfolio_pic.jfif"
import { Link } from 'react-router-dom';

const HomeDetails = () => {
  return (
    <div>
      <div className='flex flex-col lg:flex-row md:py-10 items-center justify-center md:space-x-32 space-y-6 md:space-y-0'>
        <div className="font-bold text-7xl md:text-9xl text-center md:text-right italic">
          <div>R Dylan <br /> Davindra</div>
        </div>
        <div className="w-3/4 lg:w-1/4 text-xl md:text-3xl text-center text-wrap">
          <div className="pb-6 md:py-6">Passionate web developer specializing in designing and building user-friendly websites using <b>ReactJS</b></div>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              className="w-full text-white bg-[#B7DBFF] font-medium rounded-lg md:py-2 shadow-2xl hover:shadow-blue-500 duration-500"
            >
              <Link to="https://www.linkedin.com/in/dylan-davindra-64a167259/">
                <img src={Linkedin_logo} alt="LinkedIn Logo" className="h-4 md:h-6 mx-auto" />
              </Link>
            </button>
            <button
              type="button"
              className="w-full text-white bg-[#D49EFF] font-medium rounded-lg md:py-2 shadow-2xl duration-500 hover:shadow-purple-500"
            >
              <Link to="https://github.com/DylanFromSP">
                <img src={Github_logo} alt="GitHub Logo" className="h-8 md:h-10 mx-auto" />
                <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#333]"></span>
              </Link>
            </button>
            <button
              type="button"
              className="w-full text-white font-bold bg-gray-800 rounded-lg text-base md:text-xl py-2.5 md:py-2 shadow-2xl duration-500 hover:shadow-gray-500"
            >
              <Link to="https://drive.google.com/file/d/10xthWJ3Zva__RSJWL70d-8stQi3EFrH2/view?usp=sharing">
                CV
              </Link>
            </button>
          </div>
        </div>
      </div>
        <div className='py-10'>
          <img src={Portfolio_Pic} alt="LinkedIn Logo" className="w-5/6 h-[240px] md:w-3/6 md:h-[480px] object-cover mx-auto rounded-xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]" />
        </div>
    </div>
  );
};

export default HomeDetails;
