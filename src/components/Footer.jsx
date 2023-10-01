import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


export const Footer = () => {
    return (
        <>
            <Container >
                <Card bg='dark text-white rounded-0'>
                    <div className='text-center' style={{ height: '100px' }}>
                        <h3>Footer</h3>
                        <h4>Proyecto 5 - e-Commerce </h4>
                        <h4>Creado por ROB</h4>
                    </div>
                </Card>

            </Container>

        </>
    )
}
export default Footer