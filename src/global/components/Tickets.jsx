import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import '../../assets/css/tickets.css'
import showsData from "../../assets/showsData.json";
import SeatReservation from "./SeatRows.jsx";
import squareGreen from '../../assets/media/png/square-green.png';
import squareRed from '../../assets/media/png/square-red.png';
import squareOrange from '../../assets/media/png/square-orange.png';
import squareGray from '../../assets/media/png/square-grey.png';
import TheaterLayout from "../components/TheaterLayout.jsx";


export default function Tickets() {
  const selectedShow = useLoaderData();
  const { showsId } = useParams();
 

  if (!selectedShow) {
    return <div>Show not found</div>;
  }

  const formattedDate = new Date(selectedShow.date).toLocaleDateString('hu-HU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="page-content container">
      <main>
        <div className="fs-1 fw-bold fst-italic text-center mb-5">
          <h1>Jegyvásárlás</h1>
        </div>
        <section>
          <div className="jegy-content">
            <div>
              <img src={selectedShow.img} alt={selectedShow.alt} />
              <div className="fs-3 fw-bold fst-italic">{selectedShow.title}</div>
              <p className="fs-4 fw-bold">{formattedDate}</p>
            </div>
            <div className="p-4">{selectedShow.description}</div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            
            <div className="fs-5 fw-bold mb-3 me-3">Jelmagyarázat:</div>
            <p className="fs-5 me-2">
              <img className="me-2" src={squareGreen} alt="Szabad" />Szabad
            </p>
            <p className="fs-5 me-2">
              <img className="me-2" src={squareRed} alt="Foglalt" />Foglalt
            </p>
            <p className="fs-5 me-2">
              <img className="me-2" src={squareOrange} alt="Kosárban" />Kosárban
            </p>
            <p className="fs-5 me-2"><img className="me-2" src={squareGray}/>Nem foglalható</p>
          </div>
          <TheaterLayout />
        </section>
      </main>
    </div>
  );
}

