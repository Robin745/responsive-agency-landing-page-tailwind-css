import React from "react";

const Banner = () => {
  return (
    <>
      <div className="relative text-left z-0"  id="home">
        <img
          className="w-full lg:h-[800px]  backdrop-contrast-50"
          src="images/banner.png"
          alt=""
        />
        <div className="w-48 md:w-[400px] lg:w-[500px] absolute top-1/2 left-1/2 transform  -translate-x-2/2   -translate-y-1/2">
          <div className="text-2xl md:text-4xl lg:text-7xl leading-6  font-bold text-white mb-1 md:mb-4">
            <h1>WE ARE</h1>
            <h1>CREATIVE</h1>
            <h1>AGENCY</h1>
          </div>
          <p className="text-sm lg:text-base text-white mb-1 md:mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia,
            officia at. Est quae laudantium.
            <span className="hidden lg:block">
              Aliquam animi asperiores iusto sequi cum, esse magnam! Ad natus
              commodi harum libero magnam cumque?{" "}
            </span>
          </p>
          <button className="w-32 lg:w-[216px] text-sm md:text-base bg-orange-600 hover:bg-orange-400 text-white py-1 md:py-2 md:my-2 lg:my-4">
            CLICK HERE
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
