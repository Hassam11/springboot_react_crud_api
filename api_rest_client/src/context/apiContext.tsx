import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    id: 0,
    name: "",
    description: "",
    url_image: "",
    stock: 0,
    price: 0,
  });

  return (
    <ProductContext.Provider
      value={{ product, products, setProducts, setProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};
