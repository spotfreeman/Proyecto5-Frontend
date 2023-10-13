export const SolicitudReducer = (globalState, action) => {
    switch (action.type) {

        case 'OBTENER_SOLICITUDES':
            return {
                ...globalState,
                newSolicitud: action.paylod
            }

        case 'NUEVA_SOLICITUD':
            return {
                ...globalState
            }

        case 'DELETE_SOLICITUD':
            return {
                ...globalState
            }

        default:
            return globalState
    }
}