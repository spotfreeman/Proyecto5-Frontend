import { useContext, useEffect } from "react"
import UsersContext from "../context/UsersContext"
import { Navigate } from "react-router-dom"


export const PrivateRoute = ({ children }) => {
    const userCtx = useContext(UsersContext)
    const { authStatus, verifyingToken } = userCtx
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                await verifyingToken()
                setLoading(false)
            } catch (error) {
                console.error('Error al verificar TOKEN :', error)
                setLoading(false)
            }
        }
        fetchData()
    }, [authStatus, verifyingToken])

    if (loading) return null

    return (
        <>
            {
                authStatus ? (<> {children} </>) : (<Navigate to='/login' replace />)
            }
        </>
    )
}