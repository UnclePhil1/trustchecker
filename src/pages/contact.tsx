import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/navbar"

const Contact: React.FC = () => {
  return (
    <div className='bg-dark'>
        <Navbar />
      <h1 className='text-white'>Contact Us</h1>
      <p className='text-white'>
        This is the Contact page. You can add a contact form or other contact
        information here.
      </p>
      <Outlet />
    </div>
  );
};

export default Contact;