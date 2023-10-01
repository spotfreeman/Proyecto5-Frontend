import { useReducer } from "react"
import UsersContext from "./UsersContext"
import { reducer } from "./UserReducer"
import { axiosClient } from "../config/api"

export const UserState = ({ children }) => {

    const initialState = {
        users: [
            {
                id: '',
                nombre: 'Ra',
                apellido: 'Oy',
                rut: '1555555-0',
                edad: '20',
                correo: 'raoy@mail.com'
            }
        ],
        // authState: false
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

    const singupUser = async (dataForm) => {
        try {
            const response = await axiosClient.post('/users', dataForm)
            dispatch({
                type: "REGISTRAR_USUARIO",
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
                singupUser
            }}
        >
            {children}
        </UsersContext.Provider>
    )
}