"use client"
import React, { useState } from "react";
import Slide from "@mui/material/Slide";
import { Grid, Stack } from "@mui/material";
import Dots from "./components/Dots";
import Arrow from "./components/Arrow";
import CarouselSlide from "./components/CarouselSlide";
import { MyProduct } from "@/app/components/constants/types";


interface ImageSliderProps {
  item: {
    img: string[];
  };
}

const ImageSlider: React.FC<ImageSliderProps> = ({ item }) => {
  const [slideIn, setSlideIn] = useState<boolean>(true);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("right");
  const [index, setIndex] = useState<number>(0);
  const content = item.img[index];
  const numSlides = item.img.length;

  const onArrowClick = (direction: "left" | "right") => {
    const increment = direction === "left" ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;
    const oppDirection = direction === "left" ? "right" : "left";
    setSlideDirection(direction);
    setSlideIn(false);

    setTimeout(() => {
      setIndex(newIndex);
      setSlideDirection(oppDirection);
      setSlideIn(true);
    }, 500);
  };

  return (
    <div className="containerSingleProductSlider">
      <div className="image-containerSlider">
        <img src={content} alt="Product Image" className="imageSlider" />
        <div className="arrow-container">
          <Arrow direction="left" handleClick={() => onArrowClick("left")} />
          <Arrow direction="right" handleClick={() => onArrowClick("right")} />
        </div>
        <div className="dots-container">
          <Dots mates={item.img} index={index} />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;

