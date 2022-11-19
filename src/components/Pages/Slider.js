import React from "react";

const Slider = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center my-8" id="about">
        <div className="w-full lg:h-[650px]">
          <img className="w-full h-full" src="images/slider.png" alt="" />
        </div>
        <div className="w-full lg:h-[650px] bg-[#2f2339] text-white px-16 text-left py-16">
          <div className="lg:w-[500px] lg:px-10 my-20">
            <h2 className="text-3xl font-bold">
              WE ARE <br /> CREATIVE AGENCY
            </h2>
            <p className="text-sm my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aut
              amet excepturi quos quae laudantium expedita explicabo suscipit
              facilis in.
            </p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsa
              minus repudiandae, alias quos architecto accusamus eum ipsam, odio
              quibusdam debitis atque neque necessitatibus quo! Sapiente earum
              ab accusamus totam.
            </p>
            <div className="w-32 my-8 bg-orange-600 hover:bg-orange-400 text-center py-2">
              <button>CLICK HERE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
