import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [prices, setPrices] = useState({
    category1: 5000, // első 5 sor
    category2: 4000, // második 5 sor
    category3: 3000, // harmadik 6 sor
  });

  const addToCart = (seat) => {
    setCart((prevCart) => [...prevCart, seat]);
  };

  const removeFromCart = (seat) => {
    setCart((prevCart) => prevCart.filter(item => !(item.row === seat.row && item.num === seat.num)));
  };

  const clearCart = () => {
    setCart([]);
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    prices,
    setPrices
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
