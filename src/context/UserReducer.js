export const reducer = (globalState, action) => {
    switch (action.type) {
        case "LOGIN_EXITOSO":
            localStorage.setItem('token', action.payload.token)

            return {
                ...globalState,
                authStatus: true
            }

        case "REGISTRAR_USUARIO":
            localStorage.setItem('token', action.payload.token)

            return {
                ...globalState,
                authStatus: true
            }

        case "OBTENER_USUARIOS":
            console.log('globalState', globalState)
            return {
                ...globalState,
                authStatus: true,
                usersData: action.payload
            }

        default:
            return globalState
    }
}