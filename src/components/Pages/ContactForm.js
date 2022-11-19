import React from "react";

const ContactForm = () => {
  return (
    <>
      <div
        className="flex flex-col md:flex-row items-center justify-around w-10/12 mx-auto my-8"
        id="contact"
      >
        <div>
          <h2 className="text-lg text-left font-semibold my-4">
            LOREM IPSUM DOLOR SIT AMET
          </h2>
          <div className="flex mb-6">
            <div className="w-10 h-10 bg-orange-600 rounded-full">
              <img
                className="w-6 mt-3 ml-2"
                src="images/icons/icon5.png"
                alt=""
              />
            </div>
            <div className="text-left leading-none ml-6">
              <h4 className="font-semibold">Email</h4>
              <p>
                <small>agency@gmail.com</small>
              </p>
            </div>
          </div>
          <div className="flex mb-6">
            <div className="w-10 h-10 bg-orange-600 rounded-full">
              <img
                className="w-4 mt-2 ml-3"
                src="images/icons/icon6.png"
                alt=""
              />
            </div>
            <div className="text-left leading-none ml-6">
              <h4 className="font-semibold">CALL US:</h4>
              <p>
                <small>+123 456 789</small>
              </p>
              <p>
                <small>+123 456 789</small>
              </p>
            </div>
          </div>
          <div className="flex mb-6">
            <div className="w-10 h-10 bg-orange-600 rounded-full">
              <img
                className="w-6 mt-2 ml-2"
                src="images/icons/icon4.png"
                alt=""
              />
            </div>
            <div className="text-left leading-none ml-6">
              <h4 className="font-semibold">ADDRESS</h4>
              <p>
                <small>
                  123, main Road, New City, <br /> My Country 123456
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="lg:mr-32">
          <div>
            <h2 className="text-lg text-left font-semibold my-4">Say Hello!</h2>
          </div>
          <div className="flex items-center gap-x-6 mb-2">
            <p>Name</p>
            <input className="w-48 border-b-4" type="text" name="name" id="" />
          </div>
          <div className="flex items-center gap-x-7 mb-2">
            <p>Email</p>
            <input className="w-48 border-b-4" type="text" name="name" id="" />
          </div>
          <div className="flex items-center gap-x-6 mb-2">
            <p>Phone</p>
            <input className="w-48 border-b-4" type="text" name="name" id="" />
          </div>
          <div className="flex items-center gap-x-2">
            <p>Message</p>
            <textarea className="w-48 h-16 border-b-4"></textarea>
          </div>
          <button className="w-32 my-8 text-white text-sm bg-orange-600 hover:bg-orange-400 text-center py-2">
            SEND MESSAGE
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
