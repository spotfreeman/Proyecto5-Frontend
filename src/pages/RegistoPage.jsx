import React from 'react'
import { Container } from 'react-bootstrap'

export const RegistoPage = () => {
    return (
        <>
            <Card className='fondo'>
                <Container >
                    <div style={{ height: '200px' }}></div>
                </Container>
                <Container style={{ backgroundColor: '#E3F9E7', width: '600px' }}>
                    <Container style={{ width: '500px', padding: '16px' }}>
                        <Card>
                            <h2> Registro de Usuario Exitoso!</h2>
                        </Card>
                    </Container>
                </Container>

                <Container >
                    <div style={{ height: '500px' }}></div>
                </Container>
            </Card>
        </>
    )
}
