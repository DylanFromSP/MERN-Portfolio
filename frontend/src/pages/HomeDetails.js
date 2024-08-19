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
          <div className="pb-6 md:py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              className="w-full text-white bg-[#B7DBFF] font-medium rounded-lg md:py-2 hover:drop-shadow-lg duration-300 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
            >
              <Link to="https://www.linkedin.com/in/dylan-davindra-64a167259/">
                <img src={Linkedin_logo} alt="LinkedIn Logo" className="h-4 md:h-6 mx-auto" />
              </Link>
            </button>
            <button
              type="button"
              className="w-full text-white bg-[#D49EFF] font-medium rounded-lg md:py-2 hover:drop-shadow-lg duration-300 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
            >
              <Link to="https://github.com/DylanFromSP">
                <img src={Github_logo} alt="GitHub Logo" className="h-8 md:h-10 mx-auto" />
                <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#333]"></span>
              </Link>
            </button>
            <button
              type="button"
              className="w-full text-black font-bold bg-[#FF9E9E] rounded-lg text-base md:text-xl py-2.5 md:py-2 hover:drop-shadow-lg duration-300 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
            >
              <Link to="">
                Resume
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
