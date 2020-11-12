import React, { useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/icons/logow.webp";
import "./mynavbar.style.css";

const MyNavbar = () => {
  // useEffect(() => {
  //   window.addEventListener("scroll", resizeHeaderOnScroll);

  //   return () => {
  //     window.removeEventListener("scroll", resizeHeaderOnScroll);
  //   };
  // }, [resizeHeaderOnScroll]);

  // function resizeHeaderOnScroll() {
  //   const distanceY = window.pageYOffset || document.documentElement.scrollTop,
  //     shrinkOn = 200,
  //     headerEl = document.getElementById("js-header");

  //   if (distanceY > shrinkOn) {
  //     headerEl.classList.add("smaller");
  //   } else {
  //     headerEl.classList.remove("smaller");
  //   }
  // }

  return (
    <header id="js-header">
      <Navbar
        id="navbar"
        fixed="top"
        collapseOnSelect
        expand="md"
        variant="dark"
        className="animate-navbar nav-theme justify-content-between"
      >
        <Navbar.Brand id="logo" href="#home">
          <img className="logo" src={Logo} alt="PZJ-Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="navlinks" href="#Home">
              Home
            </Nav.Link>
            <Nav.Link className="navlinks" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="navlinks" href="#Skills">
              Skills
            </Nav.Link>
            <Nav.Link className="navlinks" href="#Experience">
              Experience
            </Nav.Link>
            <Nav.Link className="navlinks" href="#Projects">
              Projects
            </Nav.Link>
            <Nav.Link className="navlinks" href="#Contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default MyNavbar;
