export const productoReducer = (globalState, action) => {
    switch (action.type) {
        case 'OBTENER_PRODUCTO':
            return {
                ...globalState,
                newProducto: action.payload
            }

        default:
            return globalState
    }
}