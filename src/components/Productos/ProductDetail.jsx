import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductoContext from '../../context/Producto/ProductoContext'
import { Card, Col, Container, Row, Image } from 'react-bootstrap'


import print from '../../assets/img/logos/impresora.png'
import { PaypalButton } from '../Paypal/PaypalButton'


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
                <Card className='shadow p-3 mb-5 bg-white rounded'>
                    <Card.Title>
                        <h2 className='text-center shadow p-3 mb-5 bg-white rounded'>{product.nombre}</h2>
                    </Card.Title>

                    <Card.Text>

                        <Row>
                            <Col className='text-center ' >
                                <Image className='shadow p-3 mb-5 bg-white rounded' src={print} />
                            </Col>

                            <Col >
                                <Row >
                                    <Container className='shadow p-3 mb-5 bg-white rounded' style={{ backgroundColor: '#E3F9E7' }}>
                                        <h6>Codigo Producto: {product.codigo}</h6>
                                        <h3>Tipo de Material </h3>
                                        <h3 className='text-center'>{product.material}</h3>

                                    </Container >
                                </Row>
                                <Row>
                                    <Container className='shadow p-3 mb-5 bg-white rounded' style={{ backgroundColor: '#E3F9E7' }}>
                                        <h4>{product.descripcion}</h4>

                                    </Container>

                                    <Container className='shadow p-3 mb-5 bg-white rounded' style={{ backgroundColor: '#E3F9E7' }}>
                                        <h3>Valor : $ {product.valor}</h3>
                                    </Container>


                                    <Container className='shadow p-3 mb-5 bg-white rounded'>
                                        <PaypalButton />
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
