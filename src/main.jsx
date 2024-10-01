import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/node_modules/flowbite/dist/flowbite.min.css'
import './index.css'
import App from './App.jsx'
import 'persistent/inventory'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
