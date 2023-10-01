import { Route, Routes } from 'react-router-dom'

import { HomePage } from "../pages/HomePage";
import { ProductosPage } from '../pages/ProductosPage';
import { ContactPage } from '../pages/ContactPage';
import { SingUpPage } from '../pages/SingUpPage';
import { LoginPage } from '../pages/LoginPage';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/productos' element={<ProductosPage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/singup' element={<SingUpPage />} />
                <Route path='/login' element={<LoginPage />} />

                <Route path='*' element={<h1>Error 404 - Pagina no existe </h1>} />
            </Routes>
        </>
    )
}
