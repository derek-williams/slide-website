import {Navbar, Nav } from 'react-bootstrap'
import React, { Component } from "react";

class ComingSoonNav extends Component {
  render() {
    return (
          <div>
            <Navbar collapseOnSelect expand="lg" className='navbar-header' variant="dark">
            <Navbar.Brand href="/">
              <img
                alt=""
                src="/SlideGrey.png"
                width="200"
                height="50"
                className="d-inline-block align-top"
              />{' '}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
              </Nav>
              <Nav>
                <Nav.Link href="/faq">FAQ</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          </div>
          );
            }
}


export default ComingSoonNav;