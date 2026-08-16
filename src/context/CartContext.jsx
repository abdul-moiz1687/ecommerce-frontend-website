import { createContext,   useContext, useState } from "react";

const CartContext = createContext();
 
             export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity, size, color) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product.id === product.id &&
          item.size === size &&
          item.color === color  );

      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === product.id &&
          item.size === size &&
          item.color === color
            ? {  ...item,
                quantity: item.quantity + quantity, }
 : item  );  }

      return [  ...prevItems,
        {
          id: Date.now(),
          product,
          quantity,
          size,
          color, },
      ];
    });};

  const removeFromCart = (cartItemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== cartItemId)
    ); };

  const updateQuantity = (cartItemId, quantity) => {
    if (quantity < 1) return;

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === cartItemId  ? { ...item, quantity }: item )
    );
  };

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0);

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.product.price * item.quantity,
   0);

  return (
    <CartContext.Provider  value={{
        cartItems,
        cartCount,
   subtotal,
        addToCart,
        removeFromCart,
        updateQuantity,  }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);}