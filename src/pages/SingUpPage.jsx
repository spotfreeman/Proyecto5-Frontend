import Footer from "../components/Footer"
import { SingUp } from "../components/SingUp"
import Card from "react-bootstrap/Card"

export const SingUpPage = () => {
    return (
        <>
            <Card>
                <div className="text-center"><h2>Pagina de Registro</h2></div>
            </Card>

            <SingUp />

        </>

    )
}
