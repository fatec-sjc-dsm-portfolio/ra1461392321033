import React, { useMemo, useState } from "react";
import WorkCard from "../../chip/WorkCard";
import { data } from "../../data/data";

const TABS = [
  { id: "professional", label: "Professional" },
  { id: "academic", label: "Academic" },
  { id: "personal", label: "Personal" },
];

function sortProjectsForCategory(list) {
  return [...list].sort((a, b) => {
    const pa = Boolean(a.placeholder);
    const pb = Boolean(b.placeholder);
    if (pa !== pb) return pa ? 1 : -1;
    if (pa) return a.id - b.id;
    return b.id - a.id;
  });
}

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("professional");

  const filteredProjects = useMemo(() => {
    const list = data.filter((item) =>
      (item.categories || []).includes(activeCategory)
    );
    return sortProjectsForCategory(list);
  }, [activeCategory]);

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
        <div
          className="flex flex-wrap items-center gap-2 mt-3"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {TABS.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(tab.id)}
                className={`text-[11px] sm:text-xs px-2.5 py-1 rounded-md font-semibold uppercase tracking-wide border transition-colors ${
                  isActive
                    ? "bg-purple-700 border-purple-700 text-white"
                    : "bg-transparent border-gray-400 text-gray-800 hover:border-purple-600 hover:text-purple-700"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
      {/* card */}
      <div className="card-wrapper w-full mt-6 flex flex-wrap justify-center gap-6 sm:gap-5">
        <WorkCard
          projects={filteredProjects}
          showGithubLink={activeCategory !== "professional"}
        />
      </div>
    </div>
  );
};

export default Work;
