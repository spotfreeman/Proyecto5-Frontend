import { useContext, useState } from "react"
import UsersContext from "../context/UsersContext"
import SolicitudContext from "../context/Solicitud/SolicitudContext"

export const SolicitudForm = () => {


    const solicitudCtx = useContext(SolicitudContext)
    const { nuevaSolicitud } = solicitudCtx
    const [data, setData] = useState({
        titulo: '',
        descripcion: '',
        nombre: ''
    })

    const onChangeData = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitData = (event) => {
        event.preventDefault()
        const solicitud = nuevaSolicitud(data)
    }

    return (
        <>
            <Card className='fondo'>
                <Container >
                    <div style={{ height: '100px' }}></div>
                </Container>
                <Container>
                    <Container style={{ width: '500px', padding: '10px' }}>
                        <Form onSubmit={(e) => { onSubmitData(e) }}>
                            <Form.Group className="mb-3 text-center" controlId="titulo">
                                <Form.Label style={{ padding: '5px' }}><h3>Titulo</h3></Form.Label>
                                <Form.Control
                                    type="text"
                                    name="titulo"
                                    id="titulo"
                                    placeholder="titulo"
                                    onChange={(e) => { onChangeData(e) }}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3 text-center" controlId="descripcion">
                                <Form.Label style={{ padding: '5px' }}><h3>descripcion</h3></Form.Label>
                                <Form.Control
                                    type="text"
                                    name="descripcion"
                                    id="descripcion"
                                    placeholder="descripcion"
                                    onChange={(e) => { onChangeData(e) }}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3 text-center" controlId="nombre">
                                <Form.Label style={{ padding: '5px' }}><h3>nombre</h3></Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nombre"
                                    id="nombre"
                                    placeholder="nombre"
                                    onChange={(e) => { onChangeData(e) }}
                                    required
                                />
                            </Form.Group>

                            <Container className='text-center'>
                                <Button style={{ margin: '10px', width: '200px' }} variant="primary" type="submit">
                                    Ingresar Solicitud!
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