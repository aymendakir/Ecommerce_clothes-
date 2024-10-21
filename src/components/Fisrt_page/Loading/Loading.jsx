import React, { useEffect, useState } from "react";
import LoadingIamge from "../../../assets/Image/wired-outline-1788-kimono-hover-rack.webp";
import { Loader } from "lucide-react";
function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } else {
      window.addEventListener("load", handleLoad);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 7000);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      {isLoading && (
        <main className="fixed h-full w-full top-0 left-0 z-[1000000] flex items-center justify-center flex-col">
          <div className="bg-white w-full h-full flex flex-col items-center justify-center">
            <img src={LoadingIamge} width={200} />
            <Loader size={50} className="animate-spin"></Loader>
          </div>
          {/*  <div className="bg-gray-800/60 w-full h-full absolute"></div>
      <div className="max-w-screen-xl mx-auto flex flex-col  justify-center items-center p-10  w-[60%] relative bg-white gap-11 rounded-lg">
        <div className=" ">
          <h2
            id="newsletter-headline"
            className="text-2xl leading-9 tracking-tight text-gray-700 font-semilbold sm:text-4xl sm:leading-10"
          >
            Sign up for our newsletter
          </h2>
          <p className="max-w-3xl mt-3 text-gray-500">
            Stay up-to-date on news and updates about this project by email.
          </p>
        </div>
        <div className="max-w-md mt-8 lg:mt-0 lg:ml-8">
          <form aria-labelledby="newsletter-headline">
            <div className="">
              <div className="sm:flex items-center">
                <input
                  name="EMAIL"
                  type="email"
                  required="required"
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="w-full px-5 py-3 text-base leading-6 transition duration-150 ease-in-out border-2 rounded-md appearance-none focus:outline-none sm:max-w-xs border-gray-200 text-gray-900 placeholder-gray-500 focus:placeholder-gray-400 bg-white"
                />
                <div className="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="block px-5 py-3 text-white transition duration-100 ease-in-out bg-blue-500 border border-transparent rounded shadow-sm hover:bg-blue-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Notify me
                  </button>
                </div>
              </div>
            </div>
          </form>
          <p className="mt-3 text-sm leading-5 text-gray-500">
            I will never spam or share your email under any circustance.
          </p>
        </div>
      </div> */}
        </main>
      )}
    </>
  );
}

export default Loading;
