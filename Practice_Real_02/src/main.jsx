import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Assemble from './Assemble.jsx'
import { Authenticator } from './Component/Component_1.jsx'
import './index.css'
import App from './App.jsx'
import { LoginCard } from './Component/component_3.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authenticator>
      <App />
      <LoginCard />
    </Authenticator>
  </StrictMode>,
)
