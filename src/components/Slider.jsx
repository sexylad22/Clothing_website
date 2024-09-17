import React, { useEffect, useState } from "react";
import NavBar from "./NavBar.jsx";
import Discount from "./Discount.jsx";

const Slider = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const slides = [
    { src: "./images/street.png", alt: "Ninit Car" },
    { src: "./images/standing.png", alt: "Image 1" },
  ];

  const handleButtonClick = (index) => {
    setCurrentSlideIndex(index);
  };

  useEffect(() => {
    const autoSlide = () => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const intervalId = setInterval(autoSlide, 6000);

    // Cleanup interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [slides.length]);

  return (
    <>
      <div className="slider-wrapper relative m-0">
        {/* Slider */}
        <div className="slider flex overflow-x-hidden snap-x snap-mandatory scroll-smooth w-screen">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="slide w-full flex-shrink-0"
              style={{
                transform: `translateX(-${currentSlideIndex * 100}%)`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          <NavBar />
          <Discount />
        </div>

        {/* Slider nav (dots for changing the image) */}
        <div className="absolute bottom-0 flex justify-center items-center w-screen pb-6">
          <div className="slider-nav flex justify-center gap-x-8 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full ${
                  currentSlideIndex === index ? "bg-blue-500" : "bg-gray-500"
                }`}
                onClick={() => handleButtonClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
