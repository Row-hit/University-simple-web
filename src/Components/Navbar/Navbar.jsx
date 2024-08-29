import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setSticky(true) : setSticky(false);
    });
  }, []);
  const [mobMenu, setMobMenu] = useState(false);
  const toggleMenu = () => {
    mobMenu ? setMobMenu(false) : setMobMenu(true);
  };
  return (
    <nav className={`container  ${sticky ? "dark-nav" : null}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobMenu ? "" : "hide-menu-icon"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link to="programs" smooth={true} offset={-250} duration={500}>
            Programs
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-100} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          {" "}
          <Link to="campus" smooth={true} offset={-220} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          {" "}
          <Link to="testimonials" smooth={true} offset={-220} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-200}
            duration={500}
            className="btn"
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
