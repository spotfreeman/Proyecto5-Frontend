import './App.css'

import { UserState } from './context/UserState'
import { ProductoState } from './context/Producto/ProductoState'
import { AppRouter } from './routes/AppRouter'

function App() {
  return (
    <>


      <UserState>
        <ProductoState>
          <AppRouter />
        </ProductoState>
      </UserState>

    </>
  )
}

export default App
