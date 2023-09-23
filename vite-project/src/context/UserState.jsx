import UsersContext from "./UsersContext"

export const UserState = ({ children }) => {
    const initialState = {
        users: [
            {
                id: 0,
                nombre: 'Raul',
                apellido: 'Oyarzun',
                rut: '15538730-0',
                edad: 40,
                correo: 'r.oyarzun83@gmail.com'
            }
        ]
    }

    return (
        <UsersContext.Provider value={{ initialState }}> {children} </UsersContext.Provider>
    )
}