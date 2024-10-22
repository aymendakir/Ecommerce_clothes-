import React, { useEffect } from "react";
import Card from "../../costume-ui/Card";
import Aos from "aos";
import "aos/dist/aos.css";
import useAuthContext from "../../../../Context/ApiContext";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
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
      className=" py-[40px] max-[767px]:py-[30px] w-full "
      data-aos="fade-up"
      data-wow-duration="2s"
    >
      <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] w-full">
        <div className=" w-full inline-flex justify-between px-[12px] max-[991px]:flex-col">
          <div className="">
            <div className="section-title mb-[20px] pb-[20px] flex flex-start">
              <div className="section-detail">
                <h2 className="gi-title mb-[0] text-[25px] max-[991px]:text-[24px] max-[767px]:text-[22px] max-[575px]:text-[20px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1] font-manrope tracking-[0.01rem]">
                  New <span className="text-[#5caf90]">Arrivals</span>
                </h2>
                <p className="max-w-[400px] mt-[10px] text-[14px] text-[#777] leading-[18px] font-light">
                  Shop online for new arrivals and get free shipping!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full  mb-[-24px]">
          <div className="flex flex-wrap items-center justify-center gap-10 w-full">
            {isLoading && <Loader2 className={``} size={50} />}
            {data?.slice(0, 8).map((Product, index) => (
              <Card key={index} data={Product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
