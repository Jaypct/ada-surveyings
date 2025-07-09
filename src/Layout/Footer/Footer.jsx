import React from "react";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black w-screen min-h-40">
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-white mt-10">© 2025 ADA Surveying Services.</h1>
        <div className="flex gap-5">
          <FaFacebookF className="bg-white dark:text-black rounded-full w-10 h-10 p-1 cursor-pointer hover:bg-[#ffde01] duration-300" />
          <FaTwitter className="bg-white dark:text-black rounded-full w-10 h-10 p-1 cursor-pointe hover:bg-[#ffde01] duration-300r" />
          <FaLinkedinIn className="bg-white dark:text-black rounded-full w-10 h-10 p-1 cursor-pointer hover:bg-[#ffde01] duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
