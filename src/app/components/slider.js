"use client";
import { useEffect, useState } from "react";
import "./slider.css";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";
import { IoMdArrowBack } from "react-icons/io";

function Slider() {
  const images = [
    {
      img: "https://bravaland.com/cdn/shop/files/DSC09618_CAROUSEL_1_1440x650_crop_center.jpg?v=1691318279",
      title: "heritage women's tank",
      side: "right",
    },
    {
      img: "https://bravaland.com/cdn/shop/files/DSC09179_CAROUSEL_1_1440x650_crop_center.jpg?v=1691318279",
      title: "premium tees",
      side: "left",
    },
    {
      img: "https://bravaland.com/cdn/shop/files/DSC09802_carousel_1440x650_crop_center.jpg?v=1691318279",
      title: "heritage tees",
      side: "right",
    },
    {
      img: "https://bravaland.com/cdn/shop/files/DSC00198_CAROUSEL_1_1440x650_crop_center.jpg?v=1691318278",
      title: "premium zip hoodies",
      side: "left",
    },
    {
      img: "https://bravaland.com/cdn/shop/files/DSC00058_CAROUSEL_1_1440x650_crop_center.jpg?v=1691318279",
      title: "heritage hoodies",
      side: "left",
    },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
   setTimeout(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
   }, 4000);
  }, [currentImageIndex]);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  return (
    <div className="image-slider">
      <div className="image-container">
        <button onClick={handlePrev} className="button-left">
          <IoMdArrowBack className="m-auto" />
        </button>
        <div className="image-content">
          <Image
            src={images[currentImageIndex].img}
            alt={`Slide ${currentImageIndex + 1}`}
            width={1440}
            height={0}
            className="slider-image"
          />
          <div
            className={`text-button-container ${images[currentImageIndex].side == "right"? "right-32": "left-32"}`}
          >
            <div className="image-text text-7xl max-w-sm font-black">
              <h2>{images[currentImageIndex].title}</h2>
            </div>
            <button className="image-button">shop now</button>
          </div>
        </div>
        <button onClick={handleNext} className="button-right right-5">
          <IoArrowForward className="m-auto" />
        </button>
      </div>
    </div>
  );
}

export default Slider;
