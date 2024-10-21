import Aos from "aos";
import { BadgePercent, HandCoins, Handshake, Truck } from "lucide-react";
import React, { useEffect } from "react";

function Service() {
  useEffect(() => {
    Aos.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <section className="gi-service-section py-[40px] max-[767px]:py-[30px]">
      <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="w-full flex flex-wrap mt-[-12px] mb-[-12px]">
          <div className="min-[992px]:w-[25%] min-[576px]:w-[50%] w-full p-[12px] wow fadeInUp">
            <div className="gi-ser-inner transition-all duration-[0.3s] ease delay-[0s] p-[30px] max-[991px]:p-[24px] h-full flex items-center justify-center flex-col text-center bg-[#fff] rounded-[5px] border-[1px] border-solid border-[#eee]">
              <div className="gi-service-image mb-[15px]">
                <Truck
                  className="fi fi-ts-truck-moving text-[40px] text-[#A87861] leading-[0]"
                  size={70}
                ></Truck>
              </div>
              <div className="gi-service-desc">
                <h3 className="font-Poppins text-[18px] font-medium text-[#4b5966] leading-[1.2] tracking-[0.6px] mb-[10px] max-[575px]:text-[16px]">
                  Free Shipping
                </h3>
                <p className="m-[0] text-[14px] text-[#777] leading-[1.5] tracking-[0.5px]">
                  Free shipping on all US order or order above $200
                </p>
              </div>
            </div>
          </div>
          <div
            className="min-[992px]:w-[25%] min-[576px]:w-[50%] w-full p-[12px] "
            data-aos="fade-up"
            data-wow-delay=".4s"
          >
            <div className="gi-ser-inner transition-all duration-[0.3s] ease delay-[0s] p-[30px] max-[991px]:p-[24px] h-full flex items-center justify-center flex-col text-center bg-[#fff] rounded-[5px] border-[1px] border-solid border-[#eee]">
              <div className="gi-service-image mb-[15px]">
                <Handshake
                  className="fi fi-ts-hand-holding-seeding text-[40px] text-[#A87861] leading-[0]"
                  size={70}
                ></Handshake>
              </div>
              <div className="gi-service-desc">
                <h3 className="font-Poppins text-[18px] font-medium text-[#4b5966] leading-[1.2] tracking-[0.6px] mb-[10px] max-[575px]:text-[16px]">
                  24X7 Support
                </h3>
                <p className="m-[0] text-[14px] text-[#777] leading-[1.5] tracking-[0.5px]">
                  Contact us 24 hours a day, 7 days a week
                </p>
              </div>
            </div>
          </div>
          <div
            className="min-[992px]:w-[25%] min-[576px]:w-[50%] w-full p-[12px] "
            data-aos="fade-up"
            data-wow-delay=".6s"
          >
            <div className="gi-ser-inner transition-all duration-[0.3s] ease delay-[0s] p-[30px] max-[991px]:p-[24px] h-full flex items-center justify-center flex-col text-center bg-[#fff] rounded-[5px] border-[1px] border-solid border-[#eee]">
              <div className="gi-service-image mb-[15px]">
                <BadgePercent
                  className="fi fi-ts-badge-percent text-[40px] text-[#A87861] leading-[0]"
                  size={70}
                ></BadgePercent>
              </div>
              <div className="gi-service-desc">
                <h3 className="font-Poppins text-[18px] font-medium text-[#4b5966] leading-[1.2] tracking-[0.6px] mb-[10px] max-[575px]:text-[16px]">
                  30 Days Return
                </h3>
                <p className="m-[0] text-[14px] text-[#777] leading-[1.5] tracking-[0.5px]">
                  Simply return it within 30 days for an exchange
                </p>
              </div>
            </div>
          </div>
          <div
            className="min-[992px]:w-[25%] min-[576px]:w-[50%] w-full p-[12px] "
            data-aos="fade-up"
            data-wow-delay=".8s"
          >
            <div className="gi-ser-inner transition-all duration-[0.3s] ease delay-[0s] p-[30px] max-[991px]:p-[24px] h-full flex items-center justify-center flex-col text-center bg-[#fff] rounded-[5px] border-[1px] border-solid border-[#eee]">
              <div className="gi-service-image mb-[15px]">
                <HandCoins
                  className="fi fi-ts-donate text-[40px] text-[#A87861] leading-[0]"
                  size={70}
                ></HandCoins>
              </div>
              <div className="gi-service-desc">
                <h3 className="font-Poppins text-[18px] font-medium text-[#4b5966] leading-[1.2] tracking-[0.6px] mb-[10px] max-[575px]:text-[16px]">
                  Payment Secure
                </h3>
                <p className="m-[0] text-[14px] text-[#777] leading-[1.5] tracking-[0.5px]">
                  Contact us 24 hours a day, 7 days a week
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
