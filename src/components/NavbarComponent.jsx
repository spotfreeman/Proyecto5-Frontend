// NavbarComponent.jsx
// REACT
import { useContext } from 'react'
import UsersContext from '../context/UsersContext'

// BOOTSTRAP
import { Container, Image } from 'react-bootstrap'
import { NavLink, Outlet } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

//IMAGES
import print from '../assets/img/impresora.png'

export const NavbarComponent = () => {

    const userCtx = useContext(UsersContext)
    const { logout, authStatus, usersData } = userCtx

    return (
        <>
            <div>
                <Navbar sticky='top' expand='lg' className='bg-body-primary' bg='dark'>
                    <Container style={{ height: '90px' }} >
                        <Image src={print} style={{ width: '10%' }} fluid />
                        <Navbar.Brand className='text-white'>
                            <h1>[3D]Print</h1>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            {
                                authStatus ?
                                    <>
                                        <Nav className="me-auto">
                                            <Nav.Link as={NavLink} to="/" className='text-white'><h4>Home</h4></Nav.Link>
                                            <Nav.Link as={NavLink} to="/productos" className='text-white'><h4>Productos</h4></Nav.Link>
                                            <Nav.Link as={NavLink} to="/contact" className='text-white'><h4>Contactar</h4></Nav.Link>
                                        </Nav>
                                        <Nav>
                                            <Nav.Link as={NavLink} to='/' className='text-white'><Button variant="warning" onClick={() => logout()} >Cerrar Sesion</Button>{' '}</Nav.Link>
                                        </Nav>
                                    </> :
                                    <>
                                        <Nav className="me-auto">
                                            <Nav.Link as={NavLink} to="/" className='text-white'><h4>Home</h4></Nav.Link>
                                            <Nav.Link as={NavLink} to="/productos" className='text-white'><h4>Productos</h4></Nav.Link>
                                            <Nav.Link as={NavLink} to="/products" className='text-white'><h4>Products NEW</h4></Nav.Link>
                                            <Nav.Link as={NavLink} to="/solicitudes" className='text-white'><h4>Solicitud</h4></Nav.Link>

                                        </Nav>
                                        <Nav>
                                            <Nav.Link as={NavLink} to='/login' className='text-white'><Button variant="success">Login</Button>{' '}</Nav.Link>
                                            <Nav.Link as={NavLink} to='/singup' className='text-white'><Button variant="primary">Registro</Button>{' '}</Nav.Link>
                                        </Nav>
                                    </>}
                        </Navbar.Collapse>
                    </Container>
                </Navbar >
            </div>
            <Outlet />
        </>
    )
}
export default NavbarComponent;