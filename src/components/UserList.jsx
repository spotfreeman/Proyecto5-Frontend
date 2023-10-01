import { useContext, useEffect } from "react"
import UsersContext from "../context/UsersContext"

export const UserList = () => {
    // ctx se coloca por convencion en React por entenderse como CONTEXTO
    // useContext es un Hook
    const globalContext = useContext(UsersContext)

    const { usersData, getUsers } = globalContext

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            <h2>Lista de Usuarios</h2>
            {
                usersData.map(user => {
                    return (
                        <div key={user._id}>
                            <h3>{user.nombre} {user.apellido} </h3>
                            <h3>{user.rut} </h3>
                            <h3>{user.correo} </h3>
                        </div>
                    )
                })
            }
        </>
    )
}