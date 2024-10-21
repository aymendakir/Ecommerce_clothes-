import { useQuery } from "@tanstack/react-query";
import Aos from "aos";
import "aos/dist/aos.css";

import { Videotape } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useAuthContext from "../../../../Context/ApiContext";
import { Link } from "react-router-dom";

function Category() {
  const { GetCategory } = useAuthContext([]);
  const { data, isLoading, isError, isFetched } = useQuery({
    queryKey: ["Categories"],
    queryFn: () => {
      return GetCategory();
    },
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    retryOnMount: 3,
  });
  const [isHovered, setIsHovered] = useState(null);
  useEffect(() => {
    Aos.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <section
      className="gi-category body-bg py-[40px] max-[767px]:py-[30px] wow "
      data-aos="fade-up"
    >
      <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="w-full flex flex-wrap px-[12px] mb-[-15px]">
          <div className="min-[1200px]:w-full basis-auto max-w-full border-content-color">
            <div className="gi-category-block owl-carousel flex owl-loaded owl-drag">
              <div className="w-[100%]">
                <div>
                  <div>
                    <Swiper
                      slidesPerView="4"
                      loop={true}
                      grabCursor
                      className="w-full"
                    >
                      {data?.map((index, key) => (
                        <SwiperSlide key={key} className="!w-[220px] py-3! ">
                          <Link to={`/Shop/${index.id}`}>
                            <div
                              data-aos="fade-up"
                              className="box duration-[0.3s] ease-in-out p-[15px] rounded-[5px] relative bg-gradient-to-b from-[#a87761ac] via-[#a8776126] cursor-pointer w-[200px] border border-gray-100"
                              style={{
                                transition: "background-color 1s ease-in-out",
                                backgroundColor:
                                  isHovered === index ? "#a877619a" : "initial",
                              }}
                              onMouseEnter={() => setIsHovered(index)}
                              onMouseLeave={() => setIsHovered(null)}
                            >
                              <div className=" h-full p-[15px] flex flex-col items-center justify-center bg-[#fff] relative rounded-[5px] z-[5]">
                                <span className=" px-[5px] absolute top-[0] right-[0] bg-[#A87861] text-[#fff] text-[12px] font-semibold rounded-bl-[5px] rounded-tr-[5px]">
                                  10%
                                </span>
                                <img
                                  src={index?.image}
                                  width={64}
                                  className=" transition-all duration-[0.3s] ease-in-out text-[40px] my-[10px] text-[#5caf90] leading-[0]"
                                />
                                <div className=" text-center">
                                  <p>
                                    <span className=" m-[0] text-[15px] leading-[22px] font-semibold text-[#4b5966] capitalize font-manrope">
                                      {index?.title}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;
