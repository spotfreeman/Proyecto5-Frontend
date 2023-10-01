import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from 'react-router-dom'
import print from '../assets/img/impresora.png'

export const NavBar = () => {
    return (
        <>
            <Navbar sticky='top' expand="lg" className="bg-body-primary" bg='dark'>
                <Container style={{ height: '100px' }}>
                    <Image src={print} style={{ width: '10%' }} fluid />
                    <Navbar.Brand href="/" className='text-white'>
                        <h2>[3D]Print</h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/" className='text-white'><h4>Home</h4></Nav.Link>
                            <Nav.Link as={NavLink} to="/productos" className='text-white'><h4>Productos</h4></Nav.Link>
                            <Nav.Link as={NavLink} to="/contact" className='text-white'><h4>Contacto</h4></Nav.Link>
                        </Nav>

                        <Nav>
                            <Nav.Link as={NavLink} to='/login' className='text-white'><Button variant="success">Login</Button>{' '}</Nav.Link>
                            <Nav.Link as={NavLink} to='/singup' className='text-white'><Button variant="primary">Registro</Button>{' '}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    )
}

export default NavBar;
