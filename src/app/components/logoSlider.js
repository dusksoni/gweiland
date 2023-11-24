"use client";

import Image from "next/image";
import "./logoSlider.css";

function LogoSlider() {
  return (
    <div className="logo-slider">
      <div className="logo-slide-track">
        <div className="  sliderDiv flex gap-10 text-3xl bg-[#236bd3]">
          <Image
            src="https://bravaland.com/cdn/shop/files/Logo_375x_crop_center.png?v=1684399074"
            alt="12"
            height={75}
            width={75}
            className="image"
          />
          <div className="flex justify-around flex-col pr-4">
            <div className="whitespace-nowrap">future fest</div>
            <button className="text-sm">shop now</button>
          </div>
        </div>
        <div className=" sliderDiv flex gap-10 text-3xl bg-black">
          <Image
            src="https://bravaland.com/cdn/shop/files/Bitfins_logo_1f1299f3-eb5c-43bc-a76b-7b08dc7b454f_375x_crop_center.jpg?v=1691536003"
            alt="12"
            height={75}
            width={75}
            className="image"
          />
          <div className="flex justify-around flex-col pr-4">
            <div className="whitespace-nowrap">Bitfins</div>
            <button className="text-sm">shop now</button>
          </div>
        </div>
        <div className=" sliderDiv flex gap-10 text-3xl bg-black">
          <Image
            src="https://bravaland.com/cdn/shop/files/Future_Fest_Profile_Picture_2_375x_crop_center.png?v=1684398899"
            alt="12"
            height={75}
            width={75}
            className="image"
          />
          <div className="flex justify-around flex-col pr-4">
            <div className="whitespace-nowrap">Vudu brigada</div>
            <button className="text-sm">shop now</button>
          </div>
        </div>
        <div className=" sliderDiv flex gap-10 text-3xl bg-black">
          <Image
            src="https://bravaland.com/cdn/shop/files/meSG3lth_400x400_1_375x_crop_center.jpg?v=1691533701"
            alt="12"
            height={75}
            width={75}
            className="image"
          />
          <div className="flex justify-around flex-col pr-4">
            <div className="whitespace-nowrap">pendulum</div>
            <button className="text-sm">shop now</button>
          </div>
        </div>
        <div className=" sliderDiv flex gap-10 text-3xl bg-black">
          <Image
            src="https://bravaland.com/cdn/shop/files/pendulum-brava-logo_375x_crop_center.jpg?v=1691533169"
            alt="12"
            height={75}
            width={75}
            className="image"
          />
          <div className="flex justify-around flex-col pr-4">
            <div className="whitespace-nowrap">future fest</div>
            <button className="text-sm">shop now</button>
          </div>
        </div>
        <div className=" sliderDiv flex gap-10 text-3xl bg-[#ff8a8a]">
          <Image
            src="https://bravaland.com/cdn/shop/files/cryptoraggies-logo-profilepic-trans-2000px_375x_crop_center.png?v=1684348968"
            alt="12"
            height={75}
            width={75}
            className="image"
          />
          <div className="flex justify-around flex-col pr-4">
            <div className="whitespace-nowrap font-bold">cryptoraggles</div>
            <button className="text-sm">shop now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoSlider;
