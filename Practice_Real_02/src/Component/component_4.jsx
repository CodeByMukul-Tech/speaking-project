import { Fragment, useContext } from "react";
import { Authentication, CartAdder } from "./component_3";
// import Add_to_Cart from "./Component_1";
function navbar() {
    const { user } = useContext(Authentication);
    const { cart } = useContext(CartAdder);

    return (
        <Fragment>
            <nav>


                <h2>
                    My E-comerce App
                </h2>
                <p>welcome
                    ,{user ? user.name : "guest"}
                </p>
                <p>
                    Cart Item : {cart.lenght}
                </p>
            </nav>


        </Fragment>
    )
}
export default navbar;