import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import ProductoContext from "../context/Producto/ProductoContext"

import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"


export const UnProducto = () => {
    const navigate = useNavigate()
    const productoCtx = useContext(ProductoContext)

    const { producto } = productoCtx

    const [data, setData] = useState({
        nombre: '',
        codigo: '',
        valor: '',
        descripcion: '',
        material: '',
        img: ''
    })

    useEffect(() => {
        unProducto()
    })

    const onChangeData = (evento) => {
        setData({
            ...data,
            [evento.target.name]: evento.target.value
        })
    }

    const onSubmitData = (evento) => {
        evento.preventDefault()
        unProducto(data)
    }

    return (
        <>
            <Form onSubmit={(e) => { onSubmitData(e) }} >
                <Form.Group className="mb-3 text-center" controlId="Codigo">
                    <Form.Label style={{ padding: '5px', margin: '10px' }}><h3>Codigo</h3></Form.Label>
                    <Form.Control
                        type="text"
                        name="codigo"
                        id="codigo"
                        placeholder="codigo"
                        onChange={(e) => { onChangeData(e) }}
                        required
                    />
                </Form.Group>

                <Container className='text-center'>
                    <Button style={{ margin: '10px', width: '200px' }} variant="primary" type="submit">
                        Iniciar Sesion
                    </Button>
                </Container>
                <Container>
                    <Button classname='button' type="submit" > Boton </Button>
                </Container>
            </Form>
        </>
    )
}