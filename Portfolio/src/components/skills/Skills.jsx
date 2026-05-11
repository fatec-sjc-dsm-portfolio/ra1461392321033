import React from "react";
import SkillBox from "../../chip/SkillBox";

import {
  SiMongodb,
  SiGooglecloud,
  SiFirebase,
  SiFlutter,
  SiKotlin,
  SiLinux,
  SiRedis,
  SiRedhat,
  SiMicrosoftazure,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-black sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-black block"></span>
        </div>
        {/* content — all skill cards centered together */}
        <div className="w-full flex flex-col">
          <p
            data-aos="fade-up"
            className="text-black font-medium w-[100%] mb-2"
          >
            Here are my skills.
          </p>
          <div
            data-aos="zoom-in"
            className="flex flex-wrap gap-10 items-center justify-center max-w-6xl mx-auto my-5 py-2 px-2"
          >
            <SkillBox
              logo={<SiKotlin />}
              black={"white"}
              white={"black"}
              skill={"Kotlin"}
            />
            <SkillBox
              logo={<SiMongodb />}
              black={"black"}
              white={"white"}
              skill={"MongoDB"}
            />
            <SkillBox
              logo={<SiLinux />}
              black={"white"}
              white={"black"}
              skill={"Linux"}
            />
            <SkillBox
              logo={<SiFlutter />}
              black={"black"}
              white={"white"}
              skill={"Flutter"}
            />
            <SkillBox
              logo={<SiRedis />}
              black={"white"}
              white={"black"}
              skill={"Redis"}
            />
            <SkillBox
              logo={<SiFirebase />}
              black={"black"}
              white={"white"}
              skill={"Firebase"}
            />
            <SkillBox
              logo={<SiMicrosoftazure />}
              black={"white"}
              white={"black"}
              skill={"Azure"}
            />
            <SkillBox
              logo={<SiRedhat />}
              black={"black"}
              white={"white"}
              skill={"Red Hat OKD"}
            />
            <SkillBox
              logo={<SiGooglecloud />}
              black={"white"}
              white={"black"}
              skill={"Google Cloud"}
            />
            <SkillBox
              logo={<FaAws />}
              black={"black"}
              white={"white"}
              skill={"AWS"}
            />
          </div>
        </div>

        {/* icons */}
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className=" container m-auto flex items-center justify-center mt-8 gap-8 md:gap-5 right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full"
        >
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png"
          />

          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/python--v1.png"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/officel/40/react.png"
          />

          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/typescript.png"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/git.png"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/mysql-logo.png"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/external-those-icons-flat-those-icons/48/external-Docker-Logo-social-media-those-icons-flat-those-icons.png"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/javascript--v1.png"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/nodejs.png"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/html-5--v1.png"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/css3.png"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/?size=48&id=JRnxU7ZWP4mi&format=png&color=000000"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jetpackcompose/jetpackcompose-original.svg"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xml/xml-original.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
