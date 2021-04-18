import React from 'react';
import {
    Navbar,
    Nav
} from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Navigation.css'


const Navigation = () => {
    return (
        <div>
             <Navbar collapseOnSelect expand="lg"  variant="dark">
                <Navbar.Brand className="ms-5 ps-5 nav-link" href="#home"><Link to='./home'>PEACE OF LIFE</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    
                    </Nav>
                    <Nav>
                        <Nav.Link className="me-5 pe-5" href="#deets"><Link to='./user'>Get Appointment</Link></Nav.Link>
                        <Nav.Link eventKey={2} className="me-5 pe-5" href="#memes"><Link to='/admin'> Admin</Link>
                        </Nav.Link>
                        <Nav.Link eventKey={2} className="me-5 pe-5" href="#memes"><Link to='/login'> Log in</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;