import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import "./style.css";
const Header = () => {
  return (
    <div className="navbar h-20 bg-black fixed top-0 z-50">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">My Portfolio</a>
      </div>
      <div className="flex-none gap-4 hidden md:flex md:pr-4">
        <Link
          className="nav-link"
          activeClass="active"
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
          to="blog"
          spy={true}
          smooth={true}
          duration={700}
        >
          Blog
        </Link>
      </div>
      <button className="btn btn-square btn-ghost  md:hidden">
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
      {/* <div className="flex-none gap-5">
        <NavLink
          to={"/"}
          className='nav-link'
        >
          Ana Sayfa
        </NavLink>
        <NavLink
          to={"/hakkimda"}
          className='nav-link'
        >
          Hakkımda
        </NavLink>
        <NavLink
          to={"/iletisim"}
          className='nav-link'
        >
          İletişim
        </NavLink>
        <button className="btn btn-square btn-ghost  lg:hidden">
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
      </div> */}
    </div>
  );
};

export default Header;
