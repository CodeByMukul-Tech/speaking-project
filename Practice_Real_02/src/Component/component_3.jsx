import { Fragment, useContext, useState } from "react";
import { Authenticate_user } from "./Component_1";
// import "./login_Card.css";

function LoginCard() {
    const { login } = useContext(Authenticate_user);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        age: "",
        image: null,
    });

    // Handle input changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    // Handle image upload
    const handleImageChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            image: e.target.files[0],
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        login(formData); // Pass form data to the login function
    };

    return (
        <Fragment>
            <div className="card">
                <h2 className="card-title">Login Form</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="image">Upload Image</label>
                        <input
                            type="file"
                            id="image"
                            className="form-control"
                            onChange={handleImageChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            className="form-control"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="Enter your phone number"
                            className="form-control"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input
                            type="number"
                            id="age"
                            placeholder="Enter your age"
                            className="form-control"
                            value={formData.age}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="submit-btn">
                        Submit
                    </button>
                </form>
            </div>
        </Fragment>
    );
}

export { LoginCard };
