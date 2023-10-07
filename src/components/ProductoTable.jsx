import { useContext, useEffect, useState } from "react";
import ProductoContext from "../context/Producto/ProductoContext.js";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import libreriaImagenes from '../assets/img/img.js'
import { Container } from "react-bootstrap";
import { PaypalButton } from "./Paypal/PaypalButton.jsx";

export const ProductoTable = () => {

    const [productos, setProductos] = useState([]);

    // globalContext se suele utilizar ctx
    const globalContext = useContext(ProductoContext);

    const { getProductos } = globalContext;

    const getAllProductos = async () => {
        const data = await getProductos()
        setProductos(data);
    };

    useEffect(() => {
        getAllProductos();
    }, []);

    return (
        <>
            {/* <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Codigo</th>
                        <th>Valor</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map(producto => {
                        return (
                            <tr key={producto._id}>
                                <td>{producto.nombre}</td>
                                <td>{producto.codigo}</td>
                                <td>$ {producto.valor}</td>
                                <td><button className="btn btn-primary">Comprar</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table> */}


            <Container>
                <div>
                    <Row className="justify-content-md-center">
                        {productos.map(prod => {
                            return (
                                <Col>
                                    <Card key={prod._id} style={{ width: '22rem' }} className="p-2 m-2">
                                        <h2><img src={libreriaImagenes[2].img} alt="" style={{ width: '80%', borderRadius: '10px' }} /></h2>
                                        <Card.Title>{prod.nombre}</Card.Title>
                                        <Card.Text>{prod.codigo}</Card.Text>
                                        <Card.Text>{prod.valor}</Card.Text>
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
