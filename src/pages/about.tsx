import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/navbar"
import arrowUp from "../assets/images/solar_arrow-up-bold.svg";
import aboutBg from "../assets/images/about-us-bg.svg";
const About: React.FC = () => {
  return (
    <div className='bg-[#282828] text-[#EAEAEA] px-12  h-[100vh]'>
      <Navbar />


      <div className="about-us bg-gradient-to-b from-[#282828] 50% via-green-950 1% to-[#282828] 49% flex items-center h-[85%]  " >
        <article className="flex flex-col gap-5" >
          <h1 className="text-[50px]" >
            Developed by the community for the community
          </h1>
          <p className="text-[20px]" >
            Building a community based and community-driven products that allows projects to be vetted by the community
          </p>
          <button type="button" className="bg-[#5DEA7996] flex items-center justify-center px-[12px] py-[5px] gap-2 text-[20px] rounded-[10px] max-w-[290px]  " >
            <a href="">
              Join our Community
            </a> <img src={arrowUp} alt="join our Community" />
          </button>
        </article>

        <div>
          <img src={aboutBg} alt="" />
        </div>

      </div>
      <Outlet />
    </div>
  );
};

export default About;