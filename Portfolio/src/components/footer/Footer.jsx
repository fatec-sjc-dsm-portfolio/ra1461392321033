import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div id="works" className=" mx-auto m-auto h-[300px]  mt-16 sm:h-[250px]">
      <div className=" bg-black h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        <h2 
        data-aos="zoom-out"
         className=" font-bold text-5xl sm:text-3xl text-white">Let's Talk</h2>
        <div className=" flex items-center justify-center gap-8 sm:gap-5">
          <a 
          data-aos="fade-up" data-aos-duration="1000"
            href="https://www.linkedin.com/in/filipe-colla/"
            className="box font-medium text-white flex items-center justify-center flex-col"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className=" text-white text-3xl hover:scale-125 cursor-pointer" />
            <p>Linkedin</p>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1200"
            href="https://wa.me/12997601410"
            className="box font-medium text-white flex items-center justify-center flex-col"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <IoLogoWhatsapp className=" text-white text-3xl hover:scale-125 cursor-pointer" />
            <p>WhatsApp</p>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1400"
            href="https://www.instagram.com/fi.colla/"
            className="box font-medium text-white flex items-center justify-center flex-col"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <RiInstagramFill className=" text-white text-3xl hover:scale-125 cursor-pointer" />
            <p>Instagram</p>
          </a>
        </div>
        <div className="sm:text-[12px] text-white">
          | Copyright &copy; <span>2024 Dev Filipe Colla </span> All rights reserved
          <a href="#"></a> |
        </div>
      </div>
    </div>
  );
};

export default Footer;
