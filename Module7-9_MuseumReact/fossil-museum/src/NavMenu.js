import React, { useState } from 'react'; //Bc downloaded bootstrap? (React-bootstrap)
import { Link } from 'react-router-dom';
import logoEnglish from './assets/FossilizedEngTrans.png';
import logoFrench from './assets/FossilizedFrenchTransparent.png';

import { Image } from 'react-bootstrap';
import exhibitionIconNav from './assets/exhibitionIconNavBar.png';
import ticketIconNav from './assets/newTicketIconNavBar.png';
// import TranslateSwitch from './TranslateSwitch';
// import locationIconNav from './assets/locationIconNavBar.png';

// import Scroll from 'react-scroll'
// const ScrollLink = Scroll.ScrollLink

// import {Nav, NavDropdown, Container } from 'react-bootstrap';
// import { render } from 'react-dom';


const Navbar = () => {

    //For Toggle Language
    const [langButton, setLangButton] = useState(true);

    return (
        <nav className="navbar">
            <div className="links">

                {/* Use 'Link to=' instead of a 'href=' because React much quicker with 'Link to' and 'Routing' (Doenst have to send request for everything every single time: speeds up load time) */}
                <Link to="/Exhibition" style={{ fontSize: '125%' }}>
                    <Image src={exhibitionIconNav} alt="exhibitionIcon" rounded />
                    {langButton ? "Exhibition" : "Exposition"}
                </Link>

                {/* <Link to="/FossilLocations"> Find Them </Link> */}

                <Link to="/">
                    <img src={langButton ? logoEnglish : logoFrench} alt="Fossilized" />
                </Link>


                <Link to="/TicketPurchase" style={{ fontSize: '125%' }}>
                    <Image src={ticketIconNav} alt="ticketIcon" rounded />
                    {langButton ? "Ticket Purchase" : "Achat de Billets"}
                </Link>

                {/* <Link to="/">
                        <Image src={locationIconNav} alt="locationIcon" rounded />
                        Find Us
                    </Link> */}


                {/* If changed to Nav.Links to redirect on click to that section of page: https://stackoverflow.com/questions/54715462/react-scroll-how-to-scroll-to-a-specific-targeted-component-when-clicking-on-n  */}
                {/* <ScrollLink
                        to="findusRedirect"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='homeParallax'
                        activeClass='some-active-class'
                    >
                     <Image src={locationIconNav} alt="locationIcon" rounded />
                        Find Us 
                    </ScrollLink> */}

            </div>



            {/* Switch Implementation */}
            {/* <TranslateSwitch />  (wasnt able to get working in SEPARATE CLASS) */}
            <button onClick={() => setLangButton(!langButton)} style={{ color: 'black' }}> {langButton ? "English" : "French"} </button>


        </nav>
    );
}

// export const (blahblah);

export default Navbar;


// <Navbar collapseOnSelect fixed='top' expand='sm' bg='light' variant='light'>
//     <Container>
//         <Navbar.Toggle aria-controls='responsive-navbar-nav' />
//         <Navbar.Collapse id='responsive-navbar-nav'>
//             <Nav>
//                 <Nav.Link href="/Exhibition"> Exhibition </Nav.Link> 

//                  <NavDropdown title="Exhibition" id="basic-nav-dropdown">
//                     <NavDropdown.Item href="#action/3.1"> Carnivores </NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item href="#action/3.2"> Herbivores</NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item href="#action/3.3"> Omnivores </NavDropdown.Item>
//                     <NavDropdown.Divider />
//                 </NavDropdown> 

//                 <Nav.Link href="/FossilLocations"> Find Them </Nav.Link>

//                 <Nav.Link href="/"> <img src={logo} alt="Fossilized" /> </Nav.Link>

//                 <Nav.Link href="/PurchaseTickets"> Buy Tickets </Nav.Link>
//                 <Nav.Link href="/AboutUs"> Find Us </Nav.Link>
//             </Nav>
//         </Navbar.Collapse>
//     </Container>
// </Navbar>



