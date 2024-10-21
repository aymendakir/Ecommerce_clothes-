import { createContext, useContext, useEffect, useState } from "react";

import axios from "axios";

const AuthContextCart = createContext({});
export const AuthProviderCart = ({ children }) => {
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("CartProduct"));
    sessionStorage.setItem("FinalProduct", JSON.stringify(cartData));

    setDataCart(cartData);
  }, []);
  const [DataCart, setDataCart] = useState([]);
  const [FinalProduct, setFinalProduct] = useState([]);
  const finalProduct = () => {
    const cartData = sessionStorage.getItem("FinalProduct");
    let products = JSON.parse(cartData);
    setFinalProduct(products);
  };
  function CartAddRemove(data) {
    let products = [];

    // Retrieve existing cart data from localStorage
    const cartData = localStorage.getItem("CartProduct");

    // Ensure the existing cart data is valid
    if (cartData) {
      try {
        products = JSON.parse(cartData); // Parse existing cart data
      } catch (e) {
        console.error("Error parsing cart data", e);
      }
    }

    // Find if the product exists in the cart
    const existingProductIndex = products.findIndex(
      (product) => product.id === data.id
    );

    if (existingProductIndex !== -1) {
      // If product exists, remove it
      products = products.filter((product) => product.id !== data.id);
    } else {
      // If product doesn't exist, add it to the cart
      products.push(data);
    }

    // Save updated cart back to localStorage
    setDataCart(products);

    localStorage.setItem("CartProduct", JSON.stringify(products));
    sessionStorage.setItem("FinalProduct", JSON.stringify(products));
    finalProduct();
  }

  function dataCart() {
    const cartData = JSON.parse(localStorage.getItem("CartProduct"));
    setDataCart(cartData);
  }
  function ChoiseColor(id, color) {
    let products = [];
    const cartData = sessionStorage.getItem("FinalProduct");
    products = JSON.parse(cartData);
    const existingProductIndex = products?.findIndex(
      (product) => product.id === id
    );
    if (existingProductIndex !== -1) {
      products[existingProductIndex].color = color;
    }
    sessionStorage.setItem("FinalProduct", JSON.stringify(products));
    CheckColorCart(id);
    finalProduct();
  }
  function CheckColorCart(id) {
    const cartData = sessionStorage.getItem("FinalProduct");

    // Check if cartData exists and parse it
    if (!cartData) {
      return null;
    }

    let products = JSON.parse(cartData);

    // Find the product by id and return its color if it exists
    const product = products.find((product) => product.id === id);

    return product ? product.color : null;
  }
  function ChoiseSize(id, size) {
    let products = [];
    const cartData = sessionStorage.getItem("FinalProduct");
    products = JSON.parse(cartData);
    const existingProductIndex = products.findIndex(
      (product) => product.id === id
    );
    if (existingProductIndex !== -1) {
      products[existingProductIndex].size = size;
    }
    sessionStorage.setItem("FinalProduct", JSON.stringify(products));
    CheckColorCart(id);
    finalProduct();
  }
  function CheckSizeCart(id) {
    const cartData = sessionStorage.getItem("FinalProduct");

    // Check if cartData exists and parse it
    if (!cartData) {
      return null;
    }

    let products = JSON.parse(cartData);

    // Find the product by id and return its color if it exists
    const product = products.find((product) => product.id === id);

    return product ? product.size : null;
  }

  return (
    <AuthContextCart.Provider
      value={{
        CheckColorCart,
        CheckSizeCart,
        ChoiseSize,
        ChoiseColor,
        dataCart,
        CartAddRemove,
        DataCart,
        FinalProduct,
        finalProduct,
      }}
    >
      {children}
    </AuthContextCart.Provider>
  );
};
export default function useAuthContextCart() {
  return useContext(AuthContextCart);
}
