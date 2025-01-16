import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Assemble from './Assemble.jsx'
// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Assemble/>
  </StrictMode>,
)
