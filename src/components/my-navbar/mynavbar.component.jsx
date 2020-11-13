import React, { useState, useCallback } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/icons/logow.webp";
import "./mynavbar.style.css";
// import Hamburger from "hamburger-react";

import { HamburgerVortex } from "react-animated-burgers";

const MyNavbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = useCallback(
    () => setIsActive((prevState) => !prevState),
    []
  );
  return (
    <div>
      <Navbar
        id="navbar"
        fixed="top"
        expand="md"
        variant="dark"
        className="animate-navbar nav-theme justify-content-between"
      >
        <Navbar.Brand id="logo" href="#home">
          <img className="logo" src={Logo} alt="PZJ-Logo" />
        </Navbar.Brand>
        <Navbar.Toggle className="navToggler">
          {/* <Hamburger color="white" size="100" /> */}
          <HamburgerVortex barColor="white" {...{ isActive, toggleButton }} />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#Skills">Skills</Nav.Link>
            <Nav.Link href="#Experience">Experience</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
