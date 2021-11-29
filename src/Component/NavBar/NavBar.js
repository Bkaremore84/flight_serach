import React from 'react';
import { Navbar, Container } from "react-bootstrap";

import './NavBar.scss';

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className='navbar-title'>Flight Serach App</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
