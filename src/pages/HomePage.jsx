import Footer from "../components/Footer"
import { Headers } from "../components/Headers"
import { ProductoTable } from "../components/ProductoTable"
import { UserList } from "../components/UserList"

import { Card } from 'react-bootstrap'

export const HomePage = () => {
    return (
        <>
            <h1 className="text-center"> [3D]Print </h1>
            <Card>
                <Card.Body>Podria colocar un carroucel</Card.Body>
            </Card>
            <Headers />

            <UserList />



            <Footer />
        </>
    )
}
