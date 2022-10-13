import { Link } from "react-router-dom";
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
            <Link to="/" className="nav-link">
              <span aria-hidden="true">00</span>Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/destination" className="nav-link">
              <span aria-hidden="true">01</span>Destination
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/crew" className="nav-link">
              <span aria-hidden="true">02</span>Crew
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/technology" className="nav-link">
              <span aria-hidden="true">03</span>Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
