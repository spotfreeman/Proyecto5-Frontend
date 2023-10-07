import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UsersContext from '../context/UsersContext'

// Bootstaps
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';


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
            <Card>
                <div className="container">
                    <Form onSubmit={(e) => { onSubmitData(e) }} >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control
                                type="email"
                                name="correo"
                                id="correo"
                                placeholder="correo@gmail.com"
                                onChange={(e) => { onChangeData(e) }}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                onChange={(e) => { onChangeData(e) }}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Iniciar Sesion
                        </Button>
                    </Form>
                </div>
            </Card>
        </>
    )
}
