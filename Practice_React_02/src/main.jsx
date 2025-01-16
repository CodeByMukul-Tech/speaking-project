import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './Neflix.css'
import Times from './api/Times.json'
import Models from './Models'
import './Netflixcard.css'
import Next from './Next'
// import './Neflix.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Garage color="Red" /> */}
    {/* < Car/> */}
    {/* <ParentComponent/> */}
    {/* <Signup/> */}
    {/* {Times.map((cuur)=>{ */}
    {/* <Models data = { cuur}/> */}
    {/* // })}  */}
    <Next/>


  </StrictMode>,
)
