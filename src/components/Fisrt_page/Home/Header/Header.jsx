import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ArrowLeft, ArrowRight } from "lucide-react";
import hero1 from "../../../../assets/Image/hero-1.jpg.png";
import hero2 from "../../../../assets/Image/hero-2.jpg (1).png";

import gsap from "gsap";
function Header() {
  const initGsapAnimations = () => {
    gsap.fromTo(
      ".animate-fade-up",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out", stagger: 0.3 }
    );
    gsap.fromTo(
      ".animate-fade-down",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out", stagger: 0.3 }
    );
  };

  useEffect(() => {
    // Initial GSAP animations on component mount
    initGsapAnimations();
  }, []);

  // Swiper's slide change event handler
  const handleSlideChange = () => {
    // Refresh GSAP animations on slide change
    gsap.killTweensOf(".animate-fade-up");
    gsap.killTweensOf(".animate-fade-down"); // Kill previous animations
    // Kill previous animations
    initGsapAnimations(); // Re-run animations
  };

  return (
    <main>
      <header className="w-[90%] mx-auto rounded-xl  h-[70vh] max-md:h-[40vh] my-10 relative z-0">
        <Swiper
          style={{
            "--swiper-pagination-color": "#A87861",
            "--swiper-pagination-bullet": "20px",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "16px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
          pagination={true}
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={handleSlideChange} // Trigger refresh on slide change
          onSwiper={handleSlideChange}
        >
          <SwiperSlide className="w-full h-[70vh] cursor-grab max-md:h-[40vh]">
            <LazyLoadImage
              className="absolute top-0 left-0 w-full h-full z-0  "
              src={hero1}
              alt="hero1"
            />
            <div className="relative w-1/2 flex flex-col items-start justify-center h-full font-serif gap-4 ml-32 max-md:ml-5 ">
              <p className="text-red-500 text-xl font-semibold font-sans animate-fade-down">
                Summer Collection
              </p>
              <h1 className="text-3xl font-bold font-sans max-md:hidden">
                Fall - Winter <br />
                Collection 2030
              </h1>

              <p className="w-[70%] opacity-80 max-md:hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                vel iste odit! Ratione rerum numquam harum quaerat, eius culpa
                architecto. Ex ut doloremque saepe magni laborum adipisci modi a
                quae?
              </p>
              <button className="w-[180px] h-[50px] max-md:h-[30px] max-md:w-[100px] max-md:text-sm bg-black border-white/80 border mt-5 font-mono text-white font-semibold text-lg flex items-center justify-center gap-4 animate-fade-up">
                <span>SHOP NOW</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full h-[70vh] relative cursor-grab max-md:h-[40vh]">
            <LazyLoadImage
              className="absolute top-0 left-0 w-full h-full "
              src={hero2}
              alt="hero2"
            />
            <div className="relative w-1/2 flex flex-col items-start justify-center h-full font-serif gap-4 ml-32 max-md:ml-5">
              <p className="text-red-500 text-xl font-semibold font-sans animate-fade-down">
                Summer Collection
              </p>
              <h1 className="text-3xl font-bold font-sans max-md:hidden">
                Fall - Winter <br />
                Collection 2030
              </h1>

              <p className="w-[70%] opacity-80 max-md:hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                vel iste odit! Ratione rerum numquam harum quaerat, eius culpa
                architecto. Ex ut doloremque saepe magni laborum adipisci modi a
                quae?
              </p>
              <button className="w-[180px] h-[50px] max-md:h-[30px] max-md:w-[100px] max-md:text-sm bg-black border-white/80 border mt-5 font-mono text-white font-semibold text-lg flex items-center justify-center gap-4 animate-fade-up">
                <span>SHOP NOW</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </header>
    </main>
  );
}

export default Header;
