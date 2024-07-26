import React, { useState } from "react";
import '../assets/css/performances.css';
import Cards from "../global/components/Cards.jsx";
import showsData from "../assets/showsData.json";
import leftArrow from '../assets/media/svg/left-arrow-svgrepo-com.svg';
import rightArrow from '../assets/media/svg/right-arrow-svgrepo-com.svg';



export default function Performances() {
    
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
    const handlePreviousMonth = () => {
      setCurrentMonth(prevMonth => prevMonth === 0 ? 11 : prevMonth - 1);
      if (currentMonth === 0) {
        setCurrentYear(prevYear => prevYear - 1);
      }
    };
  
    const handleNextMonth = () => {
      setCurrentMonth(prevMonth => prevMonth === 11 ? 0 : prevMonth + 1);
      if (currentMonth === 11) {
        setCurrentYear(prevYear => prevYear + 1);
        }
        };
  
        const filteredShows = showsData.filter(show => {
        const showDate = new Date(show.date);
        return showDate.getMonth() === currentMonth && showDate.getFullYear() === currentYear;
        });
  
    const monthNames = ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"];

    return (

      <div classNameName="page-content container">

        <div className="fs-1 fw-bold fst-italic text-center mb-5">
            <h1 className="performances-header">Előadások</h1>
        </div>

        <div className="row">
        <div className="col-12">
          <p className="calendar fs-4 fw-bold ">
            {currentYear}. {monthNames[currentMonth]}
            <a onClick={handlePreviousMonth}>
              <img src={leftArrow} alt="Previous Month" />
            </a>
            <a onClick={handleNextMonth}>
              <img src={rightArrow} alt="Next Month" />
            </a>
          </p>
        </div>
      </div>

      <article className="d-flex flex-column show-list">
        <div className="cards-container">
          {filteredShows.length > 0 ? (
            filteredShows.reduce((rows, key, index) => (index % 3 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []).map((row, index) => (
              <div className="row" key={index}>
                {row.map(card => (
                  <div className="col-md-4" key={card.id}>
                    <Cards
                      cardImg={card.img}
                      cardAlt={card.alt}
                      cardTitle={card.title}
                      cardDescription={card.description}
                      linkTo={`/odeon/tickets/${card.showId}`}
                      onClick={() => handleBuyTickets(card.showId)} 
                    />
                  </div>
                ))}
              </div>
            ))
          ) : (
            <p>Nincs előadás ebben a hónapban.</p>
          )}
        </div>
      </article>

      </div>
            
    );
}

