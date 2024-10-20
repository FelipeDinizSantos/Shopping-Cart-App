import { ReactNode, useState } from "react";
import AppContext from "./AppContext";
import { ProductType } from "../globalTypes";

const Provider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [cartItems, setCartItems] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCartVisible, setIsCartVisible] = useState(false);

  return (
    <AppContext.Provider value={{
      products,
      setProducts,
      loading,
      setLoading,
      cartItems,
      setCartItems,
      isCartVisible, 
      setIsCartVisible
    }}>

      {children}

    </AppContext.Provider>
  );
};

export default Provider;
