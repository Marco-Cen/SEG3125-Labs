import React from 'react'; //Bc downloaded bootstrap? (React-bootstrap)
import {Nav, NavDropdown, Container } from 'react-bootstrap';
import logo from './assets/FossilizedTransparent.png';

const Navbar = () => {
    return (  
         <nav className="navbar">
            
            {/* width="200" height="200" */}
            <img src= {logo} alt="Fossilized" />

            <div className="links">
                <a href="/Exhibition"> Exhibition </a> 
                <a href="/FossilLocation"> Find Them </a>
                <a href="/"> Fossilized </a>
                <a href="/Tickets"> Buy Tickets </a>
                <a href="/AboutUs"> Find Us </a>
            </div>
        </nav>  
    );
}
 
export default Navbar;


 {/* <Navbar bg="light" expand="lg">
         <Container>
             <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                 <Nav.Link href="#home">Home</Nav.Link>
               <Nav.Link href="#link">Link</Nav.Link>
               <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                 <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                 <NavDropdown.Divider />
                 <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                 </NavDropdown>
          </Nav>
            </Navbar.Collapse>
         </Container>
</Navbar>  */}