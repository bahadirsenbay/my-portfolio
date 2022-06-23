import React from "react";
import { Link } from "react-scroll";

const Drawer = ({ children }) => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {children}
        <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay" />
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* Sidebar content here */}
          <li>
            <a href="#hero" className="drawer-button">Ana Sayfa</a>
          </li>{" "}
          <li>
            <a href="#whatwedo">What we do</a>
          </li>{" "}
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>{" "}
          <li>
            <a href="#about">Hakkımda</a>
          </li>{" "}
          <li>
            <a href="#blog">Blog</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
