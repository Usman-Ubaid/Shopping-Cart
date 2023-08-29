import { createContext, ReactNode, useContext, useState } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItemProps = {
  id: number;
  quantity: number;
};

type ShoppingCartContextValue = {
  getItemQuantity: (id: number) => number;
  addToCart: (id: number) => void;
  increaseItemQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => void;
};

const ShoppingCartContext = createContext({} as ShoppingCartContextValue);

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const addToCart = (id: number) => {
    const itemIndex = cartItems.findIndex((item) => item.id === id);

    if (itemIndex === -1) {
      setCartItems([...cartItems, { id, quantity: 1 }]);
    } else {
      const updatedCartItem = [...cartItems];
      //   cartItems[itemIndex].quantity += 1;
      updatedCartItem[itemIndex].quantity += 1;
      setCartItems(updatedCartItem);
    }
  };

  const increaseItemQuantity = (id: number) => {
    const itemIndex = cartItems.findIndex((item) => item.id === id);
    cartItems[itemIndex].quantity += 1;
    setCartItems([...cartItems]);
  };

  const decreaseItemQuantity = (id: number) => {
    const itemIndex = cartItems.findIndex((item) => item.id === id);
    cartItems[itemIndex].quantity -= 1;
    setCartItems([...cartItems]);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        addToCart,
        increaseItemQuantity,
        decreaseItemQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => useContext(ShoppingCartContext);
