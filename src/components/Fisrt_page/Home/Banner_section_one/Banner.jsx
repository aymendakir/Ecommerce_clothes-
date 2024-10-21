import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import image from "../../../../assets/Image/Burgundy-Utility-Laydowns-.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

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
    <main
      className="w-[90%] rounded-xl mx-auto relative h-[55vh] border border-gray-300 mb-10"
      data-aos="fade-up"
    >
      <LazyLoadImage
        src={image}
        alt="banner image"
        className="absolute w-full h-full top-0 left-0 rounded-xl"
      />

      <div className="lato-thin black relative grid justify-items-center h-1/2 mt-20 max-md:hidden">
        <h1 className="text-[64px] font-[50] leading-[75px] ">
          Men{"’"}s Outfit
          <br />
          Guide
        </h1>
        <h3 className="lato-light text-xl">
          The fundamentals of great casual outfits
        </h3>
      </div>
    </main>
  );
}

export default Banner;
