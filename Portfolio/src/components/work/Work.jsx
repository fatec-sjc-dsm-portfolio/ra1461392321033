import React from "react";
import WorkCard from "../../chip/WorkCard";

const Work = () => {
  return (
    <div id="works" className="container m-auto mt-16 px-4 sm:px-5">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="text-3xl font-black text-black sm:text-2xl">Works</h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-black block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className="text-black font-medium w-[100%]">
          Here are some of my works.
        </p>
      </div>
      {/* card */}
      <div className="card-wrapper w-full mt-6 flex flex-wrap justify-center gap-6 sm:gap-5">
        <WorkCard />
      </div>
    </div>
  );
};

export default Work;