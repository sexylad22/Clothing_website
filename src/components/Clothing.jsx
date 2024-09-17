import React, { useEffect, useRef } from "react";

const Clothing = () => {
  // Create refs for the DOM elements
  const mainImgRef = useRef(null);
  const sqrImgRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const sizeBtn1Ref = useRef(null);
  const sizeBtn2Ref = useRef(null);

  useEffect(() => {
    try {
      // Event listeners for square images
      sqrImgRefs.forEach((imgRef, index) => {
        imgRef.current.addEventListener("click", () => {
          mainImgRef.current.src = imgRef.current.src;
        });
      });
    } catch (error) {
      console.error("Error adding event listeners for images:", error);
    }

    try {
      // Event listeners for size buttons
      sizeBtn1Ref.current.addEventListener("click", () => {
        sizeBtn1Ref.current.classList.add("bg-[#222222]", "text-[#FCFCFC]");
        sizeBtn1Ref.current.classList.remove(
          "bg-transparent",
          "text-[#222222]"
        );
        sizeBtn2Ref.current.classList.remove("bg-[#222222]", "text-[#FCFCFC]");
        sizeBtn2Ref.current.classList.add("bg-transparent", "text-[#222222]");
      });

      sizeBtn2Ref.current.addEventListener("click", () => {
        sizeBtn2Ref.current.classList.add("bg-[#222222]", "text-[#FCFCFC]");
        sizeBtn2Ref.current.classList.remove(
          "bg-transparent",
          "text-[#222222]"
        );
        sizeBtn1Ref.current.classList.remove("bg-[#222222]", "text-[#FCFCFC]");
        sizeBtn1Ref.current.classList.add("bg-transparent", "text-[#222222]");
      });
    } catch (error) {
      console.error("Error adding event listeners for size buttons:", error);
    }
  }, []);

  return (
    <>
      <div className="">
        <div className="flex justify-center items-center min-h-screen mt-32 font-[helvetica]">
          <div className="maindiv mb-7 w-[105.68rem] h-[88.75rem] pt-8 flex md:flex-row md:gap-16 md:p-10 flex-col justify-between gap-16 p-6 ">
            <div className="w-full md:w-[50%] h-auto flex flex-col relative">
              <div
                id="ex1"
                className="relative overflow-hidden zoom max-h-[65%] "
              >
                <img
                  ref={mainImgRef}
                  className="img6 w-full h-full object-fill"
                  src="./images/blue.png"
                  alt=""
                />
              </div>
              <div className="w-full max-h-[35%] flex flex-col  pt-2">
                <div className="h-[50%] flex flex-row gap-[1.25rem] px-0 mb-[0.75rem]">
                  <div className="relative overflow-hidden zoom">
                    <img
                      ref={sqrImgRefs[0]}
                      className="w-[12.5rem] img4 h-full"
                      src="./images/blue.png"
                      alt=""
                    />
                  </div>
                  <div id="ex2" className="relative overflow-hidden zoom">
                    <img
                      ref={sqrImgRefs[1]}
                      className="w-[12.5rem] img5 h-full"
                      src="./images/ppantsback.webp"
                      alt=""
                    />
                  </div>
                  <div id="ex2" className="relative overflow-hidden zoom">
                    <img
                      ref={sqrImgRefs[2]}
                      className="w-[12.5rem] img5 h-full"
                      src="./images/ppantsback.webp"
                      alt=""
                    />
                  </div>
                  <div id="ex2" className="relative overflow-hidden zoom">
                    <img
                      ref={sqrImgRefs[3]}
                      className="w-[12.5rem] img5 h-full"
                      src="./images/ppantsback.webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className="h-[50%] flex flex-row w-[48.5%] gap-[1.25rem]">
                  <div className="relative overflow-hidden zoom">
                    <img
                      ref={sqrImgRefs[0]}
                      className="w-[12.5rem] img4 h-full"
                      src="./images/blue.png"
                      alt=""
                    />
                  </div>
                  <div id="ex2" className="relative overflow-hidden zoom">
                    <img
                      ref={sqrImgRefs[1]}
                      className="w-[12.5rem] img5 h-full"
                      src="./images/ppantsback.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-[50%] bg-[#FAF9F8] px-[1.5rem] font-[helvetica] text-black flex flex-col h-full">
              <div className="flex-grow">
                <div className="text-[1.75rem] mb-[1.875rem] pt-6 flex flex-wrap">
                  <h2 className="nameh2">Black Parachute Pants</h2>
                </div>
                <div className="special text-[1.6875rem] mb-[1.875rem]">
                  <h2 className="priceh2">730.00 EGP</h2>
                </div>
                <div className="text-[1.09375rem] mb-[1.25rem]">
                  <h2>Size</h2>
                </div>
                <div className="text flex gap-[2rem] items-center mb-[3.125rem] flex-wrap">
                  <button
                    ref={sizeBtn1Ref}
                    className="sizebtn1 text-[#222222] bg-transparent buttons h-[2.5rem] w-[6.16125rem]"
                  >
                    S-M
                  </button>
                  <button
                    ref={sizeBtn2Ref}
                    className="sizebtn2 bg-transparent text-[#222222] buttons h-[2.5rem] w-[6.16125rem]"
                  >
                    L-XL
                  </button>
                </div>
                <div className="text-red-600 insertdiv text-[0.875rem]">
                  {/* <!-- <h3>Please Select A Size First!</h3> --> */}
                </div>
                <div className="mb-[0.625rem] text-[#FCFCFC]">
                  <button className="mybtn2 w-full h-[2.9375rem] bg-[#222222] hover:bg-[#818181] hover:text-white">
                    <span className="fa-solid fa-cart-shopping"></span>
                    ADD TO CART
                  </button>
                </div>
                <div className="mb-[0.625rem]">
                  <button className="w-full mybtn text-[#222222] h-[2.9375rem] bg-transparent hover:bg-[#707070] hover:text-[white]">
                    BUY NOW
                  </button>
                </div>
                <div className="text-[0.75rem] mb-[6.25rem]">
                  <a className="underline" href="chart.jpeg" target="_blank">
                    Size Guide
                  </a>
                </div>
                <div>
                  <h3 className="text-[1.25rem] mb-4">Product details:</h3>
                  <div className="listdiv">
                    <ul className="text-[1.0625rem]">
                      <li className="mb-4">Baggy fit</li>
                      <li className="mb-4">Available in 4 Sizes</li>
                      <li className="mb-4">
                        Ninit logo embroidered at the back(in grey)
                      </li>
                      <li>Male model is 177 cm wearing L-XL</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-5">
                <div className="mb-4">
                  <h3>Share</h3>
                </div>
                <div className="text-[1.25rem] flex gap-[1.25rem]">
                  <a className="fa-brands fa-facebook-f"></a>
                  <a className="fa-brands fa-twitter"></a>
                  <a
                    href="https://www.instagram.com/ninit.eg/"
                    target="_blank"
                    className="fa-brands fa-instagram"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clothing;
