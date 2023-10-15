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
                <Card className='m-4 p-4'>
                    <Card.Title style={{ backgroundColor: '#E3F9E7' }} className='shadow p-3 mb-5 rounded'>
                        <h2 className='text-center'>{product.nombre}</h2>
                    </Card.Title>



                    <Card.Text>

                        <Row >
                            <Col className='text-center' >
                                <Image className='align-me' src={print} style={{ width: '80%' }} fluid />
                            </Col>

                            <Col >
                                <Row >
                                    <Card.Text>
                                        <Form>
                                            <Form.Group controlId='nombre'>
                                                <Form.Label>Nombre</Form.Label>
                                                <Form.Control
                                                    className='shadow p-3 mb-5 bg-white rounded'
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
                                                    className='shadow p-3 mb-5 bg-white rounded'
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
                                                    className='shadow p-3 mb-5 bg-white rounded'
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
                                                    className='shadow p-3 mb-5 bg-white rounded'
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
                                <Row >

                                    <Col>
                                        <Container className='text-center p-3' style={{ height: '100px' }}>
                                            <Button variant="success" onClick={() => (deleteProduct(prod._id), navigate(`/`))} >Actualizar Producto</Button>
                                        </Container>

                                    </Col>
                                    <Col>
                                        <Container className='text-center p-3'>
                                            <Button variant="danger" onClick={() => (deleteProduct(prod._id), navigate(`/`))} >Borrar Producto</Button>
                                        </Container>

                                    </Col>


                                </Row>
                            </Col>
                        </Row>
                    </Card.Text>
                </Card>
            </Container>
        </>
    )
}
