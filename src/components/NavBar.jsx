import "./NavBar.css";
import logo from "../assets/shared/logo.svg";
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
        <img src={logo} />
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
            <a href="#" className="nav-link">
              <span aria-hidden="true">00</span>Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <span aria-hidden="true">01</span>Destination
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <span aria-hidden="true">02</span>Crew
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <span aria-hidden="true">03</span>Technology
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
