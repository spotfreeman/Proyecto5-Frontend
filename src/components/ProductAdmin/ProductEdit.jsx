import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductoContext from '../../context/Producto/ProductoContext'
import { Card, Col, Container, Row, Image, Button, Form } from 'react-bootstrap'


import print from '../../assets/img/logos/impresora.png'


export const ProductEdith = () => {

    const globalContext = useContext(ProductoContext)
    const { product, deleteProduct, getOneProduct } = globalContext

    console.log(product)

    const params = useParams()

    useEffect(() => {
        getOneProduct(params.id)
    }, [])

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
        navigate('/product')
    }

    return (
        <>
            <Form onSubmit={(e) => { onSubmitData(e) }}>
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type='text'
                        name='nombre'
                        id='nombre'
                        placeholder='nombre'
                        value={product.nombre}
                        onChange={(e) => { onChangeData(e) }}
                        required
                    />
                </Form.Group>

                <Button style={{ margin: '10px', width: '200px' }} variant="primary" type="submit">
                    Editar!
                </Button>
            </Form>


            <Container>
                <Card className='m-4'>
                    <Card.Title style={{ backgroundColor: '#E3F9E7' }}>
                        <h2 className='text-center'>{product.nombre}</h2>
                    </Card.Title>

                    <Card.Text>

                        <Row>
                            <Col className='text-center' >
                                <Image className='align-me' src={print} style={{ width: '100%' }} fluid />
                            </Col>

                            <Col >
                                <Row >
                                    <Container className='m-2 ' style={{ backgroundColor: '#E3F9E7' }}>
                                        <h6>Codigo Producto: {product.codigo}</h6>
                                        <h3>Tipo de Material </h3>
                                        <h3 className='text-center'>{product.material}</h3>

                                    </Container >
                                </Row>
                                <Row>
                                    <Container className='m-2' style={{ backgroundColor: '#E3F9E7' }}>
                                        <h4>{product.descripcion}</h4>

                                    </Container>

                                    <Container className='m-2' style={{ backgroundColor: '#E3F9E7' }}>
                                        <h3>Valor : $ {product.valor}</h3>
                                    </Container>


                                    <Container className='text-center'>

                                        <Button variant="danger" onClick={() => (deleteProduct(prod.id), navigate(`/`))} >Borrar Producto</Button>

                                    </Container>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Text>
                </Card>
            </Container>
        </>
    )
}
