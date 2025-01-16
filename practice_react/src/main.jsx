import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Display.css'
import  Display  from './Display'
import Test from './Test'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Display/>
  <Test name = "mayank" password = "312"/>
  </StrictMode>
)
