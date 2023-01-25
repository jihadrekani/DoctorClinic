import React from 'react'
import {Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import './Nav.css'; 
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPhone} from '@fortawesome/free-solid-svg-icons'
export default function Navbars() {
  return (
    <Navbar expand="lg">
    <Container>
      <Navbar.Brand href="#home" >
        <img src={logo} className='logo' title="logo"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className='active'  href="#home">Home</Nav.Link>
          <NavDropdown title="Pages" id="basic-nav-dropdown">
            <NavDropdown.Item href='#action3.1'>About Us</NavDropdown.Item>
            <NavDropdown.Item href='#action3.1'>Our Team</NavDropdown.Item>
            <NavDropdown.Item href='#action3.1'>FAQ's</NavDropdown.Item>
            <NavDropdown.Item href='#action3.1'>Booking</NavDropdown.Item>
            <NavDropdown.Item href='#action3.1'>Error 404</NavDropdown.Item>
            <NavDropdown.Item href='#action3.1'>Login / Register</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Services" id="basic-nav-dropdown">
          <NavDropdown.Item href='#action3.1'>Servises</NavDropdown.Item>
          <NavDropdown.Item href='#action3.1'>Servises Details</NavDropdown.Item>

          </NavDropdown>

          <NavDropdown  title="Blog" id="basic-nav-dropdown">
          <NavDropdown.Item href='#action3.1'>Blogs</NavDropdown.Item>
          <NavDropdown.Item href='#action3.1'>Blogs Details</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#home">Contact us</Nav.Link>
          {/* <Nav.Link href="#home"><FontAwesomeIcon icon={faSearch}/>
          </Nav.Link> */}
          <Nav.Link href="#home"> 
          <a href="tel:07507932888"><FontAwesomeIcon icon={faPhone} className="phone"/>
          (+964)7932888</a>
          </Nav.Link>
          {/* <Nav.Link>
            <button>Contact Us <span> > </span></button>
          </Nav.Link> */}


        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
