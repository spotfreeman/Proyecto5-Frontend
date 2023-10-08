import React, { useContext } from 'react'
import UsersContext from '../context/UsersContext'

export const UserUpdate = () => {

    const userCtx = useContext(UsersContext)
    const { usersData } = userCtx
    console.log(userCtx)

    return (
        <>

        </>
    )
}
