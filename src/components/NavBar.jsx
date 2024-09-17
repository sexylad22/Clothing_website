import React, { useState, useEffect, useRef } from "react";

const NavBar = () => {
  const [imgSrc, setImgSrc] = useState("/images/logo.png");

  const div1Ref = useRef(null);
  const textRef = useRef(null);
  const iconsRef = useRef(null);

  useEffect(() => {
    const div1 = div1Ref.current;
    const text = textRef.current;
    const icons = iconsRef.current;

    const handleMouseOver = () => {
      if (text) {
        text.classList.remove("text-white");
        text.classList.add("text-[#B5273D]");
      }
      if (icons) {
        icons.classList.remove("text-white");
        icons.classList.add("text-[#B5273D]");
      }
    };

    const handleMouseOut = () => {
      if (text) {
        text.classList.remove("text-[#B5273D]");
        text.classList.add("text-white");
      }
      if (icons) {
        icons.classList.remove("text-[#B5273D]");
        icons.classList.add("text-white");
      }
    };

    if (div1) {
      div1.addEventListener("mouseover", handleMouseOver);
      div1.addEventListener("mouseout", handleMouseOut);
    }

    return () => {
      if (div1) {
        div1.removeEventListener("mouseover", handleMouseOver);
        div1.removeEventListener("mouseout", handleMouseOut);
      }
    };
  }, []);

  return (
    <div
      className="div1 flex justify-center w-screen h-[7.125rem] top-0 absolute hover:bg-white transition-colors duration-500"
      ref={div1Ref}
    >
      <div className="w-full flex justify-between h-full px-[1.875rem] font-[Rubik]">
        {/* Nav */}
        <div className="w-1/3 flex justify-center items-center">
          <div className="w-full">
            <ul
              className="flex flex-wrap gap-x-[2rem] text-white"
              ref={textRef}
            >
              <li className="after:h-[0.125rem] after:w-full after:block after:bg-[#B5273D] after:opacity-0 hover:after:opacity-100">
                <a href="/review">Home</a>
              </li>
              <li className="after:h-[0.125rem] after:w-full after:block after:bg-[#B5273D] after:opacity-0 hover:after:opacity-100">
                <a href="/clothing">About</a>
              </li>
              <li className="after:h-[0.125rem] after:w-full after:block after:bg-[#B5273D] after:opacity-0 hover:after:opacity-100">
                <a href="#services">Services</a>
              </li>
              <li className="after:h-[0.125rem] after:w-full after:block after:bg-[#B5273D] after:opacity-0 hover:after:opacity-100">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Image */}
        <div className="w-1/3 flex justify-center items-center">
          <div className="w-[13.75rem] flex justify-center items-center">
            <a href="/">
              <img className="myimg w-full h-auto" src={imgSrc} alt="Logo" />
            </a>
          </div>
        </div>
        {/* Icons */}
        <div className="w-1/3 flex justify-center items-center">
          <div
            className="w-full flex justify-end gap-[1.5rem] text-white pr-[1.25rem]"
            ref={iconsRef}
          >
            <a href="" className="hover:text-[#B5273D]">
              <i className="fa-solid fa-magnifying-glass hover:scale-150 transition-transform duration-300"></i>
            </a>
            <a href="" className="hover:text-[#B5273D]">
              <i className="fa-solid fa-user hover:scale-150 transition-transform duration-300"></i>
            </a>
            <button className="hover:text-[#B5273D]">
              <i className="fa-solid fa-cart-shopping hover:scale-150 transition-transform duration-300"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
