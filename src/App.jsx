//import './App.css'
import NavBar from './components/Navbar'
import { ProductoState } from './context/Producto/ProductoState'

import { UserState } from './context/UserState'
import { AppRouter } from './routes/AppRouter'

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
