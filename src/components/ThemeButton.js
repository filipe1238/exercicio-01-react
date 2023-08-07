import React from "react";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

function ThemeButton({ theme, setTheme }) {
  return (
    <Form className="d-flex">
      {theme === "dark" ? (
        <Button variant="outline-light" onClick={() => setTheme("light")}>
          <FontAwesomeIcon icon={faSun} />
        </Button>
      ) : (
        <Button variant="outline-dark" onClick={() => setTheme("dark")}>
          <FontAwesomeIcon icon={faMoon} />
        </Button>
      )}
    </Form>
  );
}

export default ThemeButton;
