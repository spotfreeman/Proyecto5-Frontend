import { useContext, useState, useEffect } from 'react'
import SolicitudContext from '../../context/Solicitud/SolicitudContext'

export const SolicitudTable = () => {

    const [solicitud, setSolicitud] = useState([])

    const globalContext = useContext(SolicitudContext)

    const { getSolicitud, deteleSolicitud } = globalContext;

    const getSolicitudes = async () => {
        const data = await getSolicitud()
        setSolicitud(data)
    }

    useEffect(() => {
        getSolicitudes()
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Titulo</th>
                                    <th>Descripcion</th>
                                    <th>Nombre</th>
                                    <th>Accion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    solicitud.map(sol => {
                                        <tr key={sol._id}>
                                            <td>{sol.titulo}</td>
                                            <td>{sol.descripcion}</td>
                                            <td>{sol.nombre}</td>
                                            <td><button onClick={() => (deteleSolicitud(sol._id))}>Borrar</button></td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}
