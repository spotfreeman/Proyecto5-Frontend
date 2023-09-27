import { useReducer } from 'react'
import ProductoContext from './ProductoContext'
import { productoReducer } from './ProductoReducer'

export const ProductoState = ({ children }) => {
    const initialState = {
        producto: [],
    }

    const [globalState, dispatch] = useReducer(productoReducer, initialState)

    getProducto = async () => {
        try {
            const response = await axiosClient.get('/productos')
            dispatch({
                // TYPE se manda al SWITH del REDUCER
                type: 'OBTENER_PRODUCTO',
                // Siempre es .data
                payload: response.data
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <ProductoContext.Provider
            value={{
                producto: globalState.producto,
                getProducto
            }}
        >
            {children}
        </ProductoContext.Provider>
    )
}