import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <>
            <Navbar sticky='top' expand="lg" className="bg-body-tertiary" bg='dark'>
                <Container>
                    <Navbar.Brand href="/">[3D]Print</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>

                            <Nav.Link href="/productos">Productos</Nav.Link>
                            <Nav.Link href="/productos">Contacto</Nav.Link>
                            <Nav.Link href="/about">Sobre Nosotros</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href='#IniciarSesion'>Iniciar Sesion</Nav.Link>
                            <Nav.Link href='#Registro'>Registrar</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;
