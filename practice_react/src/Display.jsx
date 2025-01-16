import React, { useState } from 'react';

function Display() {
    const [index, setIndex] = useState(0); // Use state for index
    const images = [
        "bali_city.jpeg",
        "egypt_city.jpeg",
        "Euro_city.jpeg",
        "Korea_city.jpeg",
        "pink_city.jpeg",
        "seens.jpeg"
    ];

    let seens = document.getElementById("seen");

    function Previous() {
        setIndex(index - 1 < 0 ? images.length - 1 : index - 1); // Go to last image if index is negative
        seens.classList.toggle(".previous")

    }

    function After() {
        setIndex((index + 1) % images.length); // Cycle back to the first image if it exceeds the array length
        seens.classList.toggle("after")
    }

    return (
        <div className="cards">
            <div>
                <img id="seen" src={images[index]} alt={images[index]} />
            </div>
            <div>
                <button onClick={Previous}>Previous</button>
                <button onClick={After}>After</button>
            </div>
            <p></p>
        </div>
    );
}

export default Display;
