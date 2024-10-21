import { X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthContextCart from "../../../Context/CartContexte";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Cart({ status, onClick }) {
  const ErrorCheckout = () => toast.error("Pliiz select Color And Size !");

  const navigate = useNavigate();
  const {
    CartAddRemove,
    CheckColorCart,
    CheckSizeCart,
    ChoiseColor,
    ChoiseSize,
    DataCart,
    FinalProduct,
  } = useAuthContextCart([]);

  const totalPrice = DataCart?.reduce(
    (total, product) => total + +product.price,
    0
  );

  return (
    <>
      <ToastContainer position="top-center" />

      <div
        className={`gi-side-cart-overlay w-full h-screen fixed top-0 left-0 bg-[#000000cc] z-[9998] ${
          status ? "" : "hidden"
        }`}
        onClick={() => {
          onClick(false);
        }}
      ></div>
      <div
        id="gi-side-cart"
        className={`w-[350px] max-[480px]:w-[300px] h-[100vh] pt-[15px] px-[20px] text-[14px] font-normal fixed z-[9999] top-0 right-0 block transition-all duration-500 ease-in-out bg-[#fff] overflow-auto gi-open-cart ${
          !status ? "translate-x-96" : ""
        }`}
      >
        <div className=" relative z-9 flex flex-col h-full justify-between">
          <div className="gi-cart-top">
            <div className="gi-cart-title w-full flex justify-between">
              <span className="cart_title text-[15px] text-[#4b5966] font-Poppins font-semibold mb-[20px]">
                My Cart
              </span>
              <button
                className="gi-cart-close border-0 text-[30px] text-[#4b5966]"
                onClick={() => onClick(false)}
              >
                <X className="text-[20px]" />
              </button>
            </div>
            <ul className="gi-cart-pro-items">
              {DataCart?.map((product, index) => (
                <li
                  key={product.id}
                  className="relative mb-[15px] p-[15px] flex overflow-hidden border border-solid border-[#eee] rounded-5"
                >
                  <Link
                    to={`/Product/${product.id}`}
                    className="flex grow-1 basis-20 items-center"
                  >
                    <img
                      src={product?.images?.[0]?.name}
                      className="w-full"
                      alt="product"
                    />
                  </Link>
                  <div className="gi-pro-content  grow-1 basis-70 pl-[15px] overflow-hidden">
                    <p className="cart-pro-title w-full pr-[30px] text-[#777] whitespace-normal overflow-hidden text-ellipsis block text-[15px] leading-[18px] font-normal">
                      {product?.name}
                    </p>
                    <span className="cart-price text-[14px] block mt-[5px]">
                      <span className="text-[#777] font-semibold text-[16px]">
                        ${product?.price}
                      </span>
                    </span>
                    <span className="cart-price text-[14px]  mt-[5px]  flex">
                      {Array.isArray(product?.color) &&
                        product?.color.map((color, key) => (
                          <div
                            onClick={() => {
                              ChoiseColor(product.id, color);
                            }}
                            key={key}
                            className={`mr-[5px] p-2 w-2 h-2 rounded-full  border-2 border-gray-400 cursor-pointer ${
                              CheckColorCart(product.id) === color
                                ? "!border-black"
                                : ""
                            } `}
                            style={{
                              backgroundColor: `${color}`,
                            }}
                          ></div>
                        ))}
                    </span>
                    <span className="cart-price text-[14px]  mt-[5px] flex items-center">
                      {product?.size.map((size, key2) => (
                        <p
                          onClick={() => {
                            ChoiseSize(product.id, size);
                          }}
                          key={key2}
                          className={`mr-[5px]  w-8 h-6 rounded-sm border border-gray-400 bg-gray-50 text-center ${
                            CheckSizeCart(product.id) === size
                              ? "!border-black bg-slate-300"
                              : ""
                          } `}
                        >
                          {size}
                        </p>
                      ))}
                    </span>

                    <button
                      onClick={() => {
                        CartAddRemove(product);
                      }}
                      className=" leading-[15px] absolute top-5 right-5 pl-[10px] text-[#ff0000] text-[22px]"
                    >
                      ×
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="gi-cart-bottom">
            <div className="cart-sub-total flex justify-between pt-0 pb-[8px] border-t border-solid border-[#eee] mt-[20px]">
              <table className="table cart-table w-full">
                <tbody>
                  <tr>
                    <td className="text-left font-medium text-[#777] p-[6px]">
                      Sub-Total :
                    </td>
                    <td className="text-right font-bold text-[#777] p-[6px]">
                      ${totalPrice}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-left font-medium text-[#777] p-[6px]">
                      Total :
                    </td>
                    <td className="text-right font-bold text-[#777] p-[6px]">
                      ${totalPrice}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className=" flex justify-between mb-[20px]">
              <p className="gi-btn-1 w-[48%] h-[40px] block uppercase font-semibold text-[14px] py-[8px] px-[15px] leading-[22px] bg-[#4b5966] text-[#fff] border-0 transition-all duration-300 ease-in-out text-center relative rounded-5 hover:bg-[#5caf90]">
                View Cart
              </p>
              <p
                onClick={() => {
                  const detected =
                    FinalProduct?.every((product) => {
                      return (
                        typeof product.size === "string" &&
                        typeof product.color === "string"
                      );
                    }) ?? false;
                  if (detected) {
                    navigate("/checkout");
                  } else {
                    ErrorCheckout();
                  }
                }}
                className="gi-btn-2 w-[48%] h-[40px] block uppercase font-semibold text-[14px] py-[8px] px-[15px] leading-[22px] bg-[#5caf90] text-[#fff] text-center rounded-5 transition-all duration-300 ease-in-out hover:bg-[#4b5966]"
              >
                Checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;