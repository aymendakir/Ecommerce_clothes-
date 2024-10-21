import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { Navigation } from "swiper/modules";
import ReactStars from "react-rating-stars-component";
import { useQuery } from "@tanstack/react-query";
import useAuthContext from "../../../Context/ApiContext";
import { useParams } from "react-router-dom";
import RelatedProduc from "./RelatedProduc";
import Fotter from "../Home/Fotter/Fotter";
import Navigation2 from "../Navigation/Navigation";
import Aos from "aos";
import useAuthContextCart from "../../../Context/CartContexte";

function Product() {
  const [quantity, setQuantity] = useState(1);
  const [indexImage, setIndexImage] = useState(0);
  const { OneProduct } = useAuthContext([]);
  const {
    CartAddRemove,

    ChoiseColor,
    ChoiseSize,
    DataCart,
  } = useAuthContextCart([]);

  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const { id } = useParams();
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => {
      return OneProduct(id);
    },
    refetchIntervalInBackground: false,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    Aos.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  useEffect(() => {
    refetch();
  }, [id]);
  const checkproduct = () => {
    return DataCart?.findIndex((product) => product?.id === data?.id) !== -1;
  };

  return (
    <>
      <Navigation2 />
      <section className="gi-single-product py-[40px] max-[767px]:py-[30px]">
        <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="flex flex-wrap w-full px-[12px]">
            <div className="gi-pro-rightside gi-common-rightside w-full">
              <div className="single-pro-block">
                <div className="single-pro-inner">
                  {isLoading ? (
                    <p>Loading...</p>
                  ) : (
                    <div className="flex flex-wrap w-full">
                      <div
                        data-aos="fade-right"
                        data-wow-duration="2s"
                        className=" w-[40%] max-[991px]:w-full relative pr-[12px] max-[991px]:pl-[12px] max-[991px]:w-full max-[991px]:max-w-[500px] max-[991px]:m-auto max-[420px]:px-[0]"
                      >
                        <div className=" p-[15px] sticky top-[30px] rounded-[5px] border-[1px] border-solid border-[#eee]">
                          <div className=" w-full overflow-hidden h-full ">
                            <img
                              src={data?.images[indexImage]?.name}
                              alt="Product Image"
                              className="w-full h-[450px] "
                            />
                            <div className="mt-7 w-full">
                              <Swiper
                                navigation={true}
                                modules={[Navigation]}
                                slidesPerView="3"
                                className="w-full"
                              >
                                {data?.images?.map((Product, index) => (
                                  <SwiperSlide
                                    key={index}
                                    onClick={() => {
                                      setIndexImage(index);
                                    }}
                                    className={`!w-[130px] mr-5 p-2 border cursor-pointer ${
                                      index === indexImage &&
                                      "border-green-300 border-2"
                                    }  rounded-lg `}
                                  >
                                    <img
                                      src={Product.name}
                                      alt="Product Image"
                                      className="w-[90%] h-[100px] mx-auto rounded-xl "
                                    />
                                  </SwiperSlide>
                                ))}
                              </Swiper>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-aos="fade-left"
                        data-wow-duration="2s"
                        className="single-pro-desc single-pro-desc-no-sidebar w-[60%] max-[991px]:w-full relative pl-[12px] max-[991px]:pl-[0] max-[991px]:mt-[30px] max-[991px]:w-full"
                      >
                        <div className="single-pro-content">
                          <h5 className="gi-single-title text-[#4b5966] text-[22px] capitalize mb-[20px] block font-Poppins font-medium leading-[35px] tracking-[0.02rem] max-[1199px]:text-[20px] max-[1199px]:leading-[33px] max-[767px]:text-[18px] max-[767px]:text-[18px] max-[767px]:leading-[31px]">
                            {data?.name}
                          </h5>
                          <div className="flex items-center  mb-[14px] ">
                            <div className=" pr-[15px]  ">
                              <ReactStars
                                count={5}
                                size={24}
                                activeColor="#ffd700"
                                value={3}
                                edit={false}
                              />
                              ,
                            </div>
                            <span className="gi-read-review text-[#999] -mt-7 ">
                              |&nbsp;&nbsp;
                              <a
                                href="#gi-spt-nav-review"
                                className="text-[#999] text-[14px] leading-[20px] hover:text-[#5caf90]"
                              >
                                992 Ratings
                              </a>
                            </span>
                          </div>
                          <div className="gi-single-price-stoke mb-[15px] pt-[15px] pb-[15px] flex justify-between">
                            <div className="gi-single-price flex flex-col">
                              <div className="final-price mb-[15px] text-[#4b5966] font-semibold text-[22px] leading-[32px] font-Poppins tracking-[0] max-[1199px]:text-[20px]">
                                ${data?.price}
                              </div>
                              <div className="mrp text-[#777]">
                                <span className="text-[#999] line-through">
                                  ${data?.regular_price}
                                </span>
                              </div>
                            </div>
                            <div className="gi-single-stoke flex flex-col">
                              <span className="gi-single-ps-title leading-[1] text-[16px] text-[#5caf90] tracking-[0]">
                                IN STOCK
                              </span>
                            </div>
                          </div>
                          <div className="gi-single-desc mb-[12px] text-[#777] text-[14px] tracking-[0] break-all leading-[26px] font-Poppins">
                            {data?.description}
                          </div>

                          <div className="gi-pro-variation mb-[20px] pb-[5px]">
                            <div className="gi-pro-variation-inner gi-pro-variation-size text-[16px] font-semibold text-[#4b5966] flex-col mb-[15px] flex mt-2">
                              <span className="mb-[10px] text-[#202020] font-medium text-[15px] leading-[1.1] tracking-[0.04rem] uppercase font-Poppins block">
                                Size
                              </span>
                              <div className="gi-pro-variation-content mt-2">
                                <ul className="flex gap-4">
                                  {data?.size?.map((index, i) => (
                                    <li
                                      onClick={() => {
                                        setSize(index);
                                      }}
                                      key={i}
                                      className={`h-[22px] font-normal transition-all duration-[0.3s] ease-in-out py-[5px] px-[10px] cursor-pointer flex items-center justify-center text-[12px] leading-[22px] border-[1px] border-solid border-[#eee] float-left rounded-[5px] ${
                                        size === index && "!bg-gray-200"
                                      }`}
                                    >
                                      <span className="">{index}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="gi-pro-variation mb-[20px] pb-[5px]">
                            <div className="gi-pro-variation-inner gi-pro-variation-size text-[16px] font-semibold text-[#4b5966] flex-col mb-[15px] flex mt-2">
                              <span className="mb-[10px] text-[#202020] font-medium text-[15px] leading-[1.1] tracking-[0.04rem] uppercase font-Poppins block">
                                Color
                              </span>
                              <div className="gi-pro-variation-content mt-2">
                                <ul className="flex gap-4">
                                  {data?.color?.map((index, i) => (
                                    <li
                                      key={i}
                                      className={`h-[22px] w-[22px] font-normal transition-all duration-[0.3s] ease-in-out py-[5px] px-[10px] cursor-pointer flex items-center justify-center text-[12px] leading-[22px] border-[1px] border-solid border-[#eee] float-left rounded-[5px] ${
                                        color === index &&
                                        "!border-black !border-2"
                                      } `}
                                      style={{ backgroundColor: index }}
                                      onClick={() => {
                                        setColor(index);
                                      }}
                                    ></li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="gi-single-qty flex flex-wrap w-full m-[-5px]">
                            <div className=" w-[120px] h-[40px] p-[10px] border-[1px] border-solid border-[#eee] overflow-hidden m-[5px] relative flex items-center justify-between rounded-[5px]">
                              <button
                                className="text-2xl"
                                onClick={() => {
                                  quantity > 1 ? setQuantity(quantity - 1) : "";
                                }}
                              >
                                -
                              </button>
                              <input
                                className="w-[80px] text-center"
                                type="number"
                                min={1}
                                defaultValue={quantity}
                                value={quantity}
                              />
                              <button
                                className="text-2xl"
                                onClick={() => {
                                  quantity < 4 ? setQuantity(quantity + 1) : "";
                                }}
                              >
                                +
                              </button>
                            </div>
                            <div className="gi-single-cart">
                              <button
                                onClick={() => {
                                  CartAddRemove(data);
                                  ChoiseColor(data?.id, color),
                                    ChoiseSize(data?.id, size),
                                    checkproduct();
                                }}
                                type="button"
                                className="btn btn-primary gi-btn-1 flex h-[40px] leading-[50px] text-center text-[14px] m-[5px] py-[10px] px-[15px] uppercase justify-center bg-[#4b5966] text-[#fff] transition-all duration-[0.3s] ease-in-out relative rounded-[5px] items-center min-w-[160px] font-semibold tracking-[0.02rem] border-[0] hover:bg-[#5caf90] hover:text-[#fff]"
                              >
                                {!checkproduct()
                                  ? "Add To Cart"
                                  : "Remove From Cart"}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RelatedProduc id={data?.category_id} name={data?.name} />
      <Fotter />
    </>
  );
}

export default Product;
