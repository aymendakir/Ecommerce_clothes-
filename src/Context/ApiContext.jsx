import { createContext, useContext, useState } from "react";

import axios from "axios";

const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const url = "http://localhost:3001";
  const getProduct = () => {
    return axios.get(`${url}/GetProduct`).then((response) => {
      return response.data.response;
    });
  };
  const OneProduct = (id) => {
    return axios.get(`${url}/oneProduct/${id}`).then((response) => {
      return response.data.response[0];
    });
  };
  const OrderProduct = (id) => {
    return axios.get(`${url}/order/${id}`).then((response) => {
      return response.data.product;
    });
  };
  const ProductByCategory = (id) => {
    return axios.get(`${url}/ProductByCategory/${id}`).then((response) => {
      return response.data.response;
    });
  };
  const GetCategory = () => {
    return axios.get(`${url}/Category`).then((response) => {
      return response.data.response;
    });
  };
  const GetCategorySub = () => {
    return axios.get(`${url}/Category-sub`).then((response) => {
      return response.data.response;
    });
  };
  const IsLogin = () => {
    return axios
      .get(`${url}/IsLogin`, {
        withCredentials: true,
      })
      .then((response) => {
        return response.data.success || false;
      });
  };
  const ProfileLogin = () => {
    return axios
      .get(`${url}/IsLogin`, {
        withCredentials: true,
      })
      .then((response) => {
        return response.data.user || false;
      });
  };
  const NewProducts = () => {
    return axios.get(`${url}/GetProductNew`).then((response) => {
      return response.data.response;
    });
  };
  const BestProducts = () => {
    return axios.get(`${url}/GetProductBest`).then((response) => {
      return response.data.response;
    });
  };
  const GetFacture = (id) => {
    return axios.get(`${url}/facture/${id}`).then((response) => {
      return response.data.response[0];
    });
  };
  const RechercheProduct = (data) => {
    return axios
      .get(`${url}/products/search`, { params: { query: data } })
      .then((response) => {
        return response.data.response;
      });
  };
  const OrderUser = (id) => {
    return axios.get(`${url}/UserOrders/${id}`).then((response) => {
      return response.data.response;
    });
  };
  const Logout = () => {
    fetch("http://localhost:3001/Logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
  };
  return (
    <AuthContext.Provider
      value={{
        getProduct,
        OneProduct,
        GetCategory,
        GetCategorySub,
        ProductByCategory,
        IsLogin,
        ProfileLogin,
        NewProducts,
        BestProducts,
        GetFacture,
        OrderProduct,
        RechercheProduct,
        OrderUser,
        Logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default function useAuthContext() {
  return useContext(AuthContext);
}
