import React from 'react';
import { Link } from "react-router-dom";
import '../../assets/css/cards.css';

export default function Cards({ cardImg, cardAlt, cardTitle, cardDescription, linkTo }) {
  return (
    <div className="card">
      <img src={cardImg} className="card-img-top" alt={cardAlt} />
      <div className="card-body ">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">{cardDescription}</p>
        <Link to={linkTo} className="btn btn-primary">Jegyvásárlás</Link>
      </div>
    </div>
  );
}
