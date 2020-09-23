import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './navbar.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function NavbarPage() {
  return (
    <Navbar collapseOnSelect expand='lg' variant='light'>
      <NavLink to='/' class='navbar-brand'>
        Lorem
      </NavLink>
      {/* <Navbar.Brand href='#home'></Navbar.Brand> */}
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'></Nav>
        <Nav className='mr-auto'>
          <NavLink to='/product' class='nav-link'>
            Shop
          </NavLink>
          <NavLink to='/contact' class='nav-link'>
            Contact us
          </NavLink>

          <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.4'>
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href='#deets'>
            <FaShoppingCart />
          </Nav.Link>
          <Nav.Link eventKey={2} href='#memes'>
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarPage;
