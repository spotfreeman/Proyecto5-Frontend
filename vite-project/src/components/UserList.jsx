import { useContext } from "react"
import UsersContext from "../context/UsersContext"

export const UserList = () => {
    // ctx se coloca por convencion en React por entenderse como CONTEXTO
    // useContext es un Hook
    const globalContext = useContext(UsersContext)
    console.log(globalContext)

    const { users } = globalContext.initialState

    return (
        <>
            <h2>Lista de Usuarios</h2>

            {
                users.map(user => {
                    return (
                        <div key={user.id}>
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