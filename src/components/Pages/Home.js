import React from "react";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import Banner from "./Banner";
import ContactForm from "./ContactForm";
import MiddleSection from "./MiddleSection";
import Slider from "./Slider";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <MiddleSection></MiddleSection>
      <Slider></Slider>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </>
  );
};

export default Home;
