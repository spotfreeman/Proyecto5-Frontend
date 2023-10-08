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

import img001 from '../assets/img/portal.jpg'
import img002 from '../assets/img/setrol.jpg'

// PAYPAL
import { PaypalButton } from "./Paypal/PaypalButton.jsx";

//CODE
export const ProductoTable = () => {

    const [productos, setProductos] = useState([]);

    // globalContext se suele utilizar ctx
    const globalContext = useContext(ProductoContext);

    const { getProductos } = globalContext;

    const getAllProductos = async () => {
        const data = await getProductos()
        setProductos(data);
    };

    const imagen = 4

    useEffect(() => {
        getAllProductos();
    }, []);

    return (
        <>
            <Container>
                <div>
                    <Row className="justify-content-md-center">
                        {productos.map(prod => {
                            return (
                                <Col>
                                    <Card key={prod._id} style={{ width: '30rem', backgroundColor: '#E3F9E7' }} className="p-2 m-2">
                                        <Container className='text-center'>
                                            <Image
                                                src={libreriaImagenes[imagen].img}
                                                alt={libreriaImagenes[0].alt}
                                                style={{ width: '100%', borderRadius: '10px' }}
                                                fluid
                                            />

                                            {/*
                                            <h2><img src={libreriaImagenes[imagen].img} alt="" style={{ width: '100%', borderRadius: '10px' }} /></h2> */}
                                        </Container>
                                        <Card.Title className='text-center'> {prod.nombre}</Card.Title>
                                        <Card.Text>Cod : {prod.codigo}</Card.Text>
                                        <Card.Text>Descripcion : {prod.descripcion} </Card.Text>
                                        <Card.Text className='text-center'>Valor : $ {prod.valor}</Card.Text>
                                        <Card.Text>Img : {prod.img}</Card.Text>
                                        <Button variant="primary">Detalle</Button>
                                        <Button variant="warning">Comprar</Button>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </Container>

            <Container>
                <Row className="justify-content-md-center">
                    <Col>

                    </Col>
                    <Col>
                        <PaypalButton />
                    </Col>
                    <Col>

                    </Col>
                </Row>
            </Container>
        </>
    );
};
