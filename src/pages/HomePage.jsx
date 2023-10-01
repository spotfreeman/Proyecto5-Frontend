import { Headers } from "../components/Headers"

import { UserList } from "../components/UserList"

import { Card } from 'react-bootstrap'

export const HomePage = () => {
    return (
        <>
            <Card bg='dark text-white rounded-0'>
                <Card.Body style={{ height: '300px', }} >
                    <h1>Imprimir es Facil!</h1>
                    <p>Con la guía correcta. Transfórmate en el programador que las empresas amarán y paga sólo $49.90 el primer año.</p>
                </Card.Body>
            </Card>

            {/* <Headers /> */}

            <Card>
                <Card.Body style={{ height: '300px' }}>
                    <h1>Mi nombre es</h1>
                    <h1>Raul</h1>
                    <h1>Oyarzun</h1>
                    <h3>Con la guía correcta. Transfórmate en el programador que las empresas amarán y paga sólo $49.90 el primer año.</h3>
                </Card.Body>
            </Card>

            <Card bg='dark text-white rounded-0'>
                <Card.Body style={{ height: '300px' }}>
                    <h1>Por que imprimir en 3D?</h1>
                </Card.Body>
            </Card>

            <UserList />
        </>
    )
}
