import React, { useEffect } from "react";
import Card from "../costume-ui/Card";
import useAuthContext from "../../../Context/ApiContext";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";

function RelatedProduc(props) {
  const { ProductByCategory } = useAuthContext([]);
  const { data, refetch } = useQuery({
    queryKey: ["productRelated"],
    queryFn: () => {
      return ProductByCategory(props?.id);
    },
    refetchIntervalInBackground: false,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
  useEffect(() => {
    setTimeout(() => {
      refetch();
    }, 5000);
  }, [props?.id]);
  return (
    <section className="section-related-product py-[50px] max-[1199px]:py-[35px]">
      <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full">
          <div className="w-full px-[12px]">
            <div
              className="section-title mb-[20px] pb-[20px] z-[5] relative flex flex-col items-center text-center max-[991px]:pb-[0] aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="section-detail max-[991px]:mb-[12px]">
                <h2 className="bb-title font-quicksand mb-[0] p-[0] text-[25px] font-bold text-[#3d4750] relative inline capitalize leading-[1] tracking-[0.03rem] max-[767px]:text-[23px]">
                  Related <span className="text-[#6c7fd8]">Product</span>
                </h2>
                <p className="font-Poppins max-w-[400px] mt-[10px] text-[14px] text-[#686e7d] leading-[18px] font-light tracking-[0.03rem] max-[991px]:mx-[auto]">
                  Browse The Collection of Top Products.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-[12px]">
            <div className="bb-deal-slider m-[-12px]">
              <div className="bb-deal-block owl-carousel owl-loaded owl-drag">
                <Swiper slidesPerView="4" loop={true} grabCursor>
                  {data
                    ?.filter((index) => {
                      return index.name !== props.name;
                    })
                    .map((Product,index) => (
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
    </section>
  );
}

export default RelatedProduc;
