import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductoContext from '../../context/Producto/ProductoContext'
import { Card, Col, Container, Row, Image, Button, Form } from 'react-bootstrap'


import print from '../../assets/img/logos/impresora.png'


export const ProductDetail = () => {

    const globalContext = useContext(ProductoContext)
    const { product, deleteProduct, getOneProduct } = globalContext

    console.log(product)

    const params = useParams()

    useEffect(() => {
        getOneProduct(params.id)
    }, [])

    return (
        <>
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
                                    <Card.Text>
                                        <Form>
                                            <Form.Group controlId='nombre'>
                                                <Form.Label>Nombre</Form.Label>
                                                <Form.Control
                                                    type='text'
                                                    name='nombre'
                                                    id='nombre'
                                                    placeholder={product.nombre}
                                                    //value={product.nombre}
                                                    required

                                                />
                                            </Form.Group>

                                            <Form.Group controlId='material'>
                                                <Form.Label>Material</Form.Label>
                                                <Form.Control
                                                    type='text'
                                                    name='material'
                                                    id='material'
                                                    placeholder={product.material}
                                                    //alue={product.material}
                                                    required
                                                />
                                            </Form.Group>

                                            <Form.Group controlId='nombre'>
                                                <Form.Label>Descripcion</Form.Label>
                                                <Form.Control
                                                    type='text'
                                                    name='descripcion'
                                                    id='descripcion'
                                                    value={product.descripcion}
                                                    required
                                                />
                                            </Form.Group>

                                            <Form.Group controlId='nombre'>
                                                <Form.Label>Valor</Form.Label>
                                                <Form.Control
                                                    type='text'
                                                    name='valor'
                                                    id='valor'
                                                    value={product.valor}
                                                    required
                                                />
                                            </Form.Group>

                                        </Form>
                                    </Card.Text>
                                </Row>
                                <Row>
                                    <Container className='text-center p-3' style={{ height: '300px' }}>
                                        <Button variant="success" onClick={() => (deleteProduct(prod._id), navigate(`/`))} >Actualizar Producto</Button>
                                    </Container>



                                    <Container className='text-center p-3'>
                                        <Button variant="danger" onClick={() => (deleteProduct(prod._id), navigate(`/`))} >Borrar Producto</Button>
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
