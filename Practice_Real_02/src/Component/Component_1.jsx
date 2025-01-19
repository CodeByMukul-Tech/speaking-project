import React, { createContext, useState } from "react";
import { Fragment } from "react";

// Initialize the context API
const Authenticate_user = createContext();

function Authenticator({ children }) { // Fix the prop name
    const [user, setUser] = useState(null);
    const [cart, setCart] = useState([]);

    const login = (userdata) => {
        setUser(userdata);
        console.log(setUser);
        
    };

    const logout = () => {
        setUser(null);
        setCart([]);
    };

    const add_cart = (item) => {
        setCart((preCart) => [...preCart, item]);
    };

    return (
        <Fragment>
            <Authenticate_user.Provider value={{ user, login, logout, cart, add_cart }}>
                {children} {/* Render the children */}
            </Authenticate_user.Provider>
        </Fragment>
    );
}

export default Authenticator;
export { Authenticate_user }; // Export the context for use in other components
