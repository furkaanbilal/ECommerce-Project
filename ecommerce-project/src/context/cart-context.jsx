import { createContext, useEffect ,useState} from "react";
import { getCarts } from "../services/cart-services";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);
  const getUserCarts = async () => {
    let response = await getCarts();
    if (response.isSuccess) setCarts(response.data);
  };
  useEffect(() => {
    getUserCarts();
  }, []);
  return (
    <CartContext.Provider value={{ carts, getUserCarts }}>
      {children}
    </CartContext.Provider>
  );
};
