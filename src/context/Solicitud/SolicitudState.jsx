import { useReducer } from "react"
import SolicitudContext from "./SolicitudContext.js"
import { SolicitudReducer } from "./SolicitudReducer.js"
import { axiosClient } from "../../config/api"

export const SolicitudState = ({ children }) => {
    const initialState = {
        solicitudes: [],
    }

    const [globalState, dispatch] = useReducer(SolicitudReducer, initialState)

    const getSolicitud = async () => {
        try {
            const response = await axiosClient.get('/solicitudes')

            dispatch({
                type: 'OBTENER_SOLICITUDES',
                payload: response.data
            })
            return response.data

        } catch (error) {

        }
    }

    const nuevaSolicitud = async (id) => {
        try {
            const response = await axiosClient.post('/solicitudes', id)
            dispatch({
                type: 'NUEVA_SOLICITUD',
                payload: response.data
            })
        } catch (error) {

        }
    }

    const deleteSolicitud = async (id) => {
        try {
            const response = await axiosClient.delete(`/solicitud/${id}`)
            dispatch({
                type: 'DELETE_SOLICITUD',
                payload: response.data
            })
        } catch (error) {

        }
    }

    return (
        <SolicitudContext.Provider
            value={{
                solicitudes: globalState.solicitudes,
                getSolicitud,
                nuevaSolicitud,
                deleteSolicitud

            }}>
            {children}
        </SolicitudContext.Provider>
    )
}