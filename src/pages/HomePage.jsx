
import { Card, Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const HomePage = () => {
    return (
        <>
            <Card bg='dark text-white rounded-0' className="card-fondo">
                <Card.Body style={{ height: '700px', }} >
                    <h1 style={{ fontSize: '100px' }}>Imprimir es Facil!</h1>
                    <p style={{ fontSize: '50px' }}>¡Déjate sorprender por la magia de la impresión en 3D con nuestra Figura 3D personalizada! </p>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body style={{ height: '500px' }}>
                    <Row>
                        <Col>
                            <h2 className="text-center" style={{ fontSize: '300px' }}> [3D] </h2>
                            <h2 className="text-center" style={{ fontSize: '100px' }}> Print </h2>
                        </Col>

                        <Col>
                            <h2 style={{ fontSize: '80px' }}>Mi nombre es</h2>
                            <h2 style={{ fontSize: '80px' }}>Raúl</h2>
                            <h2 style={{ fontSize: '80px' }}>Oyarzún</h2>
                            <h2 className='text-center'>Estudiante autodidacta y fanatico de las tecnologias, y podre ayudarte en tu incursion en tus hobbys.</h2>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            <Card bg='dark text-white rounded-0' className="card-fondo2">
                <Card.Body style={{ height: '700px' }}>
                    <h3 className='' style={{ height: '500px' }}></h3>
                    <h2 className='text-center' style={{ fontSize: '70px' }}>Por que imprimir en 3D?</h2>
                    <h2 className='text-center'>Nuestras Figuras 3D se crean a partir de tus propias fotografías o diseños, lo que las convierte en un regalo perfecto y una pieza decorativa única para tu hogar u oficina. </h2>

                </Card.Body>
            </Card>
        </>
    )
}
