import React, { Component } from "react";

class Reload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "UserId",
            Image: "User.jpeg"
        };
    }

    static getDerivedStateFromProps(nextProps, nextState) {
        const { name, imgname } = nextProps;
        const { id, Image } = nextState;

        if (name !== id || imgname !== Image) {
            return {
                id: name,
                Image: imgname
            };
        }
        return null;
    }

    render() {
        const { Image, id } = this.state;

        return (
            <div>
                <input
                    type="text"
                    id="name"
                    placeholder="Enter name"
                    onChange={(e) => this.props.updateName(e.target.value)} // Handling name change
                />
                <input
                    type="file"
                    id="file"
                    onChange={(e) => this.props.updateImage(e.target.files[0])} // Handling file change
                />
                <img src={Image} alt={id} />
                <h1>{id}</h1>
            </div>
        );
    }
}

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            imgname: "User.jpeg"
        };
    }

    updateName = (name) => {
        this.setState({ name });
    };

    updateImage = (file) => {
        if (file) {
            const imgUrl = URL.createObjectURL(file); // Create a URL for the selected file
            this.setState({ imgname: imgUrl });
        }
    };

    render() {
        return (
            <div>
                <Reload
                    name={this.state.name}
                    imgname={this.state.imgname}
                    updateName={this.updateName} // Passing the updateName function as prop
                    updateImage={this.updateImage} // Passing the updateImage function as prop
                />
            </div>
        );
    }
}

export default Signup;
