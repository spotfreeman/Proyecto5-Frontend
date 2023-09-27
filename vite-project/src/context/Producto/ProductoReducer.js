export const productoReducer = (globalState, action) => {
    switch (actiion.type) {
        case 'OBTENER_USUARIOS':
            return {
                ...globalState,
                newProducto: action.payload
            }
            break;

        default:
            return globalState
    }
}