import React from "react";
import { FaFacebookF, FaTwitter, FaSkype, FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="w-full bg-white md:sticky top-0 z-10">
        <nav className="flex flex-col md:flex-row items-center justify-between gap-y-4 lg:gap-0 py-2 mx-6 md:mx-12 lg:mx-20">
          <div className="w-32 lg:w-44 flex items-center justify-center gap-x-1">
            <img className="w-10 lg:w-[55px]" src="images/logo.png" alt="" />
            <div>
              <img src="images/webpro.png" alt="" />
              <img className="ml-1 mt-1" src="images/tagline.png" alt="" />
            </div>
          </div>
          <div className="flex md:hidden lg:flex items-center gap-x-4">
            <a href="https://www.facebook.com/">
              <FaFacebookF className="hover:text-zinc-500"></FaFacebookF>
            </a>
            <a href="#twitter">
              <FaTwitter className="hover:text-zinc-500"></FaTwitter>
            </a>
            <a href="#skype">
              <FaSkype className="hover:text-zinc-500"></FaSkype>
            </a>
            <a href="#linkedin">
              <FaLinkedinIn className="hover:text-zinc-500"></FaLinkedinIn>
            </a>
          </div>
          <div>
            <ul className="flex flex-col md:flex-row items-center gap-x-4 font-semibold">
              <li className="hover:text-zinc-500">
                <a href="#home">HOME</a>
              </li >
              <li className="hover:text-zinc-500">
                <a href="#about">ABOUT US</a>
              </li>
              <li className="hover:text-zinc-500">
                <a href="#blog">BLOG</a>
              </li>
              <li className="hover:text-zinc-500">
                <a href="#services">SERVICES</a>
              </li>
              <li className="hover:text-zinc-500">
                <a href="#pages">PAGES</a>
              </li>
              <li className="hover:text-zinc-500">
                <a href="#contact">CONTACT US</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
