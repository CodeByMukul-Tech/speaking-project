import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

const Paramscomp = () => {
  const { id } = useParams();
  
  // Assuming images are located in the "public/images" folder
  const imageUrl = `/images/${id}.jpeg`;

  return (
    <Fragment>
      <h1>Param Page</h1>
      <img src={imageUrl} alt={`Image for ${id}`} />
    </Fragment>
  );
};

export default Paramscomp;
