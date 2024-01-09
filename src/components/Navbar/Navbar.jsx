import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "./assets/logo.png";
import logoTextBlack from "./assets/logoTextBlack.svg";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import {BiSolidDownArrow} from 'react-icons/bi'
const Navbar = () => {
  const scrollPosition = useScrollPosition();
  const [menu, setMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleHamburgerClick = () => {
    menu ? setMenu(false) : setMenu(true);
  };
  const handleClose = () => {
    setMenu(false);
  };
  const Options = [
    { title: "Renting Services", link: "/renting-services" },
    { title: "Webtool", link: "#" },
    { title: "Drone", link: "#" }
   
  ];
  const handleItemClick = (link) => {
    
    console.log("Navigating to:", link);
    setDropdown(false)
  };
  return (
    <Fragment>
      {!menu && (
        <div
          className={scrollPosition === 0 ? "navbar" : "navbar sticky"}
          id="nav"
        >
          <Link to="/" onClick={handleClose}>
            <div className="navLogoBox">
              <div className="navLogoImg">
                <img src={logo} alt="logo" />
              </div>
              <div className="navLogoText">
                <img src={logoTextBlack} alt="logo" />
              </div>
            </div>
          </Link>

          <button className="navbar-button" onClick={handleHamburgerClick}>
            <MenuIcon fontSize="inherit" className="navbar-hamburger" />
          </button>

          <div className="navListBox">
            <ul className="navList">
              <li>
                <Link to="/" className="navListItem">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="navListItem">
                  About Us
                </Link>
              </li>
              {/* <li><Link to='/projects' className='navListItem'>Projects</Link></li> */}
              <li>
                <Link
                  to="#"
                  className="navListItem"
                  
                >
                  Services <span className="arrow"><BiSolidDownArrow/></span>
                </Link>
                <ul
                  className={dropdown ? "servicesList" : "servicesList hidden"}
                >
                  {Options.map((item, index) => (
                    <li key={index} onClick={() => handleItemClick(item.link)}>
                      {" "}
                      <Link to={item.link}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li>
                <Link to="/outreach" className="navListItem">
                  Outreach
                </Link>
              </li>
              <li>
                <Link to="/team" className="navListItem">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/drone" className="navListItem">
                  Drone
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {!menu && (
        <div
          className={
            scrollPosition === 0
              ? "navbarMenu navTransparent"
              : "navbarMenu sticky"
          }
          id="nav"
        >
          <div className="navLogoBox">
            <Link to="/" onClick={handleClose}>
              <div className="navLogoImg">
                <img src={logo} alt="logo" />
              </div>
            </Link>
            <div className="navLogoText">
              <img src={logoTextBlack} alt="logo" />
            </div>
            <button className="navbar-button" onClick={handleHamburgerClick}>
              <MenuIcon fontSize="inherit" className="navbar-hamburger" />
            </button>
          </div>
        </div>
      )}

      {menu && (
        <div className="navbarMenu" id="nav">
          <div className="navLogoBox">
            <Link to="/" onClick={handleClose}>
              <div className="navLogoImg">
                <img src={logo} alt="logo" />
              </div>
            </Link>
            <div className="navLogoText">
              <img src={logoTextBlack} alt="logo" />
            </div>
            <button className="navbar-button" onClick={handleHamburgerClick}>
              <MenuIcon fontSize="inherit" className="navbar-hamburger" />
            </button>
          </div>
        </div>
      )}

      {menu && (
        <div className="navbar-menu">
          <ul className="navbar-menu-container">
            <li>
              <Link className="navbar-menu-item" to="/" onClick={handleClose}>
                Home
              </Link>
            </li>
            <li>
              <Link
                className="navbar-menu-item"
                to="/about"
                onClick={handleClose}
              >
                About Us
              </Link>
            </li>
            {/* <li><Link className='navbar-menu-item' to='/projects' onClick={handleClose}>Projects</Link></li> */}
            <li>
              <Link
                className="navbar-menu-item"
                to="/services"
                onClick={handleClose}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="navbar-menu-item"
                to="/outreach"
                onClick={handleClose}
              >
                Outreach
              </Link>
            </li>
            <li>
              <Link
                className="navbar-menu-item"
                to="/team"
                onClick={handleClose}
              >
                Team
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default Navbar;
