import { Eye, Heart, ShoppingBag, Stars } from "lucide-react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useAuthContextCart from "../../../Context/CartContexte";

function Card(props) {
  const { CartAddRemove, DataCart } = useAuthContextCart([]);
  const [cart, setCart] = React.useState([]);

  const checkproduct = () => {
    return (
      DataCart?.findIndex((product) => product?.id === props?.data?.id) !== -1
    );
  };

  return (
    <main className="w-[300px] bg-white rounded-md">
      <div className="product transition-all duration-300 cursor-pointer flex flex-col overflow-hidden border border-[#eee] rounded-5 w-[300px]">
        <div className="relative z-11">
          <div className="gi-pro-image overflow-hidden">
            <Link
              to={`/Product/${props?.data?.id}`}
              className="block relative overflow-hidden"
            >
              <img
                className="main-image w-full h-[200px] transition-all duration-300"
                src={props?.data?.images?.[0]?.name || "fallback-image.png"}
                alt="Product"
                loading="lazy"
              />
              {props.data?.images && (
                <img
                  className="hover-image absolute h-[200px] w-full z-1 top-0 left-0 opacity-0 transition-all duration-300"
                  src={props?.data?.images?.[1]?.name || "fallback-image.png"}
                  alt="Product"
                  loading="lazy"
                />
              )}
            </Link>
            <span className="absolute top-2 right-2 z-2 px-2 py-1 text-11 font-medium bg-[#ff7070] text-white rounded-5">
              Sale
            </span>
            <div className="product-actions transition-all duration-[0.3s] ease-in-out absolute z-[9] left-[0] right-[0] bottom-[02px] max-[991px]:opacity-[1] max-[991px]:bottom-[10px] flex flex-row items-center justify-center my-[0] mx-auto opacity-1 space-x-3">
              <p
                className="gi-btn-group wishlist transition-all duration-[0.3s] ease-in-out h-[30px] w-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px]"
                title="Wishlist"
              >
                <Heart
                  className="fi-rr-heart transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]"
                  size={16}
                ></Heart>
              </p>
              <Link
                to={`/Product/${props?.data?.id}`}
                className="gi-btn-group quickview transition-all duration-[0.3s] ease-in-out h-[30px] w-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] modal-toggle"
              >
                <Eye
                  className=" transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]"
                  size={16}
                ></Eye>
              </Link>

              <button
                title="Add To Cart"
                onClick={() => {
                  CartAddRemove(props?.data);

                  checkproduct();
                }}
                className={`h-[30px] w-[30px] flex items-center justify-center bg-white   rounded-5 border-[1px] border-solid border-[#eee] rounded-[5px]  ${
                  checkproduct() && "!bg-green-200"
                }`}
              >
                <ShoppingBag className="text-[#777]" size={16} />
              </button>
            </div>
          </div>
        </div>
        <div className="p-5 border-t border-[#eee]">
          <Link to="shop-left-sidebar-col-3.html">
            <h6 className="mb-2 text-[#999] text-13 capitalize">
              {props.data?.title}
            </h6>
          </Link>
          <h5 className="mb-2 text-16">
            <Link className="text-[#4b5966] text-14 capitalize hover:text-[#5caf90]">
              {props.data?.name}
            </Link>
          </h5>
          <div className="flex flex-col">
            <span className="flex mb-2 opacity-70">
              {[...Array(4)].map((_, i) => (
                <Stars key={i} className="text-[#f27d0c]" size={20} />
              ))}
              <Stars className="text-gray-400" size={20} />
            </span>
            <div className="flex">
              <span className="new-price text-[#4b5966] font-bold text-14 mr-2">
                ${props.data?.price}
              </span>
              <span className="old-price text-14 text-[#777] line-through">
                ${props.data?.regular_price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Card;
