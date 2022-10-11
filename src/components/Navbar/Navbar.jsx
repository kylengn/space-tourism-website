import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/shared/logo.svg";
import open from "../../assets/shared/icon-hamburger.svg";
import close from "../../assets/shared/icon-close.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = ["home", "destination", "crew", "technology"];

  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src={logo} alt="navbar__logo" />
        </div>

        {/* Line */}
        <div className="navbar__line"></div>

        {/* Tablet & Desktop */}
        <div className="navbar__links-wrapper">
          <div className="navbar__links">
            {links.map((item, index) => (
              <NavLink
                end
                to={item === "home" ? "" : item}
                className={({ isActive }) =>
                  isActive
                    ? "active navbar__links-item"
                    : "inactive navbar__links-item"
                }
                key={index}
              >
                <span>0{index}</span>
                {item}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="navbar__menu" onClick={toggleMenu}>
          {menuActive ? (
            <img src={close} alt="navbar__menu-close" />
          ) : (
            <img src={open} alt="navbar__menu-open" />
          )}
        </div>

        {/* Mobile Sidebar */}

        <div className={`navbar__sidebar ${menuActive ? "active" : ""}`}>
          <div className="navbar__links">
            {links.map((item, index) => (
              <NavLink
                end
                to={item === "home" ? "" : item}
                className={({ isActive }) =>
                  isActive
                    ? "active navbar__links-item"
                    : "inactive navbar__links-item"
                }
                key={index}
                onClick={toggleMenu}
              >
                <span>0{index}</span>
                {item}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
