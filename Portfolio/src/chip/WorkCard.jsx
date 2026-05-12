import React from "react";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const WorkCard = ({ projects, showGithubLink = true }) => {
  if (!projects?.length) {
    return (
      <p className="text-gray-600 text-center w-full py-8 text-sm">
        No projects in this category yet.
      </p>
    );
  }

  return (
    <>
      {projects.map((item) => {
        const isPlaceholder = Boolean(item.placeholder);
        return (
          <div
            data-aos="zoom-in"
            key={item.id}
            className="flex flex-col items-center gap-4 w-full sm:w-[320px] md:w-[330px] lg:w-[340px] max-w-[340px]"
          >
            <POPUP
              className={`img-content relative ${isPlaceholder ? "placeholder-card" : ""}`}
            >
              <div
                className={`h-[260px] w-full shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-full sm:bg-cover mx-auto ${
                  isPlaceholder
                    ? ""
                    : "hover:scale-125 transition duration-500 cursor-pointer"
                }`}
              >
                {item.img ? (
                  <img
                    src={item.img}
                    alt={item.title || "Project"}
                    className={`object-cover w-full h-full ${
                      isPlaceholder
                        ? ""
                        : "hover:scale-125 transition duration-500 cursor-pointer"
                    }`}
                  />
                ) : (
                  <div
                    className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300"
                    aria-hidden
                  />
                )}
              </div>

              {!isPlaceholder && (
                <div
                  className={` popup w-full h-[260px] shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-full p-4`}
                >
                  <p className="text-gray-900 text-base leading-[1.4] text-justify w-full px-2">
                    {item.desc}
                  </p>
                  {item.git && showGithubLink && (
                    <div className="flex items-center justify-center mt-3">
                      <Link
                        to={item.git}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md shadow-md p-1 px-3 flex gap-2 items-center justify-center font-medium"
                      >
                        <AiOutlineGithub className="text-black bg-white rounded-full border w-[35px] h-[35px] p-2" />
                        <p className="text-black">Code</p>
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </POPUP>
            <p className="text-gray-800 text-xl font-medium sm:text-lg text-center min-h-[32px]">
              {item.title || "\u00A0"}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default WorkCard;

const POPUP = styled.div`
  position: relative;
  img {
    &:hover {
      transform: scaleX(2);
    }
  }
  .popup {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    margin: auto;
    transition: 0.5s ease;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .icon {
    color: #fff !important;
  }
  &:not(.placeholder-card):hover .popup {
    opacity: 1;
    color: #fff;
  }
`;
