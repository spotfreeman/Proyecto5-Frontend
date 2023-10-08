import { useReducer } from "react"
import UsersContext from "./UsersContext.js"
import { reducer } from "./UserReducer.js"
import { axiosClient } from "../config/api"

export const UserState = ({ children }) => {

    const initialState = {
        usersData: [
            {
                id: '',
                nombre: '',
                apellido: '',
                rut: '',
                correo: '',
            }
        ],
        authStatus: false
    }
    const [globalState, dispatch] = useReducer(reducer, initialState)

    const getUsers = async () => {
        try {
            const response = await axiosClient.get('/users')

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
            window.alert('Bienvenido!, usuario creado correctamente.')
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
            window.alert('Usuario Verificado!')
        } catch (error) {
            console.log(error)
        }
    }

    const verifyingToken = async () => {
        const token = localStorage.getItem('token')
        if (token) {
            axiosClient.defaults.headers.common['authorization'] = token
        } else {
            delete axiosClient.defaults.headers.common['authorization']
        }
        const response = await axiosClient.get('/verify-token')

        dispatch({
            type: "OBTENER_USUARIO",
            payload: response.data
        })
    }

    const logout = () => {
        dispatch({
            type: "CERRAR_SESION"
        })
    }
    return (
        <UsersContext.Provider
            value={{
                usersData: globalState.users,
                authStatus: globalState.authStatus,
                getUsers,
                singupUser,
                loginUser,
                verifyingToken,
                logout
            }}
        >{children}</UsersContext.Provider>
    )
}