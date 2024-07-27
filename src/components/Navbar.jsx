// src/components/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import './Header.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <header className="flex justify-between p-5 px-3 min-[425px]:px-8 items-center">
      <div>
        <Link to={"/"} className="">
          <p className="font-extrabold text-xl">DUNNI'S FOUNDATION</p>
        </Link>
      </div>
      <div className="hidden header-right text-lg md:flex gap-10">
        <Link className="" to="#">
          About Us
        </Link>
        <Link className="" to="gallery">
          Gallery
        </Link>
        <Link className="" to="#">
          Contact Us
        </Link>
      </div>
      <div className="bg-black hidden md:block text-white px-4 py-2 rounded">
        <p>DONATE</p>
      </div>
      <div className="md:hidden cursor-pointer" onClick={toggleSidebar}>
        <div className="w-6 h-1 my-1 rounded bg-black"></div>
        <div className="w-6 h-1 my-1 rounded bg-black"></div>
        <div className="w-6 h-1 my-1 rounded bg-black"></div>
      </div>
      <div
        className={` ${
          isOpen ? "block" : "hidden"
        } absolute top-0 h-full w-80 z-[900] left-auto right-0 overflow-hidden`}
      >
        <div className="h-full z-10 top-0 left-auto bg-white w-full bottom-0 right-0 flex-col min-w-[200px] absolute block translate-x-0 translate-y-0 transition-transform duration-[400ms] ease-in-out delay-0">
          <div className="flex justify-end items-center h-[60px] pt-[15px] pr-[15px] z-[900]">
            <div
              onClick={toggleSidebar}
              className="relative w-[30px] h-[30px] cursor-pointer before:content-[''] before:absolute before:top-2/4 before:left-2/4 before:w-[20px] before:h-[2px] before:bg-[#333] before:origin-center after:content-[''] after:absolute after:top-2/4 after:left-2/4 after:w-[20px] after:h-[2px] after:bg-[#333] after:origin-center before:-translate-x-1/2 after:-translate-x-1/2 before:-translate-y-1/2 after:-translate-y-1/2 before:rotate-45 after:-rotate-45"
            ></div>
          </div>
          <div className="flex-col items-start p-[20px] flex z-[900px]">
            <a
              className="my-[10px] cursor-pointer leading-6 relative max-w-full inline-block z-[900px]"
              onClick={toggleSidebar}
              href={"/"}
            >
              <p>Home</p>
            </a>
            <a
              className="my-[10px] cursor-pointer leading-6 relative max-w-full inline-block z-[900px]"
              href={"/#about"}
            >
              <p>About Us</p>
            </a>
            <a
              className="my-[10px] cursor-pointer leading-6 relative max-w-full inline-block z-[900px]"
              href={"/gallery"}
            >
              <p>Gallery</p>
            </a>
            
            <div className="contactButtonContSide">
              <a
                className="my-[10px] cursor-pointer leading-6 relative max-w-full inline-block z-[900px]"
                href={"#contact"}
              >
                <div className="bg-black text-white px-4 py-2 rounded">
                  <p>Donate</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
