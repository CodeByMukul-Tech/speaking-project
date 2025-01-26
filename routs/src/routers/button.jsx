import React from "react";
import { useNavigate } from "react-router-dom";


const About_button = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <div>
      <h1>Button Page</h1>
      <button onClick={handleClick}>Go to About</button>
    </div>
  );
}

export default About_button;