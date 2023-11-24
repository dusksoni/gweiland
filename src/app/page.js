"use client";
import { FaAngleDown, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { FiShoppingBag, FiUser } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import Image from "next/image";
import Slider from "./components/slider";
import LogoSlider from "./components/logoSlider";
import { useState } from "react";

export default function Home() {
  const [isBrandListVisible, setBrandListVisibility] = useState(false);
  const [isShopListVisible, setShopListVisibility] = useState(false);
  const brandNames = ["Brand 1", "Brand 2", "Brand 3", "Brand 4", "Brand 5", "Brand 6", "Brand 7"];
  const shopNames = ["Brand 1", "Brand 2", "Brand 3", "Brand 4", "Brand 5", "Brand 6", "Brand 7"];

  return (
    <main>
      <div className="w-full h-full bg-white">
        <div className="relative bg-[#E1C300] py-2 w-full text-center">
          <div>
            <a
              href="https://www.tiktok.com/@bravaland.com"
              target="_blank"
              className="text-black text-sm font-bold"
            >
              VISIT US ON TIKTOK @bravaland.com
            </a>
          </div>
        </div>
        <div className="sticky top-0 z-50 w-full bg-[#212122] px-10 h-20">
          <div className=" grid grid-cols-3 h-full justify-between ">
            <ul className="flex gap-7 items-center text-sm font-bold">
              <li
                className=" gap-2 hover:text-[#E1C300] cursor-pointer hover-underline-animation"
                onMouseEnter={() => setBrandListVisibility(true)}
                onMouseLeave={() => setBrandListVisibility(false)}
              >
                brands <FaAngleDown className="my-auto" />
              </li>
              <li className=" gap-2 hover:text-[#E1C300] cursor-pointer hover-underline-animation"  onMouseEnter={() => setShopListVisibility(true)}
                onMouseLeave={() => setShopListVisibility(false)}>
                shop <FaAngleDown className="my-auto" />
              </li>
              <li className=" hover:text-[#E1C300] cursor-pointer hover-underline-animation">
                premium
              </li>
              <li className=" hover:text-[#E1C300] cursor-pointer hover-underline-animation">
                gift cards
              </li>
            </ul>
            <div className="items-center m-auto">
              <Image
                src="https://bravaland.com/cdn/shop/files/Artboard_1.png?v=1678787853"
                alt="Artboard 1"
                width={120} // Set the desired width
                height={70} // Set the desired height
              />
            </div>
            <div className="flex gap-5 items-center text-sm font-bold ml-auto">
              <div className=" gap-2 hover:text-[#E1C300] cursor-pointer hover-underline-animation">
                become an affiliate
              </div>
              <div className="hover:text-[#E1C300] cursor-pointer">
                <FaTwitter className="text-xl" />
              </div>
              <div className="hover:text-[#E1C300] cursor-pointer">
                <FaTiktok className="text-xl" />
              </div>
              <div className="hover:text-[#E1C300] cursor-pointer">
                <FaInstagram className="text-xl" />
              </div>
              <div className="hover:text-[#E1C300] cursor-pointer">
                <FiUser className="text-xl" />
              </div>
              <div className="hover:text-[#E1C300] cursor-pointer">
                <IoSearchOutline className="text-xl" />
              </div>
              <div className="hover:text-[#E1C300] cursor-pointer">
                <FiShoppingBag className="text-xl absolute" />
                <div className="relative bg-white text-black text-xs h-4 w-4 text-center bottom-2 left-2.5 rounded-full">
                  0
                </div>
              </div>
            </div>
            <div
              className={`brand-list ${isBrandListVisible ? "visible" : ""} ` }
              onMouseEnter={()=>setBrandListVisibility(true)}
              onMouseLeave={()=>setBrandListVisibility(false)}
            >
              <ul className="">
                {brandNames.map((brand, index) => (
                  <li key={index} className="hover:text-[#E1C300] cursor-pointer hover-underline-animation mx-5">{brand}</li>
                ))}
              </ul>
            </div>
            <div
              className={`shop-list ${isShopListVisible ? "visible" : ""} ` }
              onMouseEnter={()=>setShopListVisibility(true)}
              onMouseLeave={()=>setShopListVisibility(false)}
            >
              <div className="grid grid-cols-2 py-16">

              <ul className="">
                {shopNames.map((shop, index) => (
                  <li key={index} className="hover:text-[#E1C300] cursor-pointer hover-underline-animation mx-5">{shop}</li>
                  ))}
              </ul>
              <ul className="">
                {shopNames.map((shop, index) => (
                  <li key={index} className="hover:text-[#E1C300] cursor-pointer hover-underline-animation mx-5">{shop}</li>
                  ))}
              </ul>
                  </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Slider />
        </div>
        <div className="w-full">
          <LogoSlider />
        </div>
      </div>
    </main>
  );
}
