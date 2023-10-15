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
                <Container className="shadow p-3 mb-5 bg-white rounded">
                    <div>
                        <Row className="justify-content-md-center ">
                            {products.map(prod => {
                                return (
                                    <div key={prod._id}>
                                        <Card className="p-2 m-2">
                                            <Card.Title className="text-center shadow p-3 mb-5 rounded text-light bg-dark" style={{ backgroundColor: '#E3F9E7' }}>
                                                <h3>{prod.nombre} </h3>
                                            </Card.Title>
                                            <Card.Body >
                                                <Row>
                                                    <Col className="text-center shadow p-3 mb-5 bg-white rounded">
                                                        {/* <img src={libreriaImagenes[prod.img].img} alt="Imagen de DB" height='300' /> */}
                                                        <img src={print} alt="Imagen de DB" height='300' />
                                                    </Col>
                                                    <Col className="text-center shadow p-3 mb-5 bg-white rounded" style={{ backgroundColor: '#E3F9E7' }}>
                                                        <h2 className="text-center shadow p-3 mb-5 rounded text-light bg-dark">Caracteristicas</h2>
                                                        <h3 >{prod.descripcion}</h3>
                                                        <h3 >{prod.material}</h3>
                                                        <h3 >$ {prod.valor}</h3>

                                                        <Button className="shadow p-3 mb-5 rounded" variant="primary" onClick={() => (getOneProduct(prod._id), navigate(`/products/${prod._id}`))} >Detalles</Button>

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
            </Container>



        </>
    )
}