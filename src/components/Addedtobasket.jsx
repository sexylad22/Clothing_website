import React, { useState } from "react";

const Addedtobasket = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      {isOpen && (
        <dialog
          open
          className="modal w-[25rem] h-[9.375rem] rounded-[0.5625rem] font-[Helvetica] mr-3 mt-[2.1875rem]"
        >
          <div className="h-[30%] flex items-center bg-[#60D17D] pl-2 rounded-t-[0.5625rem]">
            <div className="rounded-full w-[1.5625rem] h-[1.5625rem] flex justify-center items-center bg-white mr-2">
              <i className="fa-solid fa-check text-[#60D17D]"></i>
            </div>
            <div className="flex justify-start relative bottom-[1.875rem] left-[21.25rem]">
              <div
                className="rounded-full w-[1.5625rem] h-[1.5625rem] flex justify-center items-center bg-white cursor-pointer"
                onClick={handleClose}
              >
                <i className="fa-solid fa-x text-[0.5625rem]"></i>
              </div>
            </div>
            <div className="text-white">
              <h3>Add to basket</h3>
            </div>
          </div>
          <div className="flex justify-center items-center h-[70%]">
            <div className="bg-black h-[3.25rem] w-[20rem] rounded-[1.25rem] flex justify-center items-center cursor-pointer">
              <button className="text-white">See basket</button>
            </div>
          </div>
        </dialog>
      )}
      <button
        onClick={handleOpen}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Open Basket Dialog
      </button>
    </>
  );
};

export default Addedtobasket;
