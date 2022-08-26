import React from "react";
import "./header.css";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <div className="container">
      <Navbar expand="lg">
        <Navbar.Brand href="#home"><img src={logo} alt=""/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Features</Nav.Link>
            <Nav.Link href="#link">Solution</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
