import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Footer = () => {
    return (
        <>

            <Card bg='dark text-white rounded-0'>

                <Row>
                    <Col>
                        <h3 className='text-center'>Redes Sociales</h3>
                        <ul className="list-group text-center">
                            <li className="list-group-item bg-transparent border-0 text-white">
                                <i className="bi bi-twitter" style={{ fontSize: '5rem' }} ></i>
                            </li>
                            <li className="list-group-item bg-transparent border-0 text-white">
                                <i className="bi bi-facebook" style={{ fontSize: '5rem' }} ></i>
                            </li>
                            <li className="list-group-item bg-transparent border-0 text-white">
                                <i className="bi bi-instagram" style={{ fontSize: '5rem' }} ></i>
                            </li>
                        </ul>
                    </Col>

                    <Col>
                        <h3 className='text-center'>Datos de Contacto</h3>
                        <ul className="list-group text-center">
                            <li className="list-group-item bg-transparent border-0 text-white">
                                <i className="bi bi-geo-alt" style={{ fontSize: '2rem' }} > Irarrazaval N°9999, Ñuñoa</i>
                            </li>
                            <li className="list-group-item bg-transparent border-0 text-white">
                                <i className="bi bi-telephone-inbound" style={{ fontSize: '2rem' }} > Fono : 555-55-55</i>
                            </li>
                            <li className="list-group-item bg-transparent border-0 text-white">
                                <i className="bi bi-stopwatch" style={{ fontSize: '2rem' }} > Horarios : 09:00 - 18:00</i>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <div className='text-center' style={{ height: '150px' }}>
                    <h4>Proyecto 5 - e-Commerce // Creado por ROB</h4>
                </div>
            </Card>



        </>
    )
}
export default Footer