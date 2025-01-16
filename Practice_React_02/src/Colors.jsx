import { Component } from "react";
import { useState } from "react";

class Car extends Component {
    constructor() {
        super();
        this.state = {
            Name: "BJP",
            images: "Bjp.jpeg",
            te: "Since 2014, it has been the ruling political party in India under the incumbent Prime Minister Narendra Modi"
        }
    }
    change = () => {
        this.setState({
            Name: "SupreCourt",
            images: "superme.png",
            te: "The Supreme Court of India is the apex judicial body under the Constitution of India. Article 124 of the Constitution states that “There shall be a Supreme Court of India."
        })
    }

    render() {
        return (
            <div>
                <div>
                    <img src={this.state.images} alt={this.state.images} />
                </div>
                <h1> {this.state.Name} </h1>
                <p> {this.state.te} </p>
                <button onClick={this.change}>Change</button>
            </div>
        )
    }
}



export default Car;