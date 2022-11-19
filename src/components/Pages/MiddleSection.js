import React from "react";

const MiddleSection = () => {
  return (
    <>
      <div className="bg-orange-600 h-44 md:h-72 lg:h-96 my-10 md:my-32 relative">
        <div className="absolute top-1/2 left-1/2 transform  -translate-x-1/2   -translate-y-1/2">
          <img className="w-32 md:w-64 lg:w-72" src="images/watch.png" alt="" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center mb-20"  id="services">
        <div className="px-6 md:px-0 mt-4 md:pl-20 text-left">
          <h1 className="text-4xl">WHAT MAKES US AWSOME?</h1>
          <button className="w-24 md:w-36 bg-stone-800 hover:bg-stone-600 text-xs md:text-base text-white py-1 md:py-2 my-2">
            CLICK HERE
          </button>
        </div>
        <div className="flex flex-col items-center text-left w-full md:w-64 lg:w-72 mt-4">
          <div className="bg-orange-600 w-full py-4 md:py-4 lg:py-12 px-10 md:px-4">
            <div className="w-28 ml-2">
              <div className="bg-white w-16 h-16 rounded-full my-4">
                <img
                  className="ml-4 w-8 pt-4"
                  src="images/icons/icon3.png"
                  alt=""
                />
              </div>
              <h2 className="text-2xl text-white w-20 text-left">
                We Are Creative
              </h2>
            </div>
          </div>
          <p className="py-2 px-10 md:px-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
            voluptates consequex.
            <span className="md:hidden lg:block">
              {" "}
              perferendis illum! Vel facere ut aut nesciunt tempora?
            </span>
          </p>
        </div>
        <div className="flex flex-col items-center text-left w-full md:w-64 lg:w-72 mt-4">
          <div className="bg-orange-600 w-full py-4 md:py-4 lg:py-12 px-10 md:px-4">
            <div className="w-28 ml-2">
              <div className="bg-white w-16 h-16 rounded-full my-4">
                <img
                  className="ml-4 w-8 pt-4"
                  src="images/icons/icon2.png"
                  alt=""
                />
              </div>
              <h2 className="text-2xl text-white w-20 text-left">
                We Are Better
              </h2>
            </div>
          </div>
          <p className="py-2 px-10 md:px-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
            voluptates consequex.
            <span className="md:hidden lg:block">
              {" "}
              perferendis illum! Vel facere ut aut nesciunt tempora?
            </span>
          </p>
        </div>
        <div className="flex flex-col items-center text-left w-full md:w-64 lg:w-72 mt-4">
          <div className="bg-orange-600 w-full py-4 md:py-4 lg:py-12 px-10 md:px-4">
            <div className="w-28 ml-2">
              <div className="bg-white w-16 h-16 rounded-full my-4">
                <img
                  className="ml-4 w-8 pt-4"
                  src="images/icons/icon.png"
                  alt=""
                />
              </div>
              <h2 className="text-2xl text-white w-20 text-left">
                We Are Best
              </h2>
            </div>
          </div>
          <p className="py-2 px-10 md:px-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
            voluptates consequex.
            <span className="md:hidden lg:block">
              {" "}
              perferendis illum! Vel facere ut aut nesciunt tempora?
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default MiddleSection;
