import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/navbar"


const About: React.FC = () => {
  return (
    <div className='bg-dark'>
        <Navbar />
      <h1 className='text-white'>About Us</h1>
      <p className='text-white'>
        This is the About page. You can add more information about your project
        here.
      </p>
      <Outlet />
    </div>
  );
};

export default About;