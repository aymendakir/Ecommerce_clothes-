import { LayoutGrid, LayoutList } from "lucide-react";
import React, { useEffect, useState } from "react";
import Card from "../costume-ui/Card";
import useAuthContext from "../../../Context/ApiContext";
import { useQuery } from "@tanstack/react-query";
import LIstCard from "../costume-ui/LIstCard";
import CheckBoxs from "../costume-ui/ChecBox";
import Navigation from "../Navigation/Navigation";
import Fotter from "../Home/Fotter/Fotter";
import { useParams } from "react-router-dom";
import useAuthContextCart from "../../../Context/CartContexte";

const sizeOptions = [
  { value: "small", label: "Small", size: "S" },
  { value: "medium", label: "Medium", size: "M" },
  { value: "large", label: "Large", size: "L" },
  { value: "xlarge", label: "Extra Large", size: "XL" },
  { value: "xxlarge", label: "Extra Extra Large", size: "XXL" },
];
const colors = [
  "Red",
  "Green",
  "Blue",
  "Yellow",
  "Purple",
  "Orange",
  "Pink",
  "Black",
  "White",
  "Gray",
];
function ShopProduct() {
  const [layout, setLayout] = useState("grid");
  const { id } = useParams();

  const { getProduct, GetCategory, ProductByCategory } = useAuthContext([]);
  const { data, isLoading, isError, isFetched } = useQuery({
    queryKey: ["ProductShop"],
    queryFn: () => {
      if (!id) {
        return getProduct();
      } else {
        return ProductByCategory(id);
      }
    },
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    retryOnMount: 3,
  });
  const { data: categoryData } = useQuery({
    queryKey: ["CategoriesFilter"],
    queryFn: () => {
      return GetCategory();
    },
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    retryOnMount: 3,
  });
  const [dataFilter, setDataFilter] = useState([]);

  useEffect(() => {
    setDataFilter(data);
  }, [data]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);
  const [colorSelected, setColorSelected] = useState("");
  const [maxPrice, setMaxPrice] = useState(1000.0);
  const [minPrice, setMinPrice] = useState(2);

  function handleDataFromChild(brand) {
    let updatedBrands = [...selectedCategory];

    if (updatedBrands.includes(brand)) {
      updatedBrands = updatedBrands.filter((b) => b !== brand);
    } else {
      updatedBrands.push(brand);
    }

    setSelectedCategory(updatedBrands);

    if (updatedBrands.length > 0) {
      const filteredData = data.filter((item) =>
        updatedBrands.includes(item?.title)
      );
      setDataFilter(filteredData);
    } else {
      setDataFilter(data);
    }
    applyFilters(
      updatedBrands,
      selectedSize,
      colorSelected,
      Number(minPrice) || 1,
      Number(maxPrice) || 1000
    );
  }
  function handleDataSize(size) {
    let updatedBrands = [...selectedSize];

    if (updatedBrands.includes(size)) {
      updatedBrands = updatedBrands.filter((b) => b !== size);
    } else {
      updatedBrands.push(size);
    }

    setSelectedSize(updatedBrands);

    if (updatedBrands.length > 0) {
      const filteredData = data.filter((item) => {
        return item?.size?.some((size) => updatedBrands.includes(size));
      });

      setDataFilter(filteredData);
    } else {
      setDataFilter(data);
    }
    applyFilters(
      selectedCategory,
      updatedBrands,
      colorSelected,
      minPrice,
      maxPrice
    );
  }
  function handleDataColor(color) {
    let updatedBrands = [...colorSelected];

    if (updatedBrands.includes(color)) {
      updatedBrands = updatedBrands.filter((b) => b !== color);
    } else {
      updatedBrands.push(color);
    }

    setColorSelected(updatedBrands);

    if (updatedBrands.length > 0) {
      const filteredData = data.filter((item) =>
        item?.color?.some((color) =>
          updatedBrands.includes(color.toLowerCase())
        )
      );

      console.log(updatedBrands, color, filteredData);

      setDataFilter(filteredData);
    } else {
      setDataFilter(data);
    }
    applyFilters(
      selectedCategory,
      selectedSize,
      updatedBrands,
      minPrice,
      maxPrice
    );
  }
  const HandleMin = (min) => {
    setMinPrice(min);
    applyFilters(selectedCategory, selectedSize, colorSelected, min, maxPrice);
  };

  const HandleMax = (max) => {
    setMaxPrice(max);
    applyFilters(selectedCategory, selectedSize, colorSelected, minPrice, max);
  };

  const applyFilters = (category, sizes, colors, min, max) => {
    let filteredData = data;

    if (category.length > 0) {
      filteredData = filteredData.filter((item) =>
        category.includes(item?.title)
      );
    }
    if (sizes.length > 0) {
      filteredData = filteredData.filter((item) => {
        return item?.size?.some((size) => sizes.includes(size));
      });
    }
    if (colors.length > 0) {
      filteredData = filteredData.filter((item) => {
        return item?.color?.some((color) =>
          colors.includes(color.toLowerCase())
        );
      });
    }
    if (min > 0) {
      filteredData = filteredData.filter(
        (item) => item.price.slice(0, 2) >= Number(min)
      );
    }
    if (max > 0) {
      filteredData = filteredData.filter(
        (item) => item.price.slice(0, 2) <= Number(max)
      );
    }
    setDataFilter(filteredData);
  };
  const checkproduct = () => {
    return DataCart?.findIndex((product) => product.id === id) !== -1;
  };
  return (
    <>
      <Navigation />
      <section className="gi-category py-[40px] max-[767px]:py-[30px]">
        <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="flex flex-wrap w-full">
            <div className=" min-[992px]:order-[6] min-[768px]:order-[-1] min-[992px]:w-[75%] min-[768px]:w-full w-full px-[12px]">
              <div className=" flex items-center justify-between text-[14px] border-[1px] border-solid border-[#eee] rounded-[5px] mb-[30px]">
                <div className="min-[768px]:w-[50%] w-full gi-grid-list">
                  <div className=" ml-[5px] flex items-center flex-row">
                    <button
                      type="button"
                      className={`h-[40px] w-[40px] border-[0] rounded-lg flex items-center justify-center flex-row ${
                        layout === "grid" && "bg-[#a877619a]"
                      }`}
                      onClick={() => {
                        setLayout("grid");
                      }}
                    >
                      <LayoutGrid className=" text-[20px] text-[#4b5966] leading-[0]"></LayoutGrid>
                    </button>
                    <button
                      type="button"
                      className={`h-[40px] w-[40px] border-[0] rounded-lg flex items-center justify-center flex-row ${
                        layout === "list" && "bg-[#a877619a]"
                      }`}
                      onClick={() => {
                        setLayout("list");
                      }}
                    >
                      <LayoutList className=" text-[20px] text-[#4b5966] leading-[0]"></LayoutList>
                    </button>
                  </div>
                </div>
                <div className="min-[768px]:w-[50%] w-full gi-sort-select flex justify-end items-center"></div>
              </div>

              <div className="shop-pro-content">
                <div className=" mx-[-12px]">
                  <div className="  w-full">
                    <div
                      className={` pb-[24px] h-full grid  ${
                        layout === "grid"
                          ? "grid-cols-3 gap-5 w-full max-md:grid-cols-1 justify-items-center max-lg:grid-cols-2"
                          : "grid-cols-1 gap-5 w-full max-md:grid-cols-1 justify-items-center max-lg:grid-cols-1"
                      }`}
                    >
                      {layout === "grid"
                        ? dataFilter?.map((product, index) => (
                            <Card key={index} data={product} />
                          ))
                        : dataFilter?.map((product, index) => (
                            <LIstCard key={index} data={product} />
                          ))}
                    </div>
                  </div>
                </div>
                <div className="gi-pro-pagination pt-[15px] flex justify-between items-center border-t-[1px] border-solid border-[#eee] max-[575px]:flex-col">
                  <span className="text-[14px] text-[#777] max-[575px]:mb-[10px]">
                    Showing 1-12 of 21 item(s)
                  </span>
                  <ul className="gi-pro-pagination-inner">
                    <li className="inline-block float-left mr-[5px]">
                      <a
                        className="transition-all duration-[0.3s] ease-in-out w-[32px] h-[32px] font-light text-[#777] leading-[32px] bg-[#eee] flex text-center align-top text-[16px] justify-center items-center rounded-[5px] active"
                        href="#"
                      >
                        1
                      </a>
                    </li>
                    <li className="inline-block float-left mr-[5px]">
                      <a
                        className="transition-all duration-[0.3s] ease-in-out w-[32px] h-[32px] font-light text-[#777] leading-[32px] bg-[#eee] flex text-center align-top text-[16px] justify-center items-center rounded-[5px] hover:text-[#fff] hover:bg-[#5caf90]"
                        href="#"
                      >
                        2
                      </a>
                    </li>
                    <li className="inline-block float-left mr-[5px]">
                      <a
                        className="transition-all duration-[0.3s] ease-in-out w-[32px] h-[32px] font-light text-[#777] leading-[32px] bg-[#eee] flex text-center align-top text-[16px] justify-center items-center rounded-[5px] hover:text-[#fff] hover:bg-[#5caf90]"
                        href="#"
                      >
                        3
                      </a>
                    </li>
                    <li className="inline-block float-left mr-[5px]">
                      <span className="w-[20px] text-[#777] block text-center text-[14px] tracking-[0.02rem] max-[575px]:mb-[10px]">
                        ...
                      </span>
                    </li>
                    <li className="inline-block float-left mr-[5px]">
                      <a
                        className="transition-all duration-[0.3s] ease-in-out w-[32px] h-[32px] font-light text-[#777] leading-[32px] bg-[#eee] flex text-center align-top text-[16px] justify-center items-center rounded-[5px] hover:text-[#fff] hover:bg-[#5caf90]"
                        href="#"
                      >
                        8
                      </a>
                    </li>
                    <li className="inline-block float-left">
                      <a
                        className="next w-auto px-[13px] text-[#fff] bg-[#5caf90] leading-[30px] h-[32px] bg-[#eee] flex text-center align-top text-[16px] justify-center items-center rounded-[5px]"
                        href="#"
                      >
                        Next{" "}
                        <i className="gicon gi-angle-right ml-[10px] transition-all duration-[0.3s] ease-in-out text-[#fff]"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="gi-shop-sidebar sticky top-[24px] min-[992px]:order-[-1] min-[768px]:order-[6] min-[992px]:w-[25%] min-[768px]:w-full w-full max-[991px]:mt-[30px] px-[12px]">
              <div id="shop_sidebar">
                <div className="gi-sidebar-wrap p-[15px] rounded-[5px] border-[1px] border-solid border-[#eee]">
                  <div className="gi-sidebar-block mb-[15px]">
                    <div className="gi-sb-title border-b-[1px] border-solid border-[#eee] pb-[15px]">
                      <h3 className="gi-sidebar-title font-semibold tracking-[0] relative text-[#4b5966] w-full flex justify-between font-Poppins text-[17px] leading-[1.2]">
                        Category
                        <div className="gi-sidebar-res">
                          <i className="gicon gi-angle-down"></i>
                        </div>
                      </h3>
                    </div>
                    <div className="gi-sb-block-content mt-[15px] gi-sidebar-dropdown">
                      <ul className="space-y-4">
                        {categoryData?.map((index) => (
                          <CheckBoxs
                            key={index.id}
                            value={index.title}
                            handleCheck={handleDataFromChild}
                          />
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="gi-sidebar-block mb-[15px]">
                    <div className="gi-sb-title border-b-[1px] border-solid border-[#eee] pb-[15px]">
                      <h3 className="gi-sidebar-title font-semibold tracking-[0] relative text-[#4b5966] w-full flex justify-between font-Poppins text-[17px] leading-[1.2]">
                        Weight
                        <div className="gi-sidebar-res">
                          <i className="gicon gi-angle-down"></i>
                        </div>
                      </h3>
                    </div>
                    <div className="gi-sb-block-content mt-[15px] gi-sidebar-dropdown">
                      <ul className="space-y-4">
                        {sizeOptions?.map((index) => (
                          <CheckBoxs
                            key={index.id}
                            value={index.size}
                            handleCheck={handleDataSize}
                          />
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="gi-sidebar-block mb-[15px] color-block gi-sidebar-block-clr">
                    <div className="gi-sb-title border-b-[1px] border-solid border-[#eee] pb-[15px]">
                      <h3 className="gi-sidebar-title font-semibold tracking-[0] relative text-[#4b5966] w-full flex justify-between font-Poppins text-[17px] leading-[1.2]">
                        Color
                        <div className="gi-sidebar-res">
                          <i className="gicon gi-angle-down"></i>
                        </div>
                      </h3>
                    </div>
                    <div className="gi-sb-block-content mt-[20px] gi-sidebar-dropdown">
                      <ul className="flex flex-wrap gap-3 justify-start items-center">
                        {colors.map((color, index) => (
                          <li
                            key={index}
                            className={` w-5 h-5 p-2 rounded-full border border-gray-400 ${
                              colorSelected.includes(color.toLowerCase()) &&
                              "border-2 !border-black"
                            }`}
                            style={{ backgroundColor: color }}
                            onClick={() => {
                              handleDataColor(color.toLowerCase());
                            }}
                          ></li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="gi-sidebar-block mb-[15px]">
                    <div className="gi-sb-title border-b-[1px] border-solid border-[#eee] pb-[15px]">
                      <h3 className="gi-sidebar-title font-semibold tracking-[0] relative text-[#4b5966] w-full flex justify-between font-Poppins text-[17px] leading-[1.2]">
                        Price
                        <div className="gi-sidebar-res">
                          <i className="gicon gi-angle-down"></i>
                        </div>
                      </h3>
                    </div>
                    <div className="gi-sb-block-content gi-price-range-slider es-price-slider mt-[20px] gi-sidebar-dropdown">
                      <div className="gi-price-filter flex justify-between flex-col">
                        <div className="gi-price-input mb-[15px] p-[10px] flex justify-center items-center rounded-[5px] bg-[#f8f8fb]">
                          <label className="filter__label text-[14px] text-[#777] flex flex-col justify-center items-center">
                            From
                            <input
                              type="number"
                              className="filter__input rounded-[5px] h-[30px] border-[0] p-[0] max-w-[48px] leading-[30px] bg-[#fff] text-center text-[14px] text-[#777] outline-[0]"
                              onChange={(e) => {
                                HandleMin(e.target.value);
                              }}
                              defaultValue={1}
                            />
                          </label>
                          <span className="gi-price-divider relative border-b-[1px] border-solid border-[#777] w-[10px] h-[1px] mx-[10px]"></span>
                          <label className="filter__label text-[14px] text-[#777] flex flex-col justify-center items-center">
                            To
                            <input
                              type="number"
                              className="filter__input rounded-[5px] h-[30px] border-[0] p-[0] max-w-[48px] leading-[30px] bg-[#fff] text-center text-[14px] text-[#777] outline-[0]"
                              onChange={(e) => {
                                HandleMax(e.target.value);
                              }}
                              defaultValue={1000}
                              max={1000}
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Fotter />
    </>
  );
}

export default ShopProduct;
