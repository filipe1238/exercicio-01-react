import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import ThemeButton from "./ThemeButton";

function Menu({ theme, setTheme }) {
  return (
    <Navbar expand="lg" className="bg-body-secondary">
      <Navbar.Brand href="/">Exercicio 1</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/wallpapers">Wallpapers</Nav.Link>
          <Nav.Link href="/movies">Movies</Nav.Link>
        </Nav>
        <ThemeButton theme={theme} setTheme={setTheme} />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
