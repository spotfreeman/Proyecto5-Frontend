import { useReducer } from 'react'
import ProductoContext from './ProductoContext'
import { ProductoReducer } from './ProductoReducer'
import { axiosClient } from "../../config/api.js"

export const ProductoState = ({ children }) => {
    const initialState = {
        producto: [],
    }

    const [globalState, dispatch] = useReducer(ProductoReducer, initialState)

    const getProductos = async () => {
        try {
            const response = await axiosClient.get('/producto')

            dispatch({

                // TYPE se manda al SWITH del REDUCER
                type: 'OBTENER_PRODUCTOS',
                // Siempre es .data
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }





    return (
        <ProductoContext.Provider
            value={{
                producto: globalState.producto,
                getProductos
            }}
        >
            {children}
        </ProductoContext.Provider>

    )

}