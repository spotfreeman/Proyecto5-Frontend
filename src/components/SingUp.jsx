
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import UsersContext from '../context/UsersContext.js';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

export const SingUp = () => {

    const navigate = useNavigate()
    const userCtx = useContext(UsersContext)
    const { singupUser } = userCtx
    const [data, setData] = useState({
        nombre: '',
        apellido: '',
        rut: '',
        correo: '',
        password: ''
    })

    const onChangeData = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitData = (event) => {
        event.preventDefault()
        const user = singupUser(data)
        console.log(user)
        navigate('/registro')
    }

    return (
        <>
            <Card className='fondo'>
                <Container >
                    <div style={{ height: '100px' }}></div>
                </Container>
                <Container style={{ backgroundColor: '#E3F9E7', width: '600px' }}>
                    <Container style={{ width: '500px', padding: '16px' }}>
                        <Form onSubmit={(e) => { onSubmitData(e) }}>
                            <Form.Group className="mb-3 text-center" controlId="nombre">
                                <Form.Label style={{ padding: '5px' }}><h3>Nombre</h3></Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nombre"
                                    id="nombre"
                                    placeholder="Nombre"
                                    onChange={(e) => { onChangeData(e) }}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3 text-center" controlId="apellido">
                                <Form.Label style={{ padding: '5px' }}><h3>Apellido</h3></Form.Label>
                                <Form.Control
                                    type="text"
                                    name="apellido"
                                    id="apellido"
                                    placeholder="Apellido"
                                    onChange={(e) => { onChangeData(e) }}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3 text-center" controlId="rut">
                                <Form.Label style={{ padding: '5px' }}><h3>Rut</h3></Form.Label>
                                <Form.Control
                                    type="text"
                                    name="rut"
                                    id="rut"
                                    placeholder="12345678-0"
                                    onChange={(e) => { onChangeData(e) }}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3 text-center" controlId="correo">
                                <Form.Label style={{ padding: '5px' }}><h3>Correo</h3></Form.Label>
                                <Form.Control
                                    type="email"
                                    name="correo"
                                    id="correo"
                                    placeholder="nombre@empresa.com"
                                    onChange={(e) => { onChangeData(e) }}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3 text-center" controlId="password">
                                <Form.Label style={{ padding: '5px' }}><h3>Password</h3></Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="password"
                                    onChange={(e) => { onChangeData(e) }}
                                    required
                                />
                            </Form.Group>

                            <Container className='text-center'>
                                <Button style={{ margin: '10px', width: '200px' }} variant="primary" type="submit">
                                    Registrarme!
                                </Button>
                            </Container>
                        </Form>
                    </Container>
                </Container>

                <Container >
                    <div style={{ height: '500px' }}></div>
                </Container>
            </Card>
        </>
    )
}
