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

        // Nuevo codigo
        case 'GET_ONE_PRODUCT':
            return {
                ...globalState,
                newProducto: action.payload
            }

        case 'DELETE_PRODUCT':
            return {
                ...globalState,
                newProducto: action.payload
            }


        default:
            return globalState;
    }

}