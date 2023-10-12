import { Container } from "react-bootstrap"
import { SolicitudTable } from "../components/SolicitudTable"
import { SolicitudForm } from "../components/SolicitudForm"

export const SolicitudPage = () => {
    return (
        <>
            <Container>
                <h2>Titulo : Solicitudes </h2>
            </Container>

            <Container>
                <h2>Ingresar Solicitud</h2>
                <SolicitudForm />
            </Container>


            <Container>
                <h2>Listado de Solicitudes</h2>
                <SolicitudTable />
            </Container>
        </>
    )
}