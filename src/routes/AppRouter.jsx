import { Routes, Route } from 'react-router-dom'
import { HomePage } from "../pages/HomePage"
import { AboutPage } from "../pages/AboutPage"
import { ProductosPage } from '../pages/ProductosPage'

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/productos' element={<ProductosPage />} />

                <Route path='*' element={<h1>Error 404 - Pagina no existe </h1>} />
            </Routes>
        </>
    )
}
