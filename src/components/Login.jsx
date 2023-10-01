

// Bootstaps
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

export const Login = () => {
    return (
        <>

            <div className="text-center"> Login </div>

            <div className="d-flex justify-content-center align-items-center">
                <form onSubmit={(e) => { onSubmitData(e) }}>
                    <div>
                        <div>
                            <label htmlFor="correo">Tu Correo</label>
                            <input
                                type="email"
                                name="correo"
                                id="correo"
                                placeholder="tucorreo@gmail.com"
                                onChange={(e) => { onChangeData(e) }}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password">Tu Contraseña</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                onChange={(e) => { onChangeData(e) }}
                                required
                            />
                        </div>

                        <button className="btn btn-primary" type="submit">Iniciar Sesion</button>
                    </div>
                </form>
            </div>

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
