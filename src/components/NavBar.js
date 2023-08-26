import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { logout } from "../services";

function Navegacion() {
  const token = localStorage.getItem("token");

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Museo de Chicago</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {token && (
              <>
                <Nav.Link href="/art_works">Colección</Nav.Link>
                <Nav.Link href="/search">Buscador</Nav.Link>
              </>
            )}
          </Nav>
          <Nav>
            {!token ? (
              <>
                <Nav.Link href="/register">Registrate</Nav.Link>
                <Nav.Link eventKey={2} href="/login">
                  Ingresa
                </Nav.Link>
              </>
            ) : (
              <Nav.Link onClick={logout}>Cerrar Sesión</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegacion;
