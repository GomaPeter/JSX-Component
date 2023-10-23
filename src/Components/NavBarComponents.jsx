import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css'

function NavBarComponents() {
    return (
      // Rendering the Navbar component from react-bootstrap
      <Navbar >
        <Container>
          {/* Rendering the Navbar.Brand with logo image and text */}
          <Navbar.Brand href="#home">Zroom</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Rendering the Nav.Links */}
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              {/* Rendering the NavDropdown */}
              <NavDropdown title="Kicks" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">sas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Black
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Balck 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavBarComponents;