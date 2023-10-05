import React from 'react';

// Bootstaps
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';


export const Login = () => {
    return (
        <>
            <Card>
                <div className="container">
                    <Form>
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
                            Submit
                        </Button>
                    </Form>

                </div>

            </Card>


        </>
    )
}
