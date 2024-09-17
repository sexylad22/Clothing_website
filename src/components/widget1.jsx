import React from "react";

const widget1 = () => {
  return (
    <>
      {/* widget */}
      <div className="block p-32">
        <div className="flex justify-center items-center mt-4  mb-[80px] background  ">
          <div className="relative">
            <img
              className="w-[64.125rem] h-[42.75rem]"
              src="./images/widget.png"
              alt=""
            />
            <div className="absolute bottom-0 w-full text-center text-white font-[helvetica] pb-8">
              <h3 className="text-[3.125rem]">NEW ARRIVALS</h3>
              <div className="mb-4">
                <h3>Summer Edition.</h3>
              </div>
              <div>
                <button className="bg-white text-[0.75rem] text-[#B5273D] w-[6.875rem] p-2  hover:scale-105 hover:bg-[#B5273D] hover:text-white transition duration-300">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default widget1;
