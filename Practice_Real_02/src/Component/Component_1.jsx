// this is a context api use it here...
// like warehouse store once distributed any where 
import React, {createContext,useState} from "react";
import { Fragment } from "react";


//initializa the api to send any where
export const Authenticate_user = createContext();

function Authenticator({child}){
    const [user,setuser] = useState(null);
    const [cart,setcart]= useState([]);

    const login =(userdata)=>{
        setuser (userdata);
    };

    const logout = ()=>{
        setuser(null);
        setcart([])
    };

    const add_cart =(item)=>{
        setcart((precart)=>[...precart,item]);
    }


 return(
    <Fragment>
        <Authenticate_user.Provider value={{user,login,logout,cart,add_cart}}>
            {child}
        </Authenticate_user.Provider>


    </Fragment>
 );
};
export default Authenticator ;
// export default Authenticate_user;