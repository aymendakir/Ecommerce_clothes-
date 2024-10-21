import React, { useEffect } from "react";
import iamge1 from "../../../../assets/Image/solid-same-color-top-utility-shirt-.jpg";
import iamge2 from "../../../../assets/Image/tone-on-tone-casual-shirt-.jpg";
import Aos from "aos";
function Banner() {
  useEffect(() => {
    Aos.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <section className=" overflow-hidden py-[40px] max-[767px]:py-[30px] h-[50vh]">
      <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] h-full">
        <div className="w-full flex flex-wrap h-full">
          <div
            className="min-[768px]:w-[50%] w-full px-[12px] h-full "
            data-aos="fade-left"
            data-wow-duration="2s"
          >
            <div className="h-full">
              <div className=" flex flex-row relative overflow-hidden h-full">
                <div className=" w-full relative">
                  <span className="lbl py-[2px] px-[7px] text-[12px] rounded-[5px] absolute top-[15px] left-[15px] capitalize bg-[#4b5966] text-[#fff] opacity-[0.8]">
                    70% Off
                  </span>
                  <img
                    src={iamge2}
                    alt="banner"
                    className="w-full rounded-[5px] bg-cover w-full h-[150%]"
                  />
                </div>
                <div className=" max-w-[200px] flex flex-col items-start justify-center absolute top-[50%] right-[50px] translate-y-[-50%] max-[1199px]:max-w-[160px] max-[1199px]:right-[15px] max-[991px]:max-w-[110px] max-[767px]:max-w-[155px] max-[420px]:max-w-[150px] max-[360px]:max-w-[110px] max-[360px]:top-auto max-[360px]:bottom-[30px] max-[360px]:right-[15px] max-[360px]:transform-none"></div>
                <button className="absolute -left-5 bottom-10 w-[80px] h-[32px] bg-[#a87761d0] -rotate-90 lato-light text-sm rounded-sm">
                  DISCOVER
                </button>
              </div>
            </div>
          </div>
          <div
            className="min-[768px]:w-[50%] w-full px-[12px] h-full"
            data-aos="fade-right"
            data-wow-duration="2s"
          >
            <div className=" max-[767px]:mt-[30px] h-full">
              <div className="gi-bnr-body flex flex-row relative overflow-hidden h-full">
                <div className="gi-bnr-img w-full relative">
                  <span className="lbl py-[2px] px-[7px] text-[12px] rounded-[5px] absolute top-[15px] left-[15px] capitalize bg-[#4b5966] text-[#fff] opacity-[0.8]">
                    50% Off
                  </span>
                  <img
                    src={iamge1}
                    alt="iamge1"
                    className="w-full rounded-[5px]"
                  />
                </div>
                <div className=" max-w-[200px] flex flex-col items-start justify-center absolute top-[50%] right-[50px] translate-y-[-50%] max-[1199px]:max-w-[160px] max-[1199px]:right-[15px] max-[991px]:max-w-[110px] max-[767px]:max-w-[155px] max-[420px]:max-w-[150px] max-[360px]:max-w-[110px] max-[360px]:top-auto max-[360px]:bottom-[30px] max-[360px]:right-[15px] max-[360px]:transform-none"></div>
                <button className="absolute -left-5 bottom-10 w-[80px] h-[32px] bg-[#a87761d0] -rotate-90 lato-light text-sm rounded-sm">
                  DISCOVER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
