import React from 'react';
import { useCart } from '../../src/global/components/CartContext';
import { useNavigate } from 'react-router-dom';

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const totalAmount = cart.reduce((total, seat) => total + seat.price, 0);

  const handlePayment = () => {
    alert('Fizetés sikeres!');
    clearCart();
    navigate('/');
  };

  return (
    <div className="checkout-page">
      <h2>Pénztár</h2>
      <ul>
        {cart.map((seat, index) => (
          <li key={index}>
            Sor: {seat.row}, Szék: {seat.num}, Ár: {seat.price} Ft
          </li>
        ))}
      </ul>
      <h3>Összesen: {totalAmount} Ft</h3>
      <button onClick={handlePayment} className="btn btn-primary">Fizetés</button>
    </div>
  );
}
