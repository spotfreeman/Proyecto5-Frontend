//AppRouter.jsx
// REACT
import { Navigate, Route, Routes } from 'react-router-dom'

//PAGES
import { HomePage } from "../pages/HomePage";
import { ProductosPage } from '../pages/ProductosPage';
import { SingUpPage } from '../pages/SingUpPage';
import { LoginPage } from '../pages/LoginPage';
import { PrivateRoute } from './PrivateRouter';
import { ShoppingPage } from '../pages/ShoppingPage';

//COMPONENTS
import { NavbarComponent } from "../components/NavbarComponent";
import { ProdPage } from '../pages/ProdPage';
import { PageProducts } from '../pages/PageProducts';


export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<NavbarComponent />}>
                    <Route index element={<HomePage />} />
                    <Route path='productos' element={<ProductosPage />} />
                    <Route path='singup' element={<SingUpPage />} />
                    <Route path='login' element={<LoginPage />} />
                    <Route path='productos/:id' element={<ProdPage />} />
                    <Route path='products' element={<PageProducts />} />

                    <Route
                        path='productos/*'
                        element={
                            <PrivateRoute>
                                <ShoppingPage />
                            </PrivateRoute>
                        }
                    />
                    <Route path='*' element={<Navigate to='/login' />} />
                </Route>
            </Routes>
        </>
    )
}
