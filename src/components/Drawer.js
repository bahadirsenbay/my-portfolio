import React, { useState } from "react";
import { Link } from "react-scroll";

const Drawer = ({ open, setOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-end z-50">
      <button
        className="drawer-button btn btn-square btn-ghost md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-5 h-5 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          />
        </svg>
      </button>
      <div
        className={`bg-gray-500 fixed top-0 right-0 w-2/3 h-full ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300`}
      >
        <div className="flex flex-col items-end justify-center h-20 px-2">
          <button
            className="drawer-button btn btn-square btn-ghost md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-3 px-3">
          <Link
            className="nav-link"
            activeClass="active"
            onClick={() => setIsOpen(!isOpen)}
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
          >
            Ana Sayfa
          </Link>
          <Link
            className="nav-link"
            activeClass="active"
            to="whatwedo"
            spy={true}
            smooth={true}
            duration={700}
          >
            What we do
          </Link>
          <Link
            className="nav-link"
            activeClass="active"
            onClick={() => setIsOpen(!isOpen)}
            to="portfolio"
            spy={true}
            smooth={true}
            duration={700}
          >
            Portfolio
          </Link>
          <Link
            className="nav-link"
            activeClass="active"
            onClick={() => setIsOpen(!isOpen)}
            to="about"
            spy={true}
            smooth={true}
            duration={700}
          >
            Hakkımda
          </Link>
          <Link
            className="nav-link"
            activeClass="active"
            onClick={() => setIsOpen(!isOpen)}
            to="blog"
            spy={true}
            smooth={true}
            duration={700}
          >
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
