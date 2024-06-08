import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { productType } from "../types/type";
import toast from "react-hot-toast";

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  image?: string;
  price?: number;
}

interface CartContextType {
  cartItems: CartItem[];

  addToCart: (item: productType) => void;
  addQuantity: (itemId: number) => void;
  removeQuantity: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

const CartContextProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return JSON.parse(savedCart || "[]") as CartItem[];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: productType) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        toast.success('Your Items is already added')
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        const cartItem: CartItem = {
          id: product.id,
          name: product.title,
          image: product.image,
          price: product.price,
          quantity: 1,
        };
        toast.success('items added into card!')
        return [...prevItems, cartItem];
      }
    });
  };

  const addQuantity = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const removeQuantity = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== itemId);
      return updatedItems;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,

        addToCart,
        removeFromCart,
        addQuantity,
        removeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
