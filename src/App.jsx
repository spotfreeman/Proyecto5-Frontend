//import './App.css'
import NavBar from './components/Navbar'
import { UserState } from './context/UserState'
import { AppRouter } from './routes/AppRouter'
import { ProductoState } from './context/Producto/ProductoState'

function App() {
  return (
    <>
      <NavBar />

      <UserState>
        <ProductoState>
          <AppRouter />
        </ProductoState>
      </UserState>
    </>
  )
}

export default App
