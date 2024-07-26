import React, { useEffect, useRef } from 'react';
import '../../assets/css/theaterLayout.css';
import SeatReservation from "../components/SeatRows";


const rowNumbers = Array.from({ length: 16 }, (_, i) => i + 1);

export default function TheaterLayout() {
  
    

  return (
    <div className="theater-container">

      <div className="stage" >
                    <h2>Színpad</h2>
            </div>

      <div className="seating-area" >
        <div className="row-numbers left">
          {rowNumbers.map(number => (
            <div key={number} className="row-number">{number}</div>
          ))}
        </div>
        <div className="seating-frame">
          <div className="seating-labels">
            <span className="label-left">Bal</span>
            <span className="label-right">Jobb</span>
          </div>
          
            

          <SeatReservation />
          <div className="entrances">
            <div className="entrance-left">
              <div className="entrance-icon">⇵</div>
              <span className="entrance-label">Bejárat</span>
            </div>
            <div className="entrance-right">
              <div className="entrance-icon">⇵</div>
              <span className="entrance-label">Bejárat</span>
            </div>
          </div>
        </div>
        <div className="row-numbers right">
          {rowNumbers.map(number => (
            <div key={number} className="row-number">{number}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
