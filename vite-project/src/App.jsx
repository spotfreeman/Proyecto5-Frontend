//import './App.css'
import NavBar from './components/Navbar'

import { UserState } from './context/UserState'
import { AppRouter } from './routes/AppRouter'

function App() {
  return (
    <>
      <NavBar />

      <UserState>
        <AppRouter />
      </UserState>
    </>
  )
}

export default App
