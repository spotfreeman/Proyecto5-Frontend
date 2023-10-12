import { useContext, useEffect, useState } from "react"
import SolicitudContext from "../context/Solicitud/SolicitudContext"
import { Container } from "react-bootstrap"

export const SolicitudTable = () => {
    const [solicitudes, setSolicitud] = useState([])
    const globalContext = useContext(SolicitudContext)
    const { getSolicitud } = globalContext;

    const getAllSolicitud = async () => {
        const data = await getSolicitud()
        setSolicitud(data)
    }

    useEffect(() => {
        getAllSolicitud()
    }, [])

    return (
        <>
            <Container>
                <div>
                    {solicitudes.map(solicitud => {
                        return (
                            <>
                                <h2>{solicitud.titulo}</h2>
                                <h3>{solicitud.descripcion}</h3>
                                <h3>{solicitud.nombre}</h3>
                            </>
                        )
                    })}
                </div>
            </Container>
        </>
    )
}

