import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import UsersContext from '../context/UsersContext';

export const SingUp = () => {

    const navigate = useNavigate()
    const userCtx = useContext(UsersContext)
    const { SingUp } = userCtx
    const [data, setData] = useState({
        nombre: '',
        apellido: '',
        rut: '',
        edad: '',
        correo: '',
        password: ''
    })

    const onChangeData = (event) => {
        setData({
            ...DeviceOrientationEvent,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitData = (event) => {
        event.preventDefault()
        const user = SingUp(data)
        console.log(user)
        navigate('/')
    }

    return (
        <>
            <Container>
                <Row className="justify-content-md-center" style={{ height: '100px' }}>
                    <Col xs lg="2" bg='black' >
                    </Col>
                    <Col md="auto"></Col>
                    <Col xs lg="2">
                    </Col>
                </Row>

                <Row className="justify-content-md-center">
                    <Col xs lg="2">

                    </Col>
                    <Col md="auto">

                        <div className="d-flex justify-content-center align-items-center">
                            <form onSubmit={(e) => { onSubmitData(e) }}>
                                <div>
                                    <label htmlFor="nombre">Nombre</label>
                                    <div>
                                        <input
                                            type="text"
                                            name="nombre"
                                            id="nombre"
                                            onChange={(e) => { onChangeData(e) }}
                                            required />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="apellido">Apellido</label>
                                    <div>
                                        <input
                                            type="text"
                                            name="apellido"
                                            id="apellido"
                                            onChange={(e) => { onChangeData(e) }}
                                            required />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="rut">Rut</label>
                                    <div>
                                        <input
                                            type="text"
                                            name="rut"
                                            id="rut"
                                            onChange={(e) => { onChangeData(e) }}
                                            required />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="edad">Edad</label>
                                    <div>
                                        <input
                                            type="number"
                                            name="edad"
                                            id="edad"
                                            onChange={(e) => { onChangeData(e) }}
                                            required />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="correo">Correo</label>
                                    <div>
                                        <input
                                            type="email"
                                            name="correo"
                                            id="correo"
                                            onChange={(e) => { onChangeData(e) }}
                                            required />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password">Password</label>
                                    <div>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            onChange={(e) => { onChangeData(e) }}
                                            required />
                                    </div>
                                </div>
                                <div style={{ height: '25px' }}></div>
                                <div className="d-flex justify-content-center align-items-center text-center">
                                    <button className="btn btn-primary" type="submit">Registrame</button>
                                </div>
                            </form>
                        </div>

                    </Col>
                    <Col xs lg="2" >

                    </Col>
                </Row>

                <Row className="justify-content-md-center" style={{ height: '100px' }}>
                    <Col xs lg="2">

                    </Col>
                    <Col md="auto" >Recuerda completar tus datos de registro correctamente.</Col>
                    <Col xs lg="2">

                    </Col>
                </Row>

            </Container>



        </>

    )
}
