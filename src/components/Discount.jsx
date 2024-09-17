import React from "react";

const Discount = () => {
  return (
    <>
      <div className=" div2 h-[6.25rem] flex flex-col gap-4 background absolute top-[38%] md:visible a pl-10 font-[rubik] invisible">
        <h3 className="text-white text-4xl">Sale</h3>
        <p className="text-white text-2xl flex-wrap">
          Up to 60% OFF ON SELECTED ITEMS{" "}
        </p>
        <button className="bg-white  text-[#B5273D] w-[6.875rem] p-2 rounded-md hover:scale-105 hover:bg-[#B5273D] hover:text-white duration-[0.3s]">
          SHOP NOW
        </button>
      </div>
    </>
  );
};

export default Discount;
