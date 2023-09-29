import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


export const Footer = () => {
    return (
        <>
            <Card.Body fixed='bottom'>
                <Card.Text>
                    <Card bg='dark text-white'><h5 className='text-center'>Proyecto 5 : e-Commerce -  Creado por ROB</h5>
                    </Card>
                </Card.Text >
            </Card.Body >
        </>
    )
}
export default Footer