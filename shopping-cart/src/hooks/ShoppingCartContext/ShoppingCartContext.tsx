import { createContext, ReactNode, useState } from "react";
import ShoppingCart from "../../components/ShoppingCart";
import { useLocalStorage } from "../useLocalStorage";

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
  removeItem: (id: number) => void;
  cartQuantity: number;
  openCart: () => void;
  closeCart: () => void;
  isOpen: boolean;
  cartItems: CartItemProps[];
};

export const ShoppingCartContext = createContext(
  {} as ShoppingCartContextValue
);

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItemProps[]>(
    "shopping-cart",
    []
  );
  const [isOpen, setIsOpen] = useState(false);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => quantity + item.quantity,
    0
  );

  const openCart = () => {
    setIsOpen(true);
  };

  const closeCart = () => {
    setIsOpen(false);
  };

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const addToCart = (id: number) => {
    const itemIndex = cartItems.findIndex((item) => item.id === id);

    if (itemIndex === -1) {
      setCartItems([...cartItems, { id, quantity: 1 }]);
    } else {
      const updatedCartItem = [...cartItems];
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

  const removeItem = (id: number) => {
    const filterItems = cartItems.filter((item) => item.id !== id);
    setCartItems(filterItems);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        addToCart,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeItem,
        cartQuantity,
        openCart,
        closeCart,
        isOpen,
        cartItems,
      }}
    >
      {children}
      {isOpen ? <ShoppingCart /> : null}
    </ShoppingCartContext.Provider>
  );
};
