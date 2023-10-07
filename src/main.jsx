import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PayPalScriptProvider
    options={
      {
        "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID
      }
    }
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PayPalScriptProvider>

)
