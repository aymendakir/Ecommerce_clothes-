import { Loader2, Search } from "lucide-react";
import React, { useState } from "react";
import Card from "../costume-ui/Card";
import useAuthContext from "../../../Context/ApiContext";
import { useQuery } from "@tanstack/react-query";

function Recherche(props) {
  const [valueBar, setValueBar] = useState("");
  const { RechercheProduct } = useAuthContext([]);
  const {
    data: product,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      return RechercheProduct(valueBar);
    },
  });
  return (
    <>
      {props?.status && (
        <main className="w-[100%] h-[100%] mx-auto bg-gray-400/90 fixed bottom-0 left-0 z-[9999] space-y-10 overflow-scroll ">
          <p
            className="absolute right-3 text-3xl"
            onClick={() => {
              props?.OnRemoveBar(!props?.status);
            }}
          >
            x
          </p>
          <div className=" mt-[20px] mx-[auto] max-[991px]:m-0 w-[80%]">
            <div className="relative w-full min-w-[700px] px-[30px]  max-[1399px]:min-w-[500px] max-[1199px]:min-w-[400px] max-[991px]:p-0 max-[767px]:min-w-[350px] max-[480px]:min-w-[300px] max-[320px]:min-w-full !z-[99999]">
              <form className=" w-[100%]  flex border-[1px] border-solid border-[#eee] items-center rounded-[5px] bg-white ">
                <input
                  className="relative  block w-[100%] min-h-[50px] h-[50px] max-[991px]:h-[40px] max-[991px]:min-h-[40px] px-[15px] text-[13px] font-normal leading-[1] text-[#777] bg-transparent outline-[0] border-[0] tracking-[0.6px]"
                  placeholder="Search Products..."
                  type="text"
                  onChange={(e) => {
                    setValueBar(e.target.value);
                    refetch();
                  }}
                />
                <button
                  type="submit"
                  className="search_submit relative flex items-center justify-center w-[48px] h-[40px] basis-[48px]"
                >
                  <Search className="fi-rr-search text-[#4b5966] h-[18px] w-[18px] transition-all duration-[0.3s] ease-in-out" />
                </button>
              </form>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-10 w-full ">
            {isLoading && <Loader2 className={``} size={50} />}
            {product?.map((Product, index) => (
              <Card key={index} data={Product} />
            ))}
          </div>
        </main>
      )}
    </>
  );
}

export default Recherche;
