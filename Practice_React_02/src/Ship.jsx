
import React, { Component } from 'react';

class Ship extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Titanic',
            status: 'Docked',
            passengers: 0
        };
        console.log('Constructor: Component is being constructed');
        }
        componentDidMount(){
            
        }

         render() {
        console.log('Render: Component is rendering');
        return (
            <div>
            <h1>Ship Name: {this.state.name}</h1>
            <p>Status: {this.state.status}</p>
            <p>Passengers: {this.state.passengers}</p>
            </div>
        );
        }
    }

    export default Ship;