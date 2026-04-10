import React from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/PortfolioFilipeCollaIngles.pdf";
import { RiWhatsappFill } from "react-icons/ri";
import '../../index.css'


const Hero = () => {
  return (
    <div id="home" className={` bg-gradient-to-r from-black to-purple-900 `}>
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-5xl font-bold sm:text-[2rem] text-white"
            >
              Hello, I'm Filipe Colla
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Software Developer",
                2000,
                "Back-end Developer",
                2000,
                "",
              ]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-white text-4xl font-bold sm:text-3xl"
            />
            <p
              // data-aos="fade-up"
              className=" text-[1.1rem] font-medium w-3/4 md:w-full text-white sm:text-[.95rem]"
            >
              Software Developer, specialized in backend.
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <a
              href="https://www.linkedin.com/in/filipe-colla/"
              className=" bg-white text-[1rem] text-black px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-purple-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span> Hire Me</span>
            </a>
            <a
              href={resumePDF}
              className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-purple-800"
              download
            >
              <div className="flex items-center gap-1">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <li>
                <a href="https://github.com/collafilipe" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <AiFillGithub className="text-white h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/filipe-colla/" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <FaLinkedinIn className="text-white h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/fi.colla/" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <AiFillInstagram className="text-white h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
              <li>
                <a href="https://wa.me/5512997601410?text=Hello,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch!" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <RiWhatsappFill className="text-white h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
              <li>
                <a href="https://twitter.com/CollaFilipe" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <AiFillTwitterCircle className="text-white h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[88%] w-fit flex items-center sm:items-end">
            <div className="circle-container">
              <img
                data-aos="fade-up"
                className="h-[90%] w-full object-cover md:h-[95%] md:m-auto sm:m-0"
                src='https://i.postimg.cc/0jBx0H2S/image.jpg'
                alt="mine"
              />
            </div>
          </div>
        </div>
            <div className="absolute bottom-0 flex items-center justify-center w-full">
            </div>
          </div>
        </div>
  );
};

export default Hero;
