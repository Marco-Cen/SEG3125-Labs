import React from 'react'; //Bc downloaded bootstrap? (React-bootstrap)
import {Nav, NavDropdown, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';

import logo from './assets/FossilizedTransparent.png';


const Navbar = () => {
    return (  

         <nav className="navbar">
            <div className="links">

                {/* Use 'Link to=' instead of a 'href=' because React much quicker with 'Link to' and 'Routing' (Doenst have to send request for everything every single time: speeds up load time) */}
                <Link to="/Exhibition"> Exhibition </Link> 
                <Link to="/FossilLocations"> Find Them </Link>

                <Link to="/"> 
                <img src= {logo} alt="Fossilized" />
                </Link>

                {/* <a href="/"> Fossilized </a> */}

                <Link to="/PurchaseTickets"> Buy Tickets </Link>
                <Link to="/AboutUs"> Find Us </Link>
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