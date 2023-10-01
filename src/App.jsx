import './App.css'
import NavBar from './components/Navbar'
import { UserState } from './context/UserState'
import { AppRouter } from './routes/AppRouter'
import { ProductoState } from './context/Producto/ProductoState'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <NavBar />

      <UserState>
        <ProductoState>
          <AppRouter />
        </ProductoState>
      </UserState>

      <Footer />
    </>
  )
}

export default App
