// COMPONENTS
import { SingUp } from "../components/SingUp"

//BOOTSTRAP
import Card from "react-bootstrap/Card"

export const SingUpPage = () => {
    return (
        <>
            <Card>
                <div className="text-center" ><h2>Pagina de Registro</h2></div>
            </Card>

            <SingUp />

        </>

    )
}
