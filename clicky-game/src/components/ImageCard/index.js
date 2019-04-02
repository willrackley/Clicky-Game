import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
<div className="card" onClick={ () => props.handleClick(props.id)} img-id={props.id}>
       <img alt={props.desc} src={props.src} className="card-img-top" /> 
    </div>
  );
}

export default ImageCard;
