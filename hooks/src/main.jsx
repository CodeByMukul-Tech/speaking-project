import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Like_module_upgrade from './Hooks_with_v19/old/Usereducer'
// import FoodDeliveryApp from './Hooks_with_v19/old/useContext'
// import ShoppingCart from './Hooks_with_v19/old/Usememo'/
// import Attendence_of_students from './Hooks_with_v19/old/Usememo'
import Attendence_of_students from './Hooks_with_v19/old/usememo'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
   <Attendence_of_students/>
  </StrictMode>,
)
