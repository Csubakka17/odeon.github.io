import React, { useState } from "react";
import '../../assets/css/seatrow.css';
import Tooltip from '../components/Tooltip';
import { useCart } from '../components/CartContext';
import showDataJson from "../../assets/showsData.json";


const seatConfiguration = [
  19, // 1. sor
  21, // 2. sor
  23, // 3. sor
  23, // 4. sor
  25, // 5. sor
  25, // 6. sor
  25, // 7. sor
  25, // 8. sor
  25, // 9. sor
  21, // 10. sor
  21, // 11. sor
  21, // 12. sor
  21, // 13. sor
  21, // 14. sor
  21, // 15. sor
  21  // 16. sor
];


const generateSeatRows = (prices) => {
  return seatConfiguration.map((seatCount, rowIndex) => {
    return Array.from({ length: seatCount }, (_, seatIndex) => {
      let state = 'available';
      let priceCategory = 'category3';
      if (rowIndex < 5) {
        priceCategory = 'category1';
      } else if (rowIndex < 10) {
        priceCategory = 'category2';
      }
      const price = prices[priceCategory];

      // 15. sor, középső 4 szék
      if (rowIndex === 14 && seatIndex >= 8 && seatIndex <= 11) {
        state = 'unavailable';
      }

      // 16. sor, középső 6 szék
      if (rowIndex === 15 && seatIndex >= 7 && seatIndex <= 12) {
        state = 'unavailable';
      }

      return {
        num: seatIndex + 1,
        state: state,
        row: rowIndex + 1,
        price: price
      };
    });
  });
};

export default function SeatReservation() {
  const { cart, addToCart, removeFromCart } = useCart();
  const { prices } = useCart();
  const [seatRows, setSeatRows] = useState(generateSeatRows(prices));
  const [tooltip, setTooltip] = useState({ content: null, position: { top: 0, left: 0 } });

  const isConsecutive = (row) => {
    const selectedSeats = row.filter(seat => seat.state === 'marked').map(seat => seat.num);
    for (let i = 1; i < selectedSeats.length; i++) {
      if (selectedSeats[i] !== selectedSeats[i - 1] + 1) {
        return false;
      }
    }
    return true;
  };

  const handleSeatClick = (rowIndex, seatIndex) => {
    const newSeatRows = seatRows.map((row, rIndex) => {
      if (rIndex === rowIndex) {
        return row.map((seat, sIndex) => {
          if (sIndex === seatIndex) {
            if (seat.state === 'available') {
              addToCart(seat);
              return { ...seat, state: 'marked' };
            } else if (seat.state === 'marked') {
              removeFromCart(seat);
              return { ...seat, state: 'available' };
            }
            return seat; // Ha a szék nem foglalható vagy foglalt, ne változtassuk meg az állapotát
          }
          return seat;
        });
      }
      return row;
    });

    if (!isConsecutive(newSeatRows[rowIndex])) {
      alert('Nem lehet kihagyni 1 széket!');
      return;
    }

    setSeatRows(newSeatRows);

    const seat = newSeatRows[rowIndex][seatIndex];
    if (seat.state === 'marked') {
      addToCart(seat);
    }
  };

    const handleMouseEnter = (seat, event) => {
      const content = `Sor: ${seat.row}, Szék: ${seat.num}, Ár: ${seat.price} Ft`;
      const position = { top: event.clientY - 10, left: event.clientX };
      setTooltip({ content, position });
    };

    const handleMouseLeave = () => {
      setTooltip({ content: null, position: { top: 0, left: 0 } });
    };

  return (
    <>
      <div className="seat-rows">
        {seatRows.map((row, rowIndex) => (
          <div className="seat-row" key={rowIndex}>
            {row.map((seat, seatIndex) => (
              <div
                key={seat.num}
                className={`seat ${seat.state}`}
                onClick={() => handleSeatClick(rowIndex, seatIndex)}
                onMouseEnter={(event) => handleMouseEnter(seat, event)}
                onMouseLeave={handleMouseLeave}
              >
                {seat.num}
              </div>
            ))}
          </div>
        ))}
      </div>
      <Tooltip content={tooltip.content} position={tooltip.position} />
    </>
  );
}
