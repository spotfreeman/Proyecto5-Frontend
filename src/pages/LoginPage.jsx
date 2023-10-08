import { Container } from "react-bootstrap"
import { Login } from "../components/Login"
import Card from "react-bootstrap/Card"

export const LoginPage = () => {
    return (
        <>
            <Card bg='black text-white rounded-0' style={{ height: '10px' }}>
                <Container className="text-center">
                    <div className="text-center" ></div>
                </Container>

            </Card>

            <Login />

        </>
    )
}
