import React from "react";
import ExtraSection1 from "../components/ExtraSections/ExtraSection1";
import ExtraSection2 from "../components/ExtraSections/ExtraSection2";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Header/Banner";
import Header from "../components/Header/Header";
import ProductsSection from "../components/ProductsSection/ProductsSection";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <ExtraSection2></ExtraSection2>
      <ProductsSection></ProductsSection>
      <ExtraSection1></ExtraSection1>
      <Footer></Footer>
    </div>
  );
};

export default Home;
