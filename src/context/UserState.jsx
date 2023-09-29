import { useReducer } from "react"
import UsersContext from "./UsersContext"
import { reducer } from "./UserReducer"
import { axiosClient } from "../config/api.js"

export const UserState = ({ children }) => {

    const initialState = {
        users: [
            {
                id: 0,
                nombre: 'Ra',
                apellido: 'Oy',
                rut: '1555555-0',
                edad: 20,
                correo: 'raoy@mail.com'
            }
        ]
    }

    const [globalState, dispatch] = useReducer(reducer, initialState)

    const getUsers = async () => {
        try {
            const response = await axiosClient.get('/users')
            //console.log(response.data)

            dispatch({
                type: 'OBTENER_USUARIOS',
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <UsersContext.Provider
            value={{
                usersData: globalState.users,
                getUsers,
            }}
        >
            {children}
        </UsersContext.Provider>
    )
}