import React from "react";
import '../styles-sheets/Testimony.css';

export function Testimony(props) {
  return (
    <div className="testimony-container">
      <img
        className="testimony-img"
        src={require(`../img/${props.img}.jpg`)}
        alt='foto de perfil'
      /> 
      <div className="testimony-text-container">
        <p className="nombre-testimonio"><strong>{props.name} in {props.country }</strong></p>
        <p className="testimony-charge">{props.charge} in <strong>{props.company} </strong></p>
        <p className="testimony-text">"{props.testimony}"</p>
      </div>
  </div>
  );
}

// export default Testimony;