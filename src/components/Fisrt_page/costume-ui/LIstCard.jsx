import { Eye, Heart, ShoppingBag, Stars } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function LIstCard(props) {
  return (
    <div className="product bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[20px] flex justify-start items-center w-[900px]">
      <div className=" overflow-hidden relative border-b-[1px] border-solid border-[#eee] z-[4] !w-[500px]">
        <span className="flags transition-all duration-[0.3s] ease-in-out absolute z-[5] top-[10px] left-[6px]">
          <span className="text-[14px] text-[#777] font-medium uppercase">
            New
          </span>
        </span>
        <a href="javascript:void(0)">
          <div className=" relative block overflow-hidden pointer-events-none rounded-t-[20px]">
            <img
              className="main-image !w-[300px] h-[200px] transition-all duration-[0.3s] ease delay-[0s]"
              src={props?.data?.images?.[0]?.name || "fallback-image.png"}
              alt="Product"
              loading="lazy"
            />
            {props.data?.images && (
              <img
                className="hover-image absolute !w-[300px] h-[200px]  z-[1] top-[0] left-[0] opacity-[0] transition-all duration-[0.3s] ease delay-[0s]"
                src={props?.data?.images?.[1]?.name || "fallback-image.png"}
                alt="Product"
                loading="lazy"
              />
            )}
          </div>
        </a>
        <div className="product-actions transition-all duration-[0.3s] ease-in-out absolute z-[9] left-[0] right-[0] bottom-[02px] max-[991px]:opacity-[1] max-[991px]:bottom-[10px] flex flex-row items-center justify-center my-[0] mx-auto opacity-1 space-x-3">
          <a
            className="gi-btn-group wishlist transition-all duration-[0.3s] ease-in-out h-[30px] w-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px]"
            title="Wishlist"
            tabindex="-1"
          >
            <Heart
              className="fi-rr-heart transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]"
              size={16}
            ></Heart>
          </a>
          <Link
            to={`/Product/${props?.data?.id}`}
            className="gi-btn-group quickview transition-all duration-[0.3s] ease-in-out h-[30px] w-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] modal-toggle"
          >
            <Eye
              className=" transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]"
              size={16}
            ></Eye>
          </Link>

          <a
            title="Add To Cart"
            className="gi-btn-group quickview transition-all duration-[0.3s] ease-in-out h-[30px] w-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] modal-toggl"
          >
            <ShoppingBag
              className=" transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]"
              size={16}
            ></ShoppingBag>
          </a>
        </div>
      </div>
      <div className="w-[900px] p-[20px]">
        <div className="bb-pro-subtitle mb-[8px] flex flex-wrap justify-between">
          <a
            href="shop-left-sidebar-col-3.html"
            className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[13px] leading-[16px] text-[#777] font-light tracking-[0.03rem]"
          >
            Snacks
          </a>
          <span className="bb-pro-rating">
            <Stars
              className="gicon gi-star fill text-[14px] text-[#f27d0c] mr-[3px] float-left mr-[3px]"
              size={20}
            />
            <Stars
              className="gicon gi-star fill text-[14px] text-[#f27d0c] mr-[3px] float-left mr-[3px]"
              size={20}
            />{" "}
            <Stars
              className="gicon gi-star fill text-[14px] text-[#f27d0c] mr-[3px] float-left mr-[3px]"
              size={20}
            />{" "}
            <Stars
              className="gicon gi-star fill text-[14px] text-[#f27d0c] mr-[3px] float-left mr-[3px]"
              size={20}
            />{" "}
            <Stars
              className="gicon gi-star fill text-[14px] text-[gray] mr-[3px] float-left mr-[3px]"
              size={20}
            />{" "}
          </span>
        </div>
        <h4 className="bb-pro-title mb-[8px] text-[16px] leading-[18px]">
          <a
            href="product-left-sidebar.html"
            className="transition-all duration-[0.3s] ease-in-out font-quicksand w-full block whitespace-nowrap overflow-hidden text-ellipsis text-[15px] leading-[18px] text-[#3d4750] font-semibold tracking-[0.03rem]"
          >
            {props.data?.name}
          </a>
        </h4>
        <p className=" font-Poppins text-[14px] text-[#686e7d] font-light leading-[28px] tracking-[0.03rem] h-[100px]">
          {props.data?.description}
        </p>
        <div className="bb-price flex flex-wrap justify-between">
          <div className="inner-price mx-[-3px]">
            <span className="new-price px-[3px] text-[16px] text-[#686e7d] font-bold">
              ${props.data?.price}
            </span>
            <span className="old-price px-[3px] text-[14px] text-[#686e7d] line-through">
              ${props.data?.regular_price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LIstCard;
