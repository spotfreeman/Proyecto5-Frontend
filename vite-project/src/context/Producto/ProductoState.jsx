import { useReducer } from 'react'
import ProductoContext from './ProductoContext'
import { ProductoReducer } from './ProductoReducer'
import { axiosClient } from '../../config/api.js'

export const ProductoState = ({ children }) => {
    const initialState = {
        producto: [],
    }

    const [globalState, dispatch] = useReducer(ProductoReducer, initialState)

    const getProducto = async () => {
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