import { useReducer } from "react"
import UsersContext from "./UsersContext.js"
import { reducer } from "./UserReducer.js"
import { axiosClient } from "../config/api"

export const UserState = ({ children }) => {

    const initialState = {
        users: [
            {
                id: 0,
                nombre: '',
                apellido: '',
                rut: '',
                edad: 0,
                correo: ''
            }
        ],
        authState: false
    }

    const [globalState, dispatch] = useReducer(reducer, initialState)

    const getUsers = async () => {
        try {
            const response = await axiosClient.get('/api/v1/users')
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

    const loginUser = async (dataForm) => {
        try {
            const response = await axiosClient.post('/login', dataForm)
            dispatch(
                {
                    type: "LOGIN_EXITOSO",
                    payload: response.data
                }
            )
            console.log('Login exitoso.')
        } catch (error) {
            console.log(error)
        }
    }

    const verifyingToken = async () => {
        const token = localStorage.getItem('token')
        if (token) {
            axiosClient.defaults.headers.common['Authorization'] = token
        } else {
            delete axiosClient.defaults.headers.common['Authorization']
        }
        const response = await axiosClient.get('/veryfy-token')
        dispatch({
            type: "OBTENER_USUARIO",
            payload: response.data
        })
    }

    return (
        <UsersContext.Provider
            value={{
                usersData: globalState.users,
                Authorization: globalState.authStatus,
                getUsers,
                singupUser,
                loginUser,
                verifyingToken
            }}
        >{children}</UsersContext.Provider>
    )
}