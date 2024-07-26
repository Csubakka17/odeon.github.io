import React, { useState } from 'react';
import { useCart } from '../components/CartContext';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/cartIcon.css';

export default function CartIcon() {
  const { cart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleProceedToCheckout = () => {
    setShowModal(false);
    navigate('/checkout');
  };

    console.log(showModal);
    console.log(cart);

  return (
    <>
      <button className="btn btn-primary btn-lg ms-2 cart-link" onClick={() => setShowModal(true)}>
        🛒 Kosár ({cart.length})
      </button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            {cart.length === 0 ? (
              <>
                <p>Az ön kosara üres</p>
                <button onClick={handleModalClose} className="btn btn-primary">OK</button>
              </>
            ) : (
              <>
                <ul>
                  {cart.map((item, index) => (
                    <li key={index}>
                      Sor: {item.row}, Szék: {item.num}, Ár: {item.price} Ft
                    </li>
                  ))}
                </ul>
                <button onClick={handleModalClose} className="btn btn-secondary">Vissza a vásárláshoz</button>
                <button onClick={handleProceedToCheckout} className="btn btn-primary">Tovább a Pénztárhoz</button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
