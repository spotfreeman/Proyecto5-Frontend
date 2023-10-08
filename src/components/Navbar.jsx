// Navbar.jsx
// REACT
import { Link, NavLink, Outlet } from 'react-router-dom'
import { useContext } from 'react'

//CONTEXT
import UsersContext from '../context/UsersContext'

//BOOTSTAP
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

//IMAGES
import print from '../assets/img/impresora.png'

//CODE
export const Navbar = () => {

    const userCtx = useContext(UsersContext)
    const { logout, authStatus, usersData } = userCtx
    console.log(userCtx)

    return (
        <>
            <div>
                <ul>
                    <h2>[3D]Print</h2>
                    <Nav.Link as={NavLink} to="/" className='text-white'><h4>Home</h4></Nav.Link>
                    <li>
                        <Image src={print} style={{ width: '10%' }} fluid />
                    </li>
                    <li>
                        <Link to='/'>Inicio { } </Link>
                    </li>

                    {
                        authStatus ?
                            <>
                                <li>
                                    <h3>Nombre : (Pendiente)</h3>
                                </li>

                                <li>
                                    <Link to='/productos'>Productos</Link>

                                </li>

                                <Nav.Link as={NavLink} to='/singup' className='text-white'><Button variant="primary" size='lg' onClick={() => { logout() }}>Cerrar Sesion</Button>{' '}</Nav.Link>

                                <li onClick={() => { logout() }}>
                                    <Link to='/login'>
                                        Cerrar Sesion
                                    </Link>
                                </li>
                            </> :
                            <>
                                <li>
                                    <Link to='/productos'>Productos</Link>
                                    <Nav.Link as={NavLink} to="/productos" className='text-white'><h4>Productos</h4></Nav.Link>
                                </li>
                                <li>
                                    <Link to='/singup'>
                                        Registro
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/login'>
                                        Iniciar Sesion
                                    </Link>
                                </li>
                                <Nav.Link as={NavLink} to='/login' className='text-white'><Button variant="danger" size='lg'>Login</Button>{' '}</Nav.Link>
                                <Nav.Link as={NavLink} to='/singup' className='text-white'><Button variant="primary" size='lg'>Registro</Button>{' '}</Nav.Link>

                            </>
                    }
                </ul>
            </div>
            <Outlet />


            {/* 
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
                        </Nav>

                        <Nav>
                            <Nav.Link as={NavLink} to='/login' className='text-white'><Button variant="success">Login</Button>{' '}</Nav.Link>
                            <Nav.Link as={NavLink} to='/singup' className='text-white'><Button variant="primary">Registro</Button>{' '}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar > */}
        </>
    )
}

export default Navbar;
