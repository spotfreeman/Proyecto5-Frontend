import { useContext, useEffect, useState } from "react"
import ProductoContext from "../../context/Producto/ProductoContext"
import { Button, Card, Container, Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"


import img001 from '../../assets/img/productos/img001.jpg'
import img002 from '../../assets/img/productos/img002.jpg'
import img003 from '../../assets/img/productos/img003.jpg'
import img004 from '../../assets/img/productos/img004.jpg'

import libreriaImagenes from '../../assets/img/img.js'
import print from '../../assets/img/productos/img001.jpg'


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
                        <Row className="justify-content-md-center">
                            {products.map(prod => {
                                return (
                                    <div key={prod._id}>
                                        <Card className="p-2 m-2">
                                            <Card.Title className="text-center" style={{ backgroundColor: '#E3F9E7' }}>
                                                <h3>{prod.nombre} </h3>
                                            </Card.Title>
                                            <Card.Body>
                                                <Row>
                                                    <Col className="text-center">
                                                        <img src={libreriaImagenes[prod.img].img} alt="Imagen de DB" height='300' />
                                                        <img src={print} alt="Imagen de DB" height='300' />
                                                    </Col>
                                                    <Col className="text-center" style={{ backgroundColor: '#E3F9E7' }}>
                                                        <h3>{prod.descripcion}</h3>
                                                        <h3>{prod.material}</h3>
                                                        <h3>$ {prod.valor}</h3>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                            <Button variant="primary" onClick={() => (getOneProduct(prod._id), navigate(`/products/${prod._id}`))} >Detalle</Button>
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