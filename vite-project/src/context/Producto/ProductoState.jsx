import { useReducer } from 'react'
import ProductoContext from './ProductoContext'
import { productoReducer } from './ProductoReducer'

export const ProductoState = ({ children }) => {
    const initialState = {
        producto: [],
    }

    const [globalState, dispatch] = useReducer(productoReducer, initialState)

}