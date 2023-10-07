import { useReducer } from 'react'
import ProductoContext from './ProductoContext.js'
import { ProductoReducer } from './ProductoReducer.js'
import { axiosClient } from "../../config/api"

export const ProductoState = ({ children }) => {
    const initialState = {
        productos: [],
    }

    const [globalState, dispatch] = useReducer(ProductoReducer, initialState)

    const getProductos = async () => {
        try {
            const response = await axiosClient.get('/productos')

            dispatch({

                // TYPE se manda al SWITH del REDUCER
                type: 'OBTENER_PRODUCTOS',
                // Siempre es .data
                payload: response.data
            })
            return response.data

        } catch (error) {
            //console.log(error)
        }
    }

    return (
        <ProductoContext.Provider
            value={{
                productos: globalState.productos,
                getProductos
            }}
        >
            {children}
        </ProductoContext.Provider>
    )
}