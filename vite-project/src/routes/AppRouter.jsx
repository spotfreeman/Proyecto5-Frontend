import { HomePage } from "../pages/HomePage"
import { Routes, Route } from 'react-router-dom'

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>
        </>
    )
}
