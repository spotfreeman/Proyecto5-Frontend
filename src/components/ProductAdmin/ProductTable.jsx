import { useContext, useEffect, useState } from "react"
import ProductoContext from "../../context/Producto/ProductoContext"
import { Button, Card, Container, Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

import libreriaImagenes from '../../assets/img/imagenes.js'
import print from '../../assets/img/logos/impresora.png'

export const ProductTable = () => {

    const navigate = useNavigate()

    const [products, setProducts] = useState([])

    const globalContext = useContext(ProductoContext)

    const { getProducts, getOneProduct } = globalContext;

    const getAllProducts = async () => {
        const data = await getProducts()
        setProducts(data)
    }

    useEffect(() => {
        getAllProducts()
    }, [])


    return (
        <>
            <Container>
                <Container>
                    <div>
                        <Row className="justify-content-md-cente " >
                            {products.map(prod => {
                                return (
                                    <div key={prod._id}>
                                        <Card className="m-2 shadow p-3 mb-5 bg-white rounded">
                                            <Card.Title className="text-center shadow p-3 mb-5 rounded" style={{ backgroundColor: '#E3F9E7' }}>
                                                <h3 className="text-center">{prod.nombre} </h3>
                                            </Card.Title>
                                            <Card.Body>
                                                <Row >
                                                    <Col className="text-center shadow p-3 mb-5 bg-white rounded">
                                                        {/* <img src={libreriaImagenes[prod.img].img} alt="Imagen de DB" height='300' /> */}
                                                        <img src={print} alt="Imagen de DB" height='300' />
                                                    </Col>
                                                    <Col className='shadow p-3 mb-5 bg-white rounded' style={{ backgroundColor: '#E3F9E7' }}>
                                                        <h3 style={{ height: '100px' }} className='shadow p-3 mb-5 rounded'>{prod.material}</h3>
                                                        <h3 style={{ height: '100px' }} className='shadow p-3 mb-5 rounded'>$ {prod.valor}</h3>
                                                        <Container className="text-center">

                                                            <Button variant="danger" onClick={() => (getOneProduct(prod._id), navigate(`/adminproductdetail/${prod._id}`))} >Modificar</Button>
                                                        </Container>
                                                    </Col>

                                                </Row>
                                            </Card.Body>

                                        </Card>
                                    </div>
                                )
                            })}
                        </Row>

                    </div>
                </Container>
            </Container >



        </>
    )
}