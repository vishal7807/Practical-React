import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/img/logo.png';
const header = () => {
  return (
    <>
      <div className='wp-bg-dark-blue wpHeader'>
        <Navbar expand="lg" className='wp-py-15'>
          <Container>
            <Navbar.Brand href="#home"><img src={logo} alt="logo" /></Navbar.Brand>        
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className='wpHeaderMenu' id="basic-navbar-nav">
              <Nav className='ms-auto'>
                <NavDropdown title="Products" id="products-nav-dropdown">
                  <NavDropdown.Item href="#action/1">Products - 1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/2">Products - 2</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3">Products - 3</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Solutions" id="solutions-nav-dropdown">
                  <NavDropdown.Item href="#action/1">Solutions - 1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/2">Solutions - 2</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3">Solutions - 3</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Resources" id="resources-nav-dropdown">
                  <NavDropdown.Item href="#action/1">Resources - 1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/2">Resources - 2</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3">Resources - 3</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Pricing" id="pricing-nav-dropdown">
                  <NavDropdown.Item href="#action/1">Pricing - 1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/2">Pricing - 2</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3">Pricing - 3</NavDropdown.Item>
                </NavDropdown>
                <div className='hstack wp-gap-lg-25 wp-gap-15 wp-pl-lg-20 wp-px-15'>
                  <button type='button' className='btn wp-btn-yellow wp-f-18'>Login</button>
                  <button type='button' className='btn wp-btn-blue wp-f-18 btn-flex gap-1'>Try Whitepace free <i className='bi bi-arrow-right-short wp-f-26 wp-lh-26'></i></button>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  )
}
export default header
