import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carrito from './Carrito';

const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#"> Tienda online </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#"> Inicio </Nav.Link>
                        <Nav.Link href="#"> Productos </Nav.Link>
                        <Nav.Link href="#"> Ofertas </Nav.Link>
                    </Nav>
                </Container>
                <Carrito />
            </Navbar>


        </div>
    )
}

export default NavBar