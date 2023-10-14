import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UsersContext from '../context/UsersContext'

// Bootstaps
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';


export const Login = () => {
    const navigate = useNavigate()
    const userCtx = useContext(UsersContext)

    const
        {
            loginUser,
            authStatus,
            verifyingToken
        } = userCtx

    const [data, setData] = useState({
        correo: '',
        password: ''
    })

    useEffect(() => {
        verifyingToken()

        if (authStatus) {
            navigate('/')
        }
        [authStatus, verifyingToken, navigate]
    })

    const onChangeData = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitData = (event) => {
        event.preventDefault()
        loginUser(data)
    }

    return (
        <>
            <Card className="fondo">
                <Container >
                    <div style={{ height: '200px' }}></div>
                </Container>
                <Container style={{ width: '600px', padding: '10px' }}>
                    <Card>
                        <div className="container" >
                            <Form onSubmit={(e) => { onSubmitData(e) }} >
                                <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
                                    <Form.Label style={{ padding: '5px', margin: '10px' }}><h3>Usuario</h3></Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="correo"
                                        id="correo"
                                        placeholder="correo@gmail.com"
                                        onChange={(e) => { onChangeData(e) }}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3 text-center" controlId="formBasicPassword">
                                    <Form.Label style={{ padding: '5px', margin: '10px' }}><h3>Contraseña</h3></Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        onChange={(e) => { onChangeData(e) }}
                                        required
                                    />
                                </Form.Group>
                                <Container className='text-center'>
                                    <Button style={{ margin: '10px', width: '200px' }} variant="primary" type="submit">
                                        Iniciar Sesion
                                    </Button>
                                </Container>

                            </Form>
                        </div>
                    </Card>
                </Container>


                <Container >
                    <div style={{ height: '500px' }}></div>
                </Container>
            </Card>
            <div  >


            </div>

        </>
    )
}
