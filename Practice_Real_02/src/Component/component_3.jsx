import { Fragment, useContext } from "react";
import { Authenticate_user } from "./Component_1";
import "./login_Card.css";


export default function LoginCard() {
    const { login } = useContext(Authenticate_user);


    return (
        <Fragment>
            <div className="card">
                <h2 className="card-title">Login Form</h2>
                <form className="form">
                    <div className="form-group">
                        <label htmlFor="image">Upload Image</label>
                        <input type="file" id="image" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Enter your name" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" placeholder="Enter your phone number" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input type="number" id="age" placeholder="Enter your age" className="form-control" />
                    </div>
                    <button type="submit" onClick={(e) => {
                        const userdata = e.target.value;
                        login(userdata)
                    }} className="submit-btn">Submit</button>
                </form>
            </div>
        </Fragment>
    );
}
