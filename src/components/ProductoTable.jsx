// ProductoTable.jsx

//REACT
import { useContext, useEffect, useState } from "react";

//CONTEXT
import ProductoContext from "../context/Producto/ProductoContext.js";

// BOOTSTRAP
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container, Image } from "react-bootstrap";

//IMAGES
import libreriaImagenes from '../assets/img/img.js'

import img001 from '../assets/img/productos/img001.jpg'
import img002 from '../assets/img/productos/img002.jpg'
import img003 from '../assets/img/productos/img003.jpg'
import img004 from '../assets/img/productos/img004.jpg'


import print from '../assets/img/impresora.png'
// PAYPAL
import { PaypalButton } from "./Paypal/PaypalButton.jsx";

//CODE
export const ProductoTable = () => {

    const [productos, setProductos] = useState([]);

    // globalContext se suele utilizar ctx
    const globalContext = useContext(ProductoContext);

    const { getProductos, unProducto } = globalContext;

    const getAllProductos = async () => {
        const data = await getProductos()
        console.log(data)
        setProductos(data);
    };

    useEffect(() => {
        getAllProductos();
    }, []);



    return (
        <>
            <Container>
                <Container>
                    <div>
                        <Row className="justify-content-md-center">
                            {productos.map(prod => {
                                return (

                                    <Col>
                                        <Card key={prod._id} style={{ width: '30rem', backgroundColor: '#E3F9E7' }} className="p-2 m-2">
                                            <Container className='text-center'>
                                                <Image src={print} style={{ width: '40%' }} fluid />
                                                <h2><img
                                                    src={prod.img}
                                                    alt="Imagen DB"
                                                    width="100"
                                                    height="100">
                                                </img></h2>

                                            </Container>
                                            <Card.Title className='text-center'> {prod.nombre}</Card.Title>
                                            <Card.Text>Cod : {prod.codigo}</Card.Text>
                                            <Card.Text>Descripcion : {prod.descripcion} </Card.Text>
                                            <Card.Text className='text-center'>Valor : $ {prod.valor}</Card.Text>
                                            <Card.Text>Img : {prod.img}</Card.Text>
                                            <Button variant="primary" onClick={() => (unProducto(prod.id))} >Detalle</Button>
                                            <Button variant="warning">Comprar</Button>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>
                </Container>


                <Container>
                    <PaypalButton />
                </Container>
            </Container >
        </>
    );
};
