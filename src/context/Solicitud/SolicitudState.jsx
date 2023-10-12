import { useReducer } from "react"
import { SolicitudReducer } from "./SolicitudReducer"
import { axiosClient } from "../../config/api"
import SolicitudContext from "./SolicitudContext"


export const SolicitudState = ({ children }) => {
    const initialState = {
        solicitud: []
    }

    const [globalState, dispatch] = useReducer(SolicitudReducer, initialState)

    const getAllSolicitudes = async () => {
        try {
            const response = await axiosClient.get('/solicitud')
            dispatch({
                type: 'OBTENER_SOLICITUDES',
                payload: response.data
            })
            return response.data
        } catch (error) {

        }
    }

    const nuevaSolicitud = async (dataForm) => {
        try {
            const response = await axiosClient.post('/solicitud', dataForm)
            dispatch({
                type: 'NUEVA_SOLICITUD',
                payload: response.data
            })
        } catch (error) {

        }
    }

    return (
        <SolicitudContext.Provider
            value={{
                solicitud: globalState.solicitud,
                getAllSolicitudes,
                nuevaSolicitud

            }}>
            {children}
        </SolicitudContext.Provider>
    )
}