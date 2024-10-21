import Aos from "aos";
import "aos/dist/aos.css";

import { Eye, Heart, ShoppingBag, Stars } from "lucide-react";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../../costume-ui/Card";
import useAuthContext from "../../../../Context/ApiContext";
import { useQuery } from "@tanstack/react-query";

function Product() {
  const { getProduct } = useAuthContext([]);
  const { data, isLoading, isError, isFetched } = useQuery({
    queryKey: ["ProductOne"],
    queryFn: () => {
      return getProduct();
    },
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    retryOnMount: 3,
  });
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
      className="gi-deal-section py-[40px] max-[767px]:py-[30px] "
      data-aos="fade-up"
      data-wow-duration="2s"
    >
      <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="w-full flex flex-wrap px-[12px] overflow-hidden">
          <div className="gi-deal-section w-full">
            <div className="gi-products">
              <div
                className="section-title mb-[20px] relative flex justify-between pb-[20px] z-[5] max-[767px]:flex-col"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="200"
              >
                <div className="section-detail">
                  <h2 className="gi-title mb-[0] text-[25px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1] font-manrope max-[991px]:text-[24px] max-[767px]:text-[22px] max-[575px]:text-[20px]">
                    Day of the <span className="text-[#5caf90]">deal</span>
                  </h2>
                  <p className="max-w-[400px] mt-[10px] text-[14px] text-[#777] leading-[18px]">
                    Don{"'"}t wait. The time will never be just right.
                  </p>
                </div>
              </div>
              <div
                className=" mx-[-12px]"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="300"
              >
                <div className=" w-full  ">
                  <Swiper slidesPerView="auto" grabCursor className="w-full">
                    {data?.map((Product, index) => (
                      <SwiperSlide key={index} className="!w-[320px] ">
                        <Card data={Product} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
