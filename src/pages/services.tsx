import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/navbar"


const Service: React.FC = () => {
  return (
    <div className='bg-dark'>
        <Navbar />
      <h1 className='text-white'>Our Services</h1>
      <p className='text-white'>
        This is the Services page. You can add information about your services
        here.
      </p>
      <Outlet />
    </div>
  );
};

export default Service;