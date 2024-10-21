import Banner from "./Home/Banner_section_one/Banner";
import Banner2 from "./Home/Banner_section_two/Banner";
import Category from "./Home/Category/Category";
import Fotter from "./Home/Fotter/Fotter";
import Header from "./Home/Header/Header";
import Navigation from "./Navigation/Navigation";
import Product from "./Home/Product_section_one/Product";
import Product2 from "./Home/Product_section_two/Product";
import Service from "./Service/Service";
import Special from "./Home/speciale_product/Speciel";
import Loading from "./Loading/Loading";

function Page() {
  return (
    <>
      <Loading />
      <Navigation />
      <Header />
      <Category />
      <Product />
      <Banner />
      <Product2 />
      <Service />
      <Banner2 />
      <Special />
      <Fotter />
    </>
  );
}

export default Page;
