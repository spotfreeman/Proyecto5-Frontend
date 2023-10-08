// COMPONENTS
import { Container } from "react-bootstrap"
import { SingUp } from "../components/SingUp"

//BOOTSTRAP
import Card from "react-bootstrap/Card"

export const SingUpPage = () => {
    return (
        <>
            <Card bg='black text-white rounded-0' style={{ height: '10px' }}>
                <Container className="text-center">
                    <div className="text-center" ></div>
                </Container>
            </Card>

            <SingUp />

        </>

    )
}
