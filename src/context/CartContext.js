import React, { createContext, useReducer, useEffect } from "react";

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProductIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingProductIndex >= 0) {
        const updatedItems = [...state.items];
        updatedItems[existingProductIndex].quantity += action.payload.quantity;
        return { ...state, items: updatedItems };
      } else {
        return {
          ...state,
          items: [
            ...state.items,
            { ...action.payload, quantity: action.payload.quantity },
          ],
        };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };

    case "INCREASE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.id === action.payload.id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };

    case "SET_CART_ITEMS":
      return {
        ...state,
        items: action.payload || [], // Ensure items is always an array
      };

    case "CLEAR_CART":
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userEmail = localStorage.getItem("userEmail");

  // Set initial cart state with items from localStorage
  const initialCartState = {
    items:
      JSON.parse(
        localStorage.getItem(
          isLoggedIn ? `cartItems_${userEmail}` : "cartItems"
        )
      ) || [],
  };

  const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

  // Merge guest cart items with user cart items when the user logs in
  useEffect(() => {
    if (isLoggedIn && userEmail) {
      const guestCartItems =
        JSON.parse(localStorage.getItem("cartItems")) || [];
      const userCartKey = `cartItems_${userEmail}`;
      const userCartItems = JSON.parse(localStorage.getItem(userCartKey)) || [];

      // Merge guest and user cart items
      const mergedCartItems = [...userCartItems];
      guestCartItems.forEach((guestItem) => {
        const existingIndex = mergedCartItems.findIndex(
          (item) => item.id === guestItem.id
        );
        if (existingIndex >= 0) {
          mergedCartItems[existingIndex].quantity += guestItem.quantity;
        } else {
          mergedCartItems.push(guestItem);
        }
      });

      localStorage.setItem(userCartKey, JSON.stringify(mergedCartItems));
      localStorage.removeItem("cartItems");

      dispatch({ type: "SET_CART_ITEMS", payload: mergedCartItems });
    }
  }, [isLoggedIn, userEmail]);

  // Update localStorage when cart items change
  useEffect(() => {
    const cartKey =
      isLoggedIn && userEmail ? `cartItems_${userEmail}` : "cartItems";
    localStorage.setItem(cartKey, JSON.stringify(cartState.items));
  }, [cartState.items, isLoggedIn, userEmail]);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
