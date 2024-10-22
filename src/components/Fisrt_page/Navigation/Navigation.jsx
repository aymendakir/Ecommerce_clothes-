import {
  BadgePercent,
  ChevronDown,
  ChevronRight,
  Heart,
  LayoutGrid,
  LogIn,
  MapPin,
  PhoneCall,
  Search,
  ShoppingBag,
  ShoppingCart,
  StarIcon,
  User2,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../../../Context/ApiContext";
import { useQuery } from "@tanstack/react-query";
import Aos from "aos";
import Cart from "../Cart/Cart";
import useAuthContextCart from "../../../Context/CartContexte";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Recherche from "../RecherchResult/Recherche";

function Navigation() {
  const { DataCart, finalProduct } = useAuthContextCart([]);
  const { GetCategory, GetCategorySub, IsLogin, ProfileLogin, Logout } =
    useAuthContext([]);
  const [BarRehcersh, setBarRehcersh] = useState(false);
  const [profileDown, setProfile] = useState(false);

  useEffect(() => {
    finalProduct();
  }, []);
  const {
    data: category,
    isLoading,
    isError,
    isFetched,
  } = useQuery({
    queryKey: ["Categories"],
    queryFn: () => {
      return GetCategory();
    },
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    retryOnMount: 3,
  });
  const { data: categorySub } = useQuery({
    queryKey: ["CategoriesSub"],
    queryFn: () => {
      return GetCategorySub();
    },
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    retryOnMount: 3,
  });
  const [loacation, setLoaction] = useState("Los Angeles");
  const [statusCart, setStatusCart] = useState(false);

  const LOCATIONS = [
    { id: 1, name: "Current Location", icon: "fi fi-rr-map-marker-plus" },
    { id: 2, name: "Los Angeles", icon: "fi fi-rr-map-marker-plus" },
    { id: 3, name: "Chicago", icon: "fi fi-rr-map-marker-plus" },
    { id: 4, name: "Houston", icon: "fi fi-rr-map-marker-plus" },
    { id: 5, name: "Phoenix", icon: "fi fi-rr-map-marker-plus" },
    { id: 6, name: "San Diego", icon: "fi fi-rr-map-marker-plus" },
  ];
  useEffect(() => {
    Aos.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  const { data: CheckLogin, refetch } = useQuery({
    queryKey: ["CheckLogin"],
    queryFn: () => {
      return IsLogin();
    },
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    retryOnMount: 3,
  });
  const { data: ProfileData } = useQuery({
    queryKey: ["ProfileLogin"],
    queryFn: async () => {
      return await ProfileLogin();
    },
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    retryOnMount: 3,
  });
  const [dataCarta, setDataCarta] = useState([]);
  const dataCarts = () => {
    const cartData = JSON.parse(localStorage.getItem("CartProduct"));
    setDataCarta(cartData);
  };
  const wishlist = () => toast.error("Sory This page not found right now !");

  return (
    <nav>
      <ToastContainer position="top-center" />

      <header
        className=" bg-[#fff] z-[9997] max-[991px]:z-[16] relative w-full"
        data-aos="fade-up"
      >
        <div className="header-top py-[10px] text-[#777] bg-[#f8f8fb]">
          <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
            <div className="w-full flex flex-wrap px-[12px]">
              <div className="grow-[1] shrink-[0] basis-[0%] min-[992px]:block max-[767px]:hidden">
                <div className="header-top-social">
                  <ul className="mb-[0] p-[0] flex"></ul>
                </div>
              </div>
              <div className="grow-[1] shrink-[0] basis-[0%] text-center max-[1199px]:hidden">
                <div className="header-top-message text-[13px]">
                  World{"'"}s Fastest Online Shopping Destination
                </div>
              </div>
              <div className="grow-[1] shrink-[0] basis-[0%] hidden min-[992px]:block"></div>
              <div className="grow-[1] shrink-[0] basis-[0%] min-[992px]:hidden">
                <div className="gi-header-bottons flex justify-end">
                  <div className="right-icons flex flex-row">
                    <Link className="gi-header-btn gi-header-user mr-[30px] relative transition-all duration-[0.3s] ease-in-out relative flex text-[#4b5966] w-[auto] items-center">
                      <div className="header-icon relative flex"></div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gi-header-bottom py-[30px] max-[991px]:py-[15px] max-[991px]:border-b-[1px] border-solid border-[#eee]">
          <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
            <div className="w-full flex flex-wrap px-[12px]">
              <div className="gi-flex flex flex-row justify-between w-full max-[575px]:flex-col relative">
                <div className="self-center gi-header-logo max-[575px]:mb-[15px]">
                  <div className="header-logo text-left">
                    <Link>
                      <img
                        src="assets/img/logo/logo.png"
                        alt="Site Logo"
                        className="w-[144px] max-[1199px]:w-[130px] max-[991px]:w-[120px] max-[767px]:w-[100px] "
                      />
                    </Link>
                  </div>
                </div>
                <div className=" my-[0] mx-[auto] max-[991px]:m-0">
                  <div className="relative w-full min-w-[700px] px-[30px]  max-[1399px]:min-w-[500px] max-[1199px]:min-w-[400px] max-[991px]:p-0 max-[767px]:min-w-[350px] max-[480px]:min-w-[300px] max-[320px]:min-w-full !z-[99999]">
                    <form
                      onClick={() => {
                        setBarRehcersh(true);
                      }}
                      className="  flex border-[1px] border-solid border-[#eee] items-center rounded-[5px] "
                    >
                      <input
                        className="relative  block w-full min-h-[50px] h-[50px] max-[991px]:h-[40px] max-[991px]:min-h-[40px] px-[15px] text-[13px] font-normal leading-[1] text-[#777] bg-transparent outline-[0] border-[0] tracking-[0.6px] "
                        placeholder="Search Products..."
                        type="number"
                        onClick={() => {
                          setBarRehcersh(true);
                        }}
                      />
                      <button
                        type="button"
                        className=" relative flex items-center justify-center w-[48px] h-[40px] basis-[48px]"
                      >
                        <Search className="fi-rr-search text-[#4b5966] h-[18px] w-[18px] transition-all duration-[0.3s] ease-in-out" />
                      </button>
                    </form>
                  </div>
                </div>
                <div className="gi-header-action self-center max-[991px]:hidden">
                  <div className=" flex justify-end">
                    <div className="gi-acc-drop relative">
                      {CheckLogin ? (
                        <div
                          className="gi-header-btn gi-header-user dropdown-toggle gi-user-toggle mr-[30px] transition-all duration-[0.3s] ease-in-out relative flex text-[#4b5966] w-[auto] items-center whitespace-nowrap"
                          title="Account"
                        >
                          <div className="header-icon relative flex">
                            <User2
                              className=" text-[24px] leading-[17px] text-gray-500"
                              size={30}
                            />
                          </div>
                          <div
                            className="gi-btn-desc flex flex-col uppercase ml-[10px]  "
                            onClick={() => {
                              setProfile(!profileDown);
                            }}
                          >
                            <span className="cursor-pointer transition-all duration-[0.3s] ease-in-out text-[12px] leading-[1] text-[#777] mb-[6px] tracking-[0.6px] capitalize font-medium">
                              Account
                            </span>

                            <span className="gi-btn-stitle transition-all duration-[0.3s] ease-in-out text-[13px] font-medium text-[#4b5966] leading-[14px] max-[1199px]:text-[11px] max-[1199px]:min-w-[48px]">
                              {ProfileData?.first_name}
                            </span>
                            {profileDown && (
                              <div className="bg-gray-300/90 w-[220px] h-[200px] absolute top-10 left-0 rounded-md z-50 flex flex-col items-center ">
                                <Link
                                  to={"/profile"}
                                  className="bg-white w-[80%] text-center p-2 mt-3 rounded-xl"
                                >
                                  Profile
                                </Link>
                                <p className="bg-white w-[80%] text-center p-2 mt-3 rounded-xl">
                                  Profile
                                </p>
                                <p
                                  onClick={() => {
                                    Logout();
                                    location.reload();
                                  }}
                                  className="bg-white w-[80%] text-center p-2 mt-3 rounded-xl cursor-pointer"
                                >
                                  Logout
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      ) : (
                        <Link
                          to={"/SignIn"}
                          className="gi-header-btn gi-header-user dropdown-toggle gi-user-toggle mr-[30px] transition-all duration-[0.3s] ease-in-out relative flex text-[#4b5966] w-[auto] items-center whitespace-nowrap"
                          title="Account"
                        >
                          <div className="header-icon relative flex">
                            <User2
                              className=" text-[24px] leading-[17px] text-gray-500"
                              size={30}
                            />
                          </div>
                          <div className="gi-btn-desc flex flex-col uppercase ml-[10px]">
                            <span className="gi-btn-title transition-all duration-[0.3s] ease-in-out text-[12px] leading-[1] text-[#777] mb-[6px] tracking-[0.6px] capitalize font-medium">
                              Account
                            </span>

                            <span className="gi-btn-stitle transition-all duration-[0.3s] ease-in-out text-[13px] font-medium text-[#4b5966] leading-[14px] max-[1199px]:text-[11px] max-[1199px]:min-w-[48px]">
                              Login
                            </span>
                          </div>
                        </Link>
                      )}

                      <ul className="gi-dropdown-menu min-w-[150px] py-[5px] transition-all duration-[0.3s] ease-in-out mt-[25px] absolute z-[16] text-left bg-[#fff] block opacity-0 invisible left-[0] right-[auto] border-[1px] border-solid border-[#eee] rounded-[5px]">
                        <li>
                          <Link className="dropdown-item py-[10px] px-[20px] block w-full font-normal text-[13px] text-[#777] hover:bg-transparent hover:text-[#5caf90]">
                            Register
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item py-[10px] px-[20px] block w-full font-normal text-[13px] text-[#777] hover:bg-transparent hover:text-[#5caf90]">
                            Checkout
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item py-[10px] px-[20px] block w-full font-normal text-[13px] text-[#777] hover:bg-transparent hover:text-[#5caf90]">
                            Login
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div
                      onClick={() => {
                        wishlist();
                      }}
                      className="gi-header-btn gi-wish-toggle mr-[30px] transition-all duration-[0.3s] ease-in-out relative flex text-[#4b5966] w-[auto] items-center whitespace-nowrap"
                      title="Wishlist"
                    >
                      <div className="header-icon relative flex">
                        <Heart
                          className=" text-[24px] leading-[17px]"
                          size={30}
                        />
                      </div>
                      <div className="gi-btn-desc flex flex-col uppercase ml-[10px]">
                        <span className="gi-btn-title transition-all duration-[0.3s] ease-in-out text-[12px] leading-[1] text-[#777] mb-[6px] tracking-[0.6px] capitalize font-medium">
                          Wishlist
                        </span>
                        <span className="gi-btn-stitle transition-all duration-[0.3s] ease-in-out text-[13px] font-medium text-[#4b5966] leading-[14px] max-[1199px]:text-[11px] max-[1199px]:min-w-[48px]">
                          <b className="gi-wishlist-count">0</b>-items
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        dataCarts();
                        finalProduct();

                        setStatusCart(!statusCart);
                      }}
                      className="gi-header-btn gi-cart-toggle transition-all duration-[0.3s] ease-in-out relative flex text-[#4b5966] w-[auto] items-center whitespace-nowrap"
                      title="Cart"
                    >
                      <div className="header-icon relative flex">
                        <ShoppingCart
                          className="fi-rr-shopping-bag text-[24px] leading-[17px]"
                          size={30}
                        />
                        <span className="main-label-note-new transition-all duration-[0.3s] ease-in-out h-[10px] w-[10px] m-auto bg-[#ec716d] rounded-[50%] cursor-default hidden absolute bottom-[15px] left-[0] right-[0] z-[3]"></span>
                      </div>
                      <div className="gi-btn-desc flex flex-col uppercase ml-[10px]">
                        <span className="gi-btn-title transition-all duration-[0.3s] ease-in-out text-[12px] leading-[1] text-[#777] mb-[6px] tracking-[0.6px] capitalize font-medium">
                          Cart
                        </span>
                        <span className=" transition-all duration-[0.3s] ease-in-out text-[13px] font-medium text-[#4b5966] leading-[14px] max-[1199px]:text-[11px] max-[1199px]:min-w-[48px]">
                          <b className="">{DataCart?.length}</b>
                          -items
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="gi-header-cat transition-all duration-[0.3s] ease-in-out bg-[#fff] border-t-[1px] border-b-[1px] border-solid border-[#eee] hidden min-[992px]:block">
          <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] relative">
            <div className="gi-nav-bar flex flex-row justify-between relative w-full px-[12px]">
              <div className="gi-category-icon-block py-[5px] static">
                <div className="gi-category-menu relative">
                  <div className="gi-category-toggle w-[200px] min-h-[50px] px-[15px] flex items-center bg-[#A87861] rounded-[5px] cursor-pointer max-[1199px]:w-auto max-[991px]:border-[0]">
                    <LayoutGrid
                      className="fi fi-rr-apps text-[18px] text-[#fff] leading-[0]"
                      size={30}
                    />
                    <span className="text ml-[10px] text-[15px] text-[#fff] font-medium max-[1199px]:hidden">
                      All Categories
                    </span>
                    <ChevronDown className=" transition-all duration-[0.3s] ease-in-out mr-[10px] text-[18px] leading-[0] text-white " />
                  </div>
                </div>
                <div className="gi-cat-dropdown transition-all duration-[0.3s] ease-in-out w-[500px] mt-[15px] p-[15px] absolute bg-[#fff]   left-[0] z-[15] rounded-[5px] border-[1px] border-solid border-[#eee] grid grid-cols-2">
                  <div className="gi-cat-block">
                    <div className="gi-cat-tab flex">
                      <ul
                        className="nav-tabs min-w-[230px] bg-[#f8f8fb] p-[15px] rounded-[5px] flex-col justify-center mr-[16px]"
                        id="myTab"
                      >
                        {category?.slice(0, 5).map((category) => (
                          <li
                            key={category.id}
                            className={`active transition-all duration-[0.3s] ease-in-out cursor-pointer px-[15px] py-[10px] bg-[#fff] text-[13px] text-[#4b5966] font-medium text-left capitalize border-[1px] border-solid border-[#eee] rounded-[5px] flex items-center mb-[10px] hover:border-green-300`}
                          >
                            <Link
                              to={`/Shop/${category.id}`}
                              className="w-full"
                            >
                              {category.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <ul
                        className="nav-tabs min-w-[230px] bg-[#f8f8fb] p-[15px] rounded-[5px] flex-col justify-center mr-[16px]"
                        id="myTab"
                      >
                        {category?.slice(5, 10).map((category) => (
                          <li
                            key={category.id}
                            className={`active transition-all duration-[0.3s] ease-in-out cursor-pointer px-[15px] py-[10px] bg-[#fff] text-[13px] text-[#4b5966] font-medium text-left capitalize border-[1px] border-solid border-[#eee] rounded-[5px] flex items-center mb-[10px] hover:border-green-300`}
                          >
                            <Link
                              to={`/Shop/${category.id}`}
                              className="w-full"
                            >
                              {category.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="gi-main-menu-desk"
                className="w-full flex items-center min-[992px]:block hidden"
              >
                <div className="nav-desk">
                  <div className="w-full flex flex-wrap px-[12px] min-[1400px]:relative">
                    <div className="basis-auto w-full self-center">
                      <div className="gi-main-menu flex">
                        <ul className="w-full flex justify-center flex-wrap pl-[0]">
                          <li className="dropdown drop-list relative ml-[20px] mr-[30px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                            <Link
                              to={"/"}
                              className=" relative transition-all duration-[0.3s] ease-in-out text-[15px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium"
                            >
                              Home
                              <ChevronRight
                                className=" transition-all duration-[0.3s] ease-in-out mr-[10px] text-[18px] leading-[0] text-black/70 "
                                size={20}
                              />
                            </Link>
                          </li>
                          <li className="dropdown drop-list relative ml-[20px] mr-[30px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                            <Link
                              to={"/Shop"}
                              className=" relative transition-all duration-[0.3s] ease-in-out text-[15px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium"
                            >
                              Shop
                              <ChevronRight
                                className=" transition-all duration-[0.3s] ease-in-out mr-[10px] text-[18px] leading-[0] text-black/70 "
                                size={20}
                              />
                            </Link>
                          </li>
                          <li className="dropdown drop-list static ml-[20px] mr-[30px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                            <p className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out text-[15px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium">
                              Categories
                              <ChevronDown
                                className="transition-all duration-[0.3s] ease-in-out mr-[10px] text-[18px] leading-[0] text-black/70"
                                size={20}
                              />
                            </p>
                            <ul className="sub-menu transition-all duration-[0.3s] ease-in-out mt-[15px] absolute z-[16] text-left   min-w-[205px] left-0 right-auto bg-[#fff] block rounded-[5px] border-[1px] border-solid border-[#eee] py-[5px] px-5">
                              <div className="flex">
                                {categorySub?.slice(0, 5).map((item, index) => (
                                  <li key={index} className="flex w-full">
                                    <span className="bg"></span>
                                    <ul className="mega-block w-[calc(25%-30px)] mr-[30px] py-[15px] block">
                                      <li className="menu_title">
                                        <Link
                                          to={`/Shop/${item.id}`}
                                          className="text-[#5caf90] text-[15px] capitalize leading-[30px] font-medium block border-b-[1px] border-solid border-[#eee] mb-[10px] pb-[5px] h-auto"
                                        >
                                          {item.title}
                                        </Link>
                                      </li>
                                      <Link className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90] w-[120px]">
                                        {" "}
                                        {JSON.parse(item.SubCategory)[0]?.name}
                                      </Link>
                                      <Link className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90] w-[120px]">
                                        {" "}
                                        {JSON.parse(item.SubCategory)[1]?.name}
                                      </Link>
                                      <Link className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90] w-[120px]">
                                        {" "}
                                        {JSON.parse(item.SubCategory)[2]?.name}
                                      </Link>
                                      <Link className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90] w-[120px]">
                                        {" "}
                                        {JSON.parse(item.SubCategory)[3]?.name}
                                      </Link>
                                      <Link className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90] w-[120px]">
                                        {" "}
                                        {JSON.parse(item.SubCategory)[4]?.name}
                                      </Link>
                                      <Link className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90] w-[120px]">
                                        {" "}
                                        {JSON.parse(item.SubCategory)[5]?.name}
                                      </Link>
                                    </ul>
                                  </li>
                                ))}
                              </div>
                            </ul>
                          </li>

                          <li className="dropdown drop-list relative ml-[20px] mr-[30px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                            <Link
                              to={"/Contact us"}
                              className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out text-[15px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium"
                            >
                              Contact us
                              <ChevronRight
                                className=" transition-all duration-[0.3s] ease-in-out mr-[10px] text-[18px] leading-[0] text-black/70 "
                                size={20}
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gi-location-block py-[5px]">
                <div className="gi-location-menu transition-all duration-[0.3s] ease-in-out relative">
                  <div className="gi-location-toggle w-[200px] min-h-[50px] px-[15px] flex items-center bg-[#A87861] rounded-[5px] cursor-pointer">
                    <MapPin
                      className="transition-all duration-[0.3s] ease-in-out mr-[10px] text-[18px] leading-[0] text-white"
                      size={30}
                    />
                    <span className="gi-location-title gi-location w-[calc(100%-30px)] px-[10px] text-[15px] text-[#fff] font-medium tracking-[0.2px] whitespace-nowrap truncate">
                      {loacation}
                    </span>
                    <ChevronDown
                      className="transition-all duration-[0.3s] ease-in-out mr-[10px] text-[18px] leading-[0] text-white"
                      size={30}
                    />
                  </div>
                  <div className="gi-location-content transition-all duration-[0.3s] ease-in-out w-[200px] py-[15px] px-[13px] mt-[5px] block absolute left-auto right-0 top-[100%] rounded-[5px] z-[14] border-[1px] border-solid border-[#eee] bg-[#fff] overflow-auto">
                    <ul className="loc-grid w-full">
                      {LOCATIONS.map((location) => (
                        <li
                          key={location.id}
                          onClick={() => {
                            setLoaction(location.name);
                          }}
                          className="loc-list current w-full p-[10px] relative flex items-center flex-row justify-left text-[13px] font-medium capitalize border-[1px] border-solid border-[#eee] rounded-[5px] cursor-pointer hover:border-[#5caf90] hover:text-[#5caf90] mb-[10px]"
                        >
                          <span className="gi-detail gi-detail-current w-[calc(100%-30px)] block truncate text-[#4b5966]">
                            {location.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gi-mobile-menu-overlay hidden w-full h-screen fixed top-[0] left-[0] bg-[#000000cc] z-[16]"></div>
        {/*  <div
          id="gi-mobile-menu"
          className="gi-mobile-menu transition-all duration-[0.3s] ease-in-out w-[340px] h-full pt-[15px] pb-[20px] px-[20px] fixed top-[0] right-[auto] left-[0] bg-[#fff] flex flex-col z-[17] overflow-auto max-[480px]:w-[300px]"
        >
          <div className="gi-menu-title w-full pb-[10px] flex flex-wrap justify-between">
            <span className="menu_title flex items-center text-[16px] text-[#4b5966] font-semibold">
              My Menu
            </span>
            <button
              type="button"
              className="gi-close-menu relative text-[30px] leading-[1] text-[#777] bg-transparent border-0 mx-[5px]"
            >
              ×
            </button>
          </div>
          <div className="gi-menu-inner">
            <div className="gi-menu-content">
              <ul>
                <li className="dropdown relative drop-list">
                  <span className="menu-toggle"></span>
                  <Link
                    href="javascript:void(0)"
                    className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] rounded-[5px] text-[15px] font-medium"
                  >
                    Home
                  </Link>
                  <ul className="sub-menu w-full min-w-[auto] p-0 mb-[10px] static hidden visible transition-none opacity-[1]">
                    <li>
                      <Link
                        href="index.html"
                        className="mb-[0] pl-[15px] py-[12px] pr-[0] capitalize block text-[14px] font-normal text-[#777]"
                      >
                        Grocery
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="demo-2.html"
                        className="mb-[0] pl-[15px] py-[12px] pr-[0] capitalize block text-[14px] font-normal text-[#777]"
                      >
                        Fashion
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="demo-3.html"
                        className="mb-[0] pl-[15px] py-[12px] pr-[0] capitalize block text-[14px] font-normal text-[#777]"
                      >
                        Fashion 2
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="relative">
                  <span className="menu-toggle"></span>
                  <Link
                    href="javascript:void(0)"
                    className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] rounded-[5px] text-[15px] font-medium"
                  >
                    Categories
                  </Link>
                  <ul className="sub-menu w-full min-w-[auto] p-0 mb-[10px] static hidden visible transition-none opacity-[1]">
                    <li className="relative">
                      <span className="menu-toggle"></span>
                      <Link
                        href="javascript:void(0)"
                        className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]"
                      >
                        classNameic Variation
                      </Link>
                      <ul className="sub-menu w-full min-w-[auto] p-0 mb-[10px] static hidden visible transition-none opacity-[1]">
                        <li>
                          <Link
                            href="shop-left-sidebar-col-3.html"
                            className="pl-[30px] py-[12px] block text-[14px] text-[#999] font-normal"
                          >
                            Left sidebar 3 column
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="shop-left-sidebar-col-4.html"
                            className="pl-[30px] py-[12px] block text-[14px] text-[#999] font-normal"
                          >
                            Left sidebar 4 column
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="shop-right-sidebar-col-3.html"
                            className="pl-[30px] py-[12px] block text-[14px] text-[#999] font-normal"
                          >
                            Right sidebar 3 column
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="shop-right-sidebar-col-4.html"
                            className="pl-[30px] py-[12px] block text-[14px] text-[#999] font-normal"
                          >
                            Right sidebar 4 column
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="shop-full-width.html"
                            className="pl-[30px] py-[12px] block text-[14px] text-[#999] font-normal"
                          >
                            Full width 4 column
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="relative">
                      <span className="menu-toggle"></span>
                      <Link
                        href="javascript:void(0)"
                        className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]"
                      >
                        classNameic Variation
                      </Link>
                      <ul className="sub-menu w-full min-w-[auto] p-0 mb-[10px] static hidden visible transition-none opacity-[1]">
                        <li>
                          <Link
                            href="shop-banner-left-sidebar-col-3.html"
                            className="pl-[30px] py-[12px] block text-[14px] text-[#999] font-normal"
                          >
                            Banner left sidebar 3 column
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="shop-banner-left-sidebar-col-4.html"
                            className="pl-[30px] py-[12px] block text-[14px] text-[#999] font-normal"
                          >
                            Banner left sidebar 4 column
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="shop-banner-right-sidebar-col-3.html"
                            className="pl-[30px] py-[12px] block text-[14px] text-[#999] font-normal"
                          >
                            Banner right sidebar 3 column
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="shop-banner-right-sidebar-col-4.html"
                            className="pl-[30px] py-[12px] block text-[14px] text-[#999] font-normal"
                          >
                            Banner right sidebar 4 column
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="shop-banner-full-width.html"
                            className="pl-[30px] py-[12px] text-[14px] block text-[#999] font-normal"
                          >
                            Banner Full width 4 column
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="relative">
                      <span className="menu-toggle"></span>
                      <Link
                        href="javascript:void(0)"
                        className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]"
                      >
                        Columns Variation
                      </Link>
                      <ul className="sub-menu w-full min-w-[auto] p-0 mb-[10px] static hidden visible transition-none opacity-[1]">
                        <li>
                          <Link
                            href="shop-full-width-col-3.html"
                            className="pl-[30px] py-[12px] block text-[14px] text-[#999] font-normal"
                          >
                            3 Columns full width
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="shop-full-width-col-4.html"
                            className="pl-[30px] py-[12px] block text-[14px] text-[#999] font-normal"
                          >
                            4 Columns full width
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="shop-full-width-col-5.html"
                            className="pl-[30px] py-[12px] block text-[14px] text-[#999] font-normal"
                          >
                            5 Columns full width
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="shop-full-width-col-6.html"
                            className="pl-[30px] py-[12px] block text-[14px] text-[#999] font-normal"
                          >
                            6 Columns full width
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="shop-banner-full-width-col-3.html"
                            className="pl-[30px] py-[12px] block text-[14px] text-[#999] font-normal"
                          >
                            Banner 3 Columns
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="relative">
                      <span className="menu-toggle"></span>
                      <Link
                        href="javascript:void(0)"
                        className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]"
                      >
                        List Variation
                      </Link>
                      <ul className="sub-menu w-full min-w-[auto] p-0 mb-[10px] static hidden visible transition-none opacity-[1]">
                        <li>
                          <Link
                            href="shop-list-left-sidebar.html"
                            className="pl-[30px] py-[12px] block text-[14px] text-[#999] font-normal"
                          >
                            Shop left sidebar
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="shop-list-right-sidebar.html"
                            className="pl-[30px] py-[12px] block text-[14px] text-[#999] font-normal"
                          >
                            Shop right sidebar
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="shop-list-banner-left-sidebar.html"
                            className="pl-[30px] py-[12px] block text-[14px] text-[#999] font-normal"
                          >
                            Banner left sidebar
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="shop-list-banner-right-sidebar.html"
                            className="pl-[30px] py-[12px] block text-[14px] text-[#999] font-normal"
                          >
                            Banner right sidebar
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="shop-list-full-col-2.html"
                            className="pl-[30px] py-[12px] block text-[14px] text-[#999] font-normal"
                          >
                            Full width 2 columns
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="relative">
                  <span className="menu-toggle"></span>
                  <Link
                    href="javascript:void(0)"
                    className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] rounded-[5px] text-[15px] font-medium"
                  >
                    Products
                  </Link>
                  <ul className="sub-menu w-full min-w-[auto] p-0 mb-[10px] static hidden visible transition-none opacity-[1]">
                    <li className="relative">
                      <span className="menu-toggle"></span>
                      <Link
                        href="javascript:void(0)"
                        className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]"
                      >
                        Product page
                      </Link>
                      <ul className="sub-menu w-full min-w-[auto] p-0 mb-[10px] static hidden visible transition-none opacity-[1]">
                        <li>
                          <Link
                            href="product-left-sidebar.html"
                            className="pl-[30px] py-[12px] block text-[14px] text-[#999] font-normal"
                          >
                            Product left sidebar
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="product-right-sidebar.html"
                            className="pl-[30px] py-[12px] block text-[14px] text-[#999] font-normal"
                          >
                            Product right sidebar
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="relative">
                      <span className="menu-toggle"></span>
                      <Link
                        href="javascript:void(0)"
                        className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]"
                      >
                        Product accordion
                      </Link>
                      <ul className="sub-menu w-full min-w-[auto] p-0 mb-[10px] static hidden visible transition-none opacity-[1]">
                        <li>
                          <Link
                            href="product-accordion-left-sidebar.html"
                            className="pl-[30px] py-[12px] block text-[14px] text-[#999] font-normal"
                          >
                            left sidebar
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="product-accordion-right-sidebar.html"
                            className="pl-[30px] py-[12px] block text-[14px] text-[#999] font-normal"
                          >
                            right sidebar
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        href="product-full-width.html"
                        className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]"
                      >
                        product full width
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="product-accordion-full-width.html"
                        className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]"
                      >
                        accordion full width
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown relative">
                  <span className="menu-toggle"></span>
                  <Link
                    href="javascript:void(0)"
                    className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] rounded-[5px] text-[15px] font-medium"
                  >
                    Blog
                  </Link>
                  <ul className="sub-menu w-full min-w-[auto] p-0 mb-[10px] static hidden visible transition-none opacity-[1]">
                    <li>
                      <Link
                        href="blog-left-sidebar.html"
                        className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]"
                      >
                        Blog left sidebar
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="blog-right-sidebar.html"
                        className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]"
                      >
                        Blog right sidebar
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="blog-detail-left-sidebar.html"
                        className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]"
                      >
                        Blog detail left sidebar
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="blog-detail-right-sidebar.html"
                        className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]"
                      >
                        Blog detail right sidebar
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="blog-full-width.html"
                        className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]"
                      >
                        Blog full width
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="blog-detail-full-width.html"
                        className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]"
                      >
                        Blog detail full width
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="relative">
                  <span className="menu-toggle"></span>
                  <Link
                    href="javascript:void(0)"
                    className="dropdown-arrow p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] rounded-[5px] text-[15px] font-medium"
                  >
                    Others
                  </Link>
                  <ul className="sub-menu w-full min-w-[auto] p-0 mb-[10px] static hidden visible transition-none opacity-[1]">
                    <li>
                      <Link
                        href="about-us.html"
                        className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="contact-us.html"
                        className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="cart.html"
                        className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]"
                      >
                        Cart
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="checkout.html"
                        className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]"
                      >
                        Checkout
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="compare.html"
                        className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]"
                      >
                        Compare
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="faq.html"
                        className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]"
                      >
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="login.html"
                        className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="register.html"
                        className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]"
                      >
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="track-order.html"
                        className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]"
                      >
                        Track Order
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="terms-condition.html"
                        className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]"
                      >
                        Terms Condition
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="privacy-policy.html"
                        className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="header-res-lan-curr">
              <div className="header-res-social mt-[30px]">
                <div className="header-top-social">
                  <ul className="flex flex-row justify-center">
                    <li className="list-inline-item h-[30px] w-[30px] flex items-center justify-center bg-[#4b5966] rounded-[5px] mr-[15px]">
                      <Link href="#">
                        <i className="gicon gi-facebook text-[#fff]"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item h-[30px] w-[30px] flex items-center justify-center bg-[#4b5966] rounded-[5px] mr-[15px]">
                      <Link href="#">
                        <i className="gicon gi-twitter text-[#fff]"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item h-[30px] w-[30px] flex items-center justify-center bg-[#4b5966] rounded-[5px] mr-[15px]">
                      <Link href="#">
                        <i className="gicon gi-instagram text-[#fff]"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item h-[30px] w-[30px] flex items-center justify-center bg-[#4b5966] rounded-[5px]">
                      <Link href="#">
                        <i className="gicon gi-linkedin text-[#fff]"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </header>
      <Cart
        status={statusCart}
        onClick={(data) => {
          setStatusCart(data);
        }}
        data={dataCarta}
      />
      <Recherche
        status={BarRehcersh}
        OnRemoveBar={(status) => {
          setBarRehcersh(status);
        }}
      />
    </nav>
  );
}

export default Navigation;
