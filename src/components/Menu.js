import React from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import ThemeButton from "./ThemeButton";

function Menu({ theme, setTheme }) {
  return (
    <Navbar expand="lg" className="bg-body-secondary">
        <Navbar.Brand href="#home">Exercicio 1</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <ThemeButton theme={theme} setTheme={setTheme} />
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
