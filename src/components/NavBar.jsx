import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";
const NavBar = () => {
  const [attributes, setAttributes] = useState({
    dataVisible: false,
    ariaExpanded: false,
  });

  const handleNav = () => {
    setAttributes((prevAttributes) => ({
      dataVisible: !prevAttributes.dataVisible,
      ariaExpanded: !prevAttributes.ariaExpanded,
    }));
  };

  return (
    <header className="header">
      <span className="logo">
        <img src="./assets/shared/logo.svg" alt="logo" />
      </span>
      <nav className="nav">
        <button
          className="nav-menu"
          aria-expanded={attributes.ariaExpanded}
          aria-controls="navigation"
          onClick={handleNav}
        ></button>
        <ul
          className="nav-list"
          id="navigation"
          data-visible={attributes.dataVisible}
        >
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? "is-active nav-link" : "nav-link";
              }}
              onClick={() => setAttributes(false)}
            >
              <span aria-hidden="true">00</span>Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/destination"
              className={({ isActive }) => {
                return isActive ? "is-active nav-link" : "nav-link";
              }}
              onClick={() => setAttributes(false)}
            >
              <span aria-hidden="true">01</span>Destination
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/crew"
              className={({ isActive }) => {
                return isActive ? "is-active nav-link" : "nav-link";
              }}
              onClick={() => setAttributes(false)}
            >
              <span aria-hidden="true">02</span>Crew
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/technology"
              className={({ isActive }) => {
                return isActive ? "is-active nav-link" : "nav-link";
              }}
              onClick={() => setAttributes(false)}
            >
              <span aria-hidden="true">03</span>Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
