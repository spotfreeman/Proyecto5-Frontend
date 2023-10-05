// Funcionalidades
import { ProductoTable } from '../components/ProductoTable';

// Bootstrap
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import print from '../assets/img/impresora.png'


export const ProductosPage = () => {
    return (
        <>

            <Card className='border-0'>
                <div className='text-center'>
                    <Card bg='secondary rounded-0'> <h2 className='text-center text-white' style={{ height: '70px' }}>Productos</h2> </Card>
                </div>
            </Card>
            <Card>
                <ProductoTable />
            </Card>

            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '22rem' }}>
                            <Image src={print} style={{ width: '50%', textAlign: 'center' }} />
                            <Card.Body>

                                <Card.Title>Titulo del Producto</Card.Title>
                                <Card.Text>
                                    Detalle del producto Detalle del producto Detalle del producto Detalle del producto Detalle del producto Detalle del producto Detalle del producto Detalle del producto Detalle del producto Detalle del producto Detalle del producto Detalle del producto Detalle del producto
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="#">Agregar al Carro</Card.Link>
                                <Card.Link href="#">Compra Rapida!!!</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col> <Card style={{ width: '22rem' }}>
                        <Image src={print} style={{ width: '50%' }} fluid />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col> <Card style={{ width: '22rem' }}>
                        <Image src={print} style={{ width: '50%' }} fluid />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
