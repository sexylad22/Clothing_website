import React from "react";

const ReviewPage = () => {
  return (
    <>
      <div className="grid-container">
        <div className="sidebar [grid-area:sidebar;] pt-6  ">
          <h2 className="mb-2 hover:text-[#B5273D] hover:underline duration-300 pointer ">
            New Arrivals
          </h2>
          <ul className="text-sm font-[helveticalight] ">
            <li className="mb-2 hover:text-[#B5273D] hover:underline duration-300 pointer ">
              <a href="">View all</a>
            </li>
            <li className="mb-2 hover:text-[#B5273D] hover:underline duration-300 pointer ">
              Clothes
            </li>
            <li className="mb-2 hover:text-[#B5273D] hover:underline duration-300 pointer ">
              Shoes & Accessories
            </li>
            <li className="mb-2 hover:text-[#B5273D] hover:underline duration-300 pointer ">
              Swimwear
            </li>
            <li className="mb-6 hover:text-[#B5273D] hover:underline duration-300 pointer ">
              Sportswear
            </li>
          </ul>
          <h2 className="mb-2 hover:text-[#B5273D] hover:underline duration-300 pointer ">
            Offers and highlights
          </h2>
          <ul className="text-sm font-[helveticalight]">
            <li className="mb-2 hover:text-[#B5273D] hover:underline duration-300 pointer ">
              <a href="">Best Sellers</a>
            </li>
            <li className="mb-8 hover:text-[#B5273D] hover:underline duration-300 pointer ">
              15% off on Favorites
            </li>
          </ul>

          <h2 className="mb-2 hover:text-[#B5273D] hover:underline duration-300 pointer ">
            Trending Now
          </h2>
          <ul className="text-sm font-[helveticalight]">
            <li className="mb-8 hover:text-[#B5273D] hover:underline duration-300 pointer ">
              Style inspiration
            </li>
          </ul>
          <h2 className="mb-2 hover:text-[#B5273D] hover:underline duration-300 pointer ">
            New Arrivals
          </h2>
          <ul className="text-sm font-[helveticalight] ">
            <li className="mb-2 hover:text-[#B5273D] hover:underline duration-300 pointer ">
              <a href="">View all</a>
            </li>
            <li className="mb-2 hover:text-[#B5273D] hover:underline duration-300 pointer ">
              Clothes
            </li>
            <li className="mb-2 hover:text-[#B5273D] hover:underline duration-300 pointer ">
              Shoes & Accessories
            </li>
            <li className="mb-2 hover:text-[#B5273D] hover:underline duration-300 pointer ">
              Shoes
            </li>
            <li className="mb-2 hover:text-[#B5273D] hover:underline duration-300 pointer ">
              Jeans
            </li>
            <li className="mb-2 hover:text-[#B5273D] hover:underline duration-300 pointer ">
              <a href="">Skirts</a>
            </li>
            <li className="mb-2 hover:text-[#B5273D] hover:underline duration-300 pointer ">
              Clothes
            </li>
            <li className="mb-2 hover:text-[#B5273D] hover:underline duration-300 pointer ">
              Shoes & Accessories
            </li>
            <li className="mb-2 hover:text-[#B5273D] hover:underline duration-300 pointer ">
              Tops
            </li>
            <li className="mb-2 hover:text-[#B5273D] hover:underline duration-300 pointer ">
              Shorts
            </li>
            <li className="mb-2 hover:text-[#B5273D] hover:underline duration-300 pointer ">
              <a href="">Bottoms</a>
            </li>
            <li className="mb-2 hover:text-[#B5273D] hover:underline duration-300 pointer ">
              Clothes
            </li>
            <li className="mb-2 hover:text-[#B5273D] hover:underline duration-300 pointer ">
              Shoes & Accessories
            </li>
            <li className="mb-2 hover:text-[#B5273D] hover:underline duration-300 pointer ">
              Cardigans & Jumpers
            </li>
            <li className="mb-2 hover:text-[#B5273D] hover:underline duration-300 pointer ">
              Jumpsuits & Playsuits
            </li>
            <li className="mb-2 hover:text-[#B5273D] hover:underline duration-300 pointer ">
              <a href="">Premium Selection</a>
            </li>
            <li className="mb-2 hover:text-[#B5273D] hover:underline duration-300 pointer ">
              Clothes
            </li>
            <li className="mb-2 hover:text-[#B5273D] hover:underline duration-300 pointer ">
              Shoes & Accessories
            </li>
            <li className="mb-2 hover:text-[#B5273D] hover:underline duration-300 pointer ">
              Maternity Wear
            </li>
            <li className="mb-6 hover:text-[#B5273D] hover:underline duration-300 pointer ">
              Socks & Tights
            </li>
          </ul>
          <h2 className="mb-2 hover:text-[#B5273D] hover:underline duration-300 pointer ">
            Magazine
          </h2>
          <ul className="text-sm font-[helveticalight] ">
            <li className="mb-2 hover:text-[#B5273D] hover:underline duration-300 pointer ">
              <a href="">Magazine</a>
            </li>
          </ul>
        </div>
        <div className="title [grid-area:title;]  text-5xl pt-6   ">
          Kids section
        </div>
        <div className="filter [grid-area:filter;] flex flex-row gap-8 ">
          <div className="flex flex-row gap-4">
            <h3>SORT BY</h3>
            <i>
              <i class="fa-solid fa-caret-down"></i>
            </i>
          </div>
          <div className="flex flex-row gap-4">
            <h3>PRICE</h3>
            <i>
              <i class="fa-solid fa-caret-down"></i>
            </i>
          </div>
          <div className="flex flex-row gap-4">
            <h3>SIZE</h3>
            <i>
              <i class="fa-solid fa-caret-down"></i>
            </i>
          </div>
          <div className="flex flex-row gap-4">
            <h3>COLOUR</h3>
            <i>
              <i class="fa-solid fa-caret-down"></i>
            </i>
          </div>
          <div className="ml-auto ">
            <h3 title="Items">1923 items</h3>
          </div>
        </div>
        <div className="content-container [grid-area:content1;]">
          <div className="">
            <img src="./images/pants.png" alt="" />
          </div>
          <div className="flex flex-col  mt-3 "></div>
          <div className="text-sm">Blue Sweatshirt</div>
          <div className="text-sm">2000 EGP</div>
        </div>
        <div className="content2 [grid-area:content2;]">
          <div>
            <img src="./images/ppantsback.webp" alt="" />
          </div>
          <div className="flex flex-col  mt-3 "></div>
          <div className="text-sm">Blue Sweatshirt</div>
          <div className="text-sm">2000 EGP</div>
        </div>
        <div className="content3 [grid-area:content3;]">
          <div>
            <img src="./images/pants2.webp" alt="" />
          </div>
          <div className="flex flex-col  mt-3 "></div>
          <div className="text-sm">Blue Sweatshirt</div>
          <div className="text-sm">2000 EGP</div>
        </div>
        <div className="content4 [grid-area:content4;]">
          <div>
            <img src="./images/olpback.webp" alt="" />
          </div>
          <div className="flex flex-col  mt-3 "></div>
          <div className="text-sm">Blue Sweatshirt</div>
          <div className="text-sm">2000 EGP</div>
        </div>
        <div className="content5 [grid-area:content5;]">
          <div className="">
            <img src="./images/shirt1.webp" alt="" />
          </div>
          <div className="flex flex-col  mt-3 "></div>
          <div className="text-sm">Blue Sweatshirt</div>
          <div className="text-sm">2000 EGP</div>
        </div>
        <div className="content6 [grid-area:content6;]">
          <div>
            <img src="./images/blteeback.webp" alt="" />
          </div>
          <div className="flex flex-col  mt-3 "></div>
          <div className="text-sm">Blue Sweatshirt</div>
          <div className="text-sm">2000 EGP</div>
        </div>
        <div className="content7 [grid-area:content7;]">
          <div>
            <img src="./images/pants.png" alt="" />
          </div>
          <div className="flex flex-col  mt-3 "></div>
          <div className="text-sm">Blue Sweatshirt</div>
          <div className="text-sm">2000 EGP</div>
        </div>
        <div className="content8 [grid-area:content8;]">
          <div>
            <img src="./images/pants2.webp" alt="" />
          </div>
          <div className="flex flex-col  mt-3 "></div>
          <div className="text-sm">Blue Sweatshirt</div>
          <div className="text-sm">2000 EGP</div>
        </div>
      </div>
    </>
  );
};

export default ReviewPage;
