import { Fragment } from "react"
import { NavLink } from "react-router-dom"
import  './Navbar.css'
import About_button from "./button"

function Navbar(){
    return(
        <Fragment>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={({isActive})=>isActive ? "actives": ""  }  >Home</NavLink>
                        
                    </li>
                    <li>
                        <NavLink to="/about" className={({isActive})=>isActive ? "actives": ""}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard" className={({isActive})=>isActive ? "actives": ""}>Dashboard</NavLink>
                    </li>
                </ul>
            </nav>
        </Fragment>

    )
}

export default Navbar;