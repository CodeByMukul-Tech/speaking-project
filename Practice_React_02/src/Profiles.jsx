import React, { Component } from "react";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            model: "Mercedes",
            Price: "1.2crore"
        };
    }

    render() {
        return (
            <div>
               
                    <li>Car is :  {this.state.model} </li>
                    <li>Model is :{this.state.Price} </li>
                    <p>Car color is :  {this.props.color} </p>
            </div>
        )
    }
}


class Garage extends React.Component{
    render(){
        return(
            <div>
                <h1>Hellow every body</h1>
                <Profile/>
            </div>
        )
    }
}



export default Garage; 