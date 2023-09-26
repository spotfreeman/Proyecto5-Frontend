import Footer from "../components/Footer"
import { Headers } from "../components/Headers"
import { UserList } from "../components/UserList"

import { Card } from 'react-bootstrap'

export const HomePage = () => {
    return (
        <>
            <h1>Bienvenido a Home de APP</h1>
            <Card>
                <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
            <Headers />
            <Card>
                <UserList />
            </Card>
            <Card>
                <Card.Body>Contenido 1 </Card.Body>
            </Card>
            <Card>
                <Card.Body>Contenido 2 </Card.Body>
            </Card>
            <Card>
                <Card.Body>Contenido 3 </Card.Body>
            </Card>
            <Card>
                <Card.Body>Contenido 4 </Card.Body>
            </Card>
            <Card>
                <Card.Body>Contenido 5 </Card.Body>
            </Card>
            <Footer />
        </>
    )
}
