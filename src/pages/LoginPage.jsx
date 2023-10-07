import { Login } from "../components/Login"
import Card from "react-bootstrap/Card"

export const LoginPage = () => {
    return (
        <>
            <Card bg='black text-white rounded-0' style={{ height: '100px' }}>
                <div className="text-center" >Login Page</div>
            </Card>

            <Login />

        </>
    )
}
