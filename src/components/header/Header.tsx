import { Container, Nav, Navbar } from 'react-bootstrap'
import './Header.css';

export const Header = () => {
  return (
    <header id='header'>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#about">Mariano Ostric</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#post">Post</Nav.Link>
              <Nav.Link href="#expirience">Expirience</Nav.Link>
              <Nav.Link href="#contact-me">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
} 

