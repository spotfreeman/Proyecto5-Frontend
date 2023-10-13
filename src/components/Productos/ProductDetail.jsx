import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductoContext from '../../context/Producto/ProductoContext'
import { Card, Col, Container, Row, Image } from 'react-bootstrap'


import print from '../../assets/img/logos/impresora.png'


export const ProductDetail = () => {

    const globalContext = useContext(ProductoContext)
    const { product, getOneProduct } = globalContext

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
                            <Col className='text-center'>
                                <h1>IMAGEN DE PRODUCTO</h1>
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


                                    <Container>
                                        <h3>BOTON DE PAYPAL</h3>
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
