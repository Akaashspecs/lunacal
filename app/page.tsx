"use client";

import { useEffect, useRef, useState } from "react";
import FirstTile from "./FirstTile";
import TileLayout from "./TileLayout";
import { dummyImages } from "./utils.js";

export default function Home() {
  const [images, setImages] = useState(dummyImages);
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);

  const totalSlides = images.length;

  const [preview, setPreview] = useState(null);
  console.log(containerWidth);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file); // create preview URL
      setPreview(url);

      const newImage = { id: images.length + 1, src: url };

      setImages([...images, newImage]);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth); // measure parent
    }

    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (containerWidth > 700 && visibleSlides !== 4) {
      setVisibleSlides(4);
    }
    if (containerWidth <= 700 && visibleSlides !== 3) {
      setVisibleSlides(3);
    }
  }, [containerWidth]);

  const slideWidth = containerWidth / visibleSlides - 14;

  const visibleImages = images.slice(index, index + visibleSlides);

  console.log(visibleImages);

  const handleNext = () => {
    if (index + visibleSlides < totalSlides) {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(0); // loop back
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    } else {
      setIndex(totalSlides - visibleSlides); // loop to end
    }
  };

  return (
    <div className="bg-black h-screen w-screen md:p-4 lg:p-4 overflow-hidden">
      <div className=" bg-linear-to-b from-[#282D32]  to-[#191B1F]  h-full w-full rounded-[27px] flex md:gap-[10px] lg:gap-[56px]">
        <div className=" w-[45%] bg-[#616161]/82 rounded-[27px] shrink-0">
          dfdf
        </div>
        <div className="flex flex-col ">
          <FirstTile />
          <TileLayout>
            <div className="w-full md:[20px] lg:pr-[46px] ">
              <div className="flex justify-between w-full  h-fit items-center  pl-[17px] ">
                <div className="gallery-shadow lg:w-[149px]  md:w-[100px]  bg-[#171717] md:rounded-[12px] lg:rounded-[23px] flex lg:h-[62px] md:h-[50px] lg:p-[6px]  justify-center items-center text-white ">
                  Gallery
                </div>
                <div className="flex md:gap-[20px] lg:gap-[35px]">
                  <input
                    id="fileInput"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="button-glow md:h-[35px] md:w-[100px]   lg:w-[131px] lg:h-[46px] flex justify-center items-center text-white hidden"
                  ></input>
                  <label
                    htmlFor="fileInput"
                    className="button-glow md:h-[35px] md:w-[100px] lg:w-[131px] lg:h-[46px] 
             flex justify-center items-center text-white cursor-pointer md:text-sm lg:text-base"
                  >
                    + Add Image
                  </label>
                  <div className="flex md:gap-[10px] lg:gap-[18px]">
                    <div
                      className="lg:h-[45px] lg:w-[45px] md:h-[35px] md:w-[35px]   arrow-button-glow cursor-pointer"
                      onClick={handlePrev}
                    ></div>
                    <div
                      className="lg:h-[45px] lg:w-[45px]  md:h-[35px] md:w-[35px]    arrow-button-glow cursor-pointer"
                      onClick={handleNext}
                    ></div>
                  </div>
                </div>
              </div>

              <div
                ref={containerRef}
                className="relative w-[95%] overflow-visible py-10  pl-[25px] "
              >
                <div
                  className="flex transition-normal duration-500 ease-in-out gap-[14px] overflow-visible"
                  style={{
                    transform: `translateX(-${index * (slideWidth + 14)}px)`,
                    width: `${containerWidth - 46}px`, // prevent flex from auto-expanding
                  }}
                >
                  {images.map((src, i) => (
                    <div
                      key={i}
                      className="shrink-0 relative"
                      style={{
                        width: `${slideWidth}px`,
                        height: `${slideWidth}px`,
                      }}
                    >
                      <img
                        src={src.src}
                        alt={`Slide ${i}`}
                        className={`w-full h-full object-cover rounded-md grayscale hover:z-[100]
                     hover:scale-110 hover:grayscale-0 hover:-rotate-3
                     transition-transform duration-300 ease-in-out relative z-10 ${
                       !visibleImages.some((v) => v.id === src.id) && "hidden"
                     } `}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TileLayout>
        </div>
      </div>
    </div>
  );
}
