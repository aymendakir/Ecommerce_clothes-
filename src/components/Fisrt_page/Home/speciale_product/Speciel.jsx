import React from "react";
import image from "../../../../assets/Image/a2426cb2555109aa0ad0f8876d2d7011.jpg";
import { ShoppingBag } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import useAuthContext from "../../../../Context/ApiContext";
import { Link } from "react-router-dom";
import useAuthContextCart from "../../../../Context/CartContexte";
function Special() {
  const { CartAddRemove, DataCart } = useAuthContextCart([]);

  const { NewProducts, BestProducts } = useAuthContext([]);
  const { data: NewProduct } = useQuery({
    queryKey: ["NewProduct"],
    queryFn: async () => {
      return NewProducts();
    },
  });
  const { data: BestProduct } = useQuery({
    queryKey: ["BestProduct"],
    queryFn: async () => {
      return BestProducts();
    },
  });
  const checkproduct = (id) => {
    return DataCart?.findIndex((product) => product.id === id) !== -1;
  };

  return (
    <section className="gi-offer-section overflow-hidden py-[40px] max-[767px]:py-[30px]">
      <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="w-full flex flex-wrap">
          <div className="min-[1200px]:w-[25%] min-[768px]:w-[50%] w-full px-[12px] gi-all-product-content wow fadeInUp">
            <div className="gi-banner-inner h-full p-[0] flex flex-row items-center justify-between rounded-[5px] overflow-hidden">
              <div
                className={`gi-banner-block w-full h-full  bg-center bg-cover bg-no-repeat max-[767px]:h-[450px] max-[767px]:bg-bottom max-[480px]:h-[400px] max-[420px]:h-[350px] relative`}
              >
                <img
                  src={image}
                  className="absolute top-0 left-0 h-full w-full"
                />
              </div>
            </div>
          </div>
          {/* first */}
          <div className="min-[1200px]:w-[25%] min-[768px]:w-[50%] w-full px-[12px] gi-all-product-content max-[767px]:mt-[40px] wow fadeInUp">
            <div className="w-full">
              <div className="section-title mb-[0] pb-[15px]">
                <div className="section-detail">
                  <h2 className="gi-title mb-[0] text-[25px] max-[991px]:text-[24px] max-[767px]:text-[22px] max-[575px]:text-[20px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1] font-manrope tracking-[0.01rem]">
                    New <span className="text-[#5caf90]">Items</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="">
              <div className="">
                <div className="">
                  <div
                    className=""
                    data-slick-index="-1"
                    id=""
                    aria-hidden="true"
                  >
                    <div>
                      <div className="w-full  h-[400px] space-y-6">
                        {NewProduct?.map((index) => (
                          <div
                            key={index.id}
                            className=" cart-show-hover mr-[1px] p-[15px] flex flex-wrap items-center bg-[#fff] border-[1px] border-solid border-[#eee] overflow-hidden relative rounded-[5px]"
                          >
                            <div className="gi-pro-image-outer basis-[70px]">
                              <div className="gi-pro-image overflow-hidden rounded-[15px]">
                                <Link
                                  to={`Product/${index.id}`}
                                  className="image"
                                >
                                  <img
                                    className="main-image w-full"
                                    src={index.images[0].name}
                                    alt="Product"
                                  />
                                </Link>
                              </div>
                            </div>
                            <div className="gi-pro-content w-[calc(100%-70px)] basis-[calc(100%-70px)] pl-[15px]">
                              <h5 className="gi-pro-title text-[16px] mb-[5px]">
                                <Link
                                  to={`/Product/${index.id}`}
                                  className="text-[#777] whitespace-nowrap overflow-hidden text-ellipsis block font-Poppins text-[14px] leading-[24px] font-medium tracking-[0.2px] capitalize"
                                >
                                  {index?.name}
                                </Link>
                              </h5>
                              <h6 className="gi-pro-stitle text-[#777] whitespace-nowrap overflow-hidden text-ellipsis block text-[13px] leading-[24px] font-normal tracking-[0.3px] capitalize mb-[5px]">
                                <p className="text-[#999] hover:text-[#5caf90]">
                                  Men
                                </p>
                              </h6>
                              <div className="gi-pro-rat-price">
                                <div className="gi-pro-rat-pri-inner">
                                  <span className="gi-price text-[14px] flex items-center text-[#5caf90]">
                                    <span className="new-price text-[#4b5966] font-bold text-[14px]">
                                      ${index?.price}
                                    </span>
                                    <span className="old-price text-[12px] line-through text-[#777] ml-[9px]">
                                      ${index?.regular_price}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div
                                onClick={() => {
                                  CartAddRemove(index);

                                  checkproduct(index.id);
                                }}
                                className={`add-to-cart cursor-pointer w-[30px] h-[30px] absolute bottom-[10px] right-[10px] bg-[#fff] rounded-[3px] border-[1px] border-solid border-[#eee] flex items-center justify-center  max-[991px]:opacity-[1] ${
                                  checkproduct(index.id) && "!bg-green-200"
                                }`}
                                title="Add To Cart"
                              >
                                <ShoppingBag className="fi-rr-shopping-basket text-[18px] text-[#777] leading-[0]"></ShoppingBag>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
          {/* seconde */}
          <div
            className="min-[1200px]:w-[25%] min-[768px]:w-[50%] w-full px-[12px] gi-all-product-content max-[767px]:mt-[40px] wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="w-full">
              <div className="section-title mb-[0] pb-[15px]">
                <div className="section-detail">
                  <h2 className="gi-title mb-[0] text-[25px] max-[991px]:text-[24px] max-[767px]:text-[22px] max-[575px]:text-[20px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1] font-manrope tracking-[0.01rem]">
                    Trending <span className="text-[#5caf90]">Items</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="">
              <div className="">
                <div className="">
                  <div>
                    <div>
                      <div className="w-full  h-[400px] space-y-6">
                        {BestProduct?.map((index) => {
                          return (
                            <div
                              key={index.id}
                              className=" cart-show-hover mr-[1px] p-[15px] flex flex-wrap items-center bg-[#fff] border-[1px] border-solid border-[#eee] overflow-hidden relative rounded-[5px]"
                            >
                              <div className="gi-pro-image-outer basis-[70px]">
                                <div className="gi-pro-image overflow-hidden rounded-[15px]">
                                  <Link
                                    to={`Product/${index.id}`}
                                    className="image"
                                  >
                                    <img
                                      className="main-image w-full"
                                      src={index.images[0].name}
                                      alt="Product"
                                    />
                                  </Link>
                                </div>
                              </div>
                              <div className="gi-pro-content w-[calc(100%-70px)] basis-[calc(100%-70px)] pl-[15px]">
                                <h5 className="gi-pro-title text-[16px] mb-[5px]">
                                  <Link
                                    to={`/Product/${index.id}`}
                                    className="text-[#777] whitespace-nowrap overflow-hidden text-ellipsis block font-Poppins text-[14px] leading-[24px] font-medium tracking-[0.2px] capitalize"
                                  >
                                    {index?.name}
                                  </Link>
                                </h5>
                                <h6 className="gi-pro-stitle text-[#777] whitespace-nowrap overflow-hidden text-ellipsis block text-[13px] leading-[24px] font-normal tracking-[0.3px] capitalize mb-[5px]">
                                  <p className="text-[#999] hover:text-[#5caf90]">
                                    Men
                                  </p>
                                </h6>
                                <div className="gi-pro-rat-price">
                                  <div className="gi-pro-rat-pri-inner">
                                    <span className="gi-price text-[14px] flex items-center text-[#5caf90]">
                                      <span className="new-price text-[#4b5966] font-bold text-[14px]">
                                        ${index?.price}
                                      </span>
                                      <span className="old-price text-[12px] line-through text-[#777] ml-[9px]">
                                        ${index?.regular_price}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                                <div
                                  onClick={() => {
                                    CartAddRemove(index);

                                    checkproduct(index.id);
                                  }}
                                  className={`add-to-cart cursor-pointer w-[30px] h-[30px] absolute bottom-[10px] right-[10px] bg-[#fff] rounded-[3px] border-[1px] border-solid border-[#eee] flex items-center justify-center  max-[991px]:opacity-[1] ${
                                    checkproduct(index.id) && "!bg-green-200"
                                  }`}
                                  title="Add To Cart"
                                >
                                  <ShoppingBag className="fi-rr-shopping-basket text-[18px] text-[#777] leading-[0]"></ShoppingBag>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
          {/* tree */}
          <div className="min-[1200px]:w-[25%] min-[768px]:w-[50%] w-full px-[12px] gi-all-product-content wow fadeInUp">
            <div className="gi-banner-inner h-full p-[0] flex flex-row items-center justify-between rounded-[5px] overflow-hidden">
              <div
                className={`gi-banner-block w-full h-full  bg-center bg-cover bg-no-repeat max-[767px]:h-[450px] max-[767px]:bg-bottom max-[480px]:h-[400px] max-[420px]:h-[350px] relative`}
              >
                <img
                  src={image}
                  className="absolute top-0 right-0 h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Special;
