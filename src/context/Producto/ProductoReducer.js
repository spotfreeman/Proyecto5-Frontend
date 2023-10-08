export const ProductoReducer = (globalState, action) => {
    switch (action.type) {

        case 'OBTENER_PRODUCTOS':
            return {
                ...globalState,
                newProducto: action.payload
            }

        case 'OBTENER_UN_PRODUCTO':
            return {
                ...globalState,
                newProducto: action.payload
            }

        default:
            return globalState;
    }

}