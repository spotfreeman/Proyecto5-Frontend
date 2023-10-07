import { UserList } from "../components/UserList"
import { Card, Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const HomePage = () => {
    return (
        <>
            <Card bg='dark text-white rounded-0' className="card-fondo">
                <Card.Body style={{ height: '700px', }} >
                    <h1 style={{ fontSize: '100px' }}>Imprimir es Facil!</h1>
                    <p style={{ fontSize: '50px' }}>Con la guía correcta lograras tener tus ideas y diseños en tus manos...</p>
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
                            <h2 style={{ fontSize: '80px' }}>Raul</h2>
                            <h2 style={{ fontSize: '80px' }}>Oyarzun</h2>
                            <h3>Estudiante autodidacta y fanatico de las tecnologias, y podre ayudarte en tu incursion en tus hobbys.</h3>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            <Card bg='dark text-white rounded-0' className="card-fondo2">
                <Card.Body style={{ height: '700px' }}>
                    <h1 style={{ fontSize: '70px' }}>Por que imprimir en 3D?</h1>

                </Card.Body>
            </Card>

            <UserList />
        </>
    )
}
