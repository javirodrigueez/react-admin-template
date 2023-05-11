import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './MyNavbar.css';

function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><Link className='navbar-link' to="/">Cliente MTIS</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto links-container">
            <Link className='navbar-link' to="/flujo1">Flujo1</Link>
            <Link className='navbar-link' to="/flujo2">Flujo2</Link>
            <Link className='navbar-link' to="/flujo3">Flujo3</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;