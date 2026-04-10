import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const navItems = [
  {
    id: 0,
    name: "home",
  },
  {
    id: 1,
    name: "skills",
  },
  {
    id: 2,
    name: "works",
  },
  {
    id: 3,
    name: "resume",
  },
  {
    id: 4,
    name: "contact",
  },
];

const NavBar = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the navbar
  const toggleNav = (name) => {
    setIsOpen(!isOpen);
    setActiveIndex(name === activeIndex ? null : name);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full mx-auto  fixed top-0 py-5 sm:py-4 z-30 ${
        scrollPosition > 0 || isOpen ? `bg-black shadow-md` : "bg-transparent"
      } `}
    >
      <nav className=" container m-auto flex items-center justify-between relative">
        <div data-aos="fade-down" className="logo">
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/"
            className="text-white text-3xl font-bold sm:text-3xl"
          >
            Filipe Colla
          </Link>
        </div>
        <div className="nav-items flex items-center gap-6">
          {/* hamburger */}
          <button
            onClick={toggleNav}
            className="text-white cursor-pointer text-2xl hidden md:block"
          >
            <HiMenu size={25} />
          </button>

          {isOpen && (
            <div
              className="fixed inset-0 bg-transparent z-30"
              onClick={() => setIsOpen(false)}
            ></div>
          )}

          <ul
            className={`flex items-center gap-6 ${
              !isOpen ? "md:flex" : "md:right-[0%] gap-0"
            } md:flex-col md:fixed md:top-0 md:right-[-100%] md:w-[65%] md:h-screen md:bg-black md:z-40 md:items-center md:text-center md:pt-8 `}
          >
            {/* Use a button tag for better accessibility */}
            <button
              onClick={toggleNav}
              className={`text-3xl hidden md:block relative right-0 top-4 container mx-auto`}
            >
              <RxCross2 size={25} />
            </button>
            {navItems.map((item) => (
              <li
                key={item.id}
                className="md:m-6 md:flex md:gap-6 md:items-center md:justify-center"
              >
                <a
                  onClick={() => toggleNav(item.name)}
                  href={`#${item.name}`}
                  className={`uppercase cursor-pointer text-white hover:text-purple-600 font-bold ${
                    item.name === activeIndex ? "text-purple-600" : ""
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <a
              href="https://www.linkedin.com/in/filipe-colla/"
              className="bg-white text-[1rem] text-black px-8 py-2 rounded-lg font-bold hover:text-purple-800 md:m-5 md:block md:mx-auto md:w-fit lg:px-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              HIRE ME
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
