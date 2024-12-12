import React from "react";
import profilebild from "../../assets/profilebild.png";
import Profilebild1 from "../../assets/Profilebild1.png";
import bgCard from "../../assets/heroSection/bgCard.png";

const HeroSection = () => {
  return (
    <>
      <div
        className="bg-lightBackground mt-[85px] dark:bg-darkBackground relative p-6 lg:px-24 h-auto"
        style={{
          backgroundImage: `url(${bgCard})`,
          backgroundSize: "cover", // Ensures the image covers the whole div
          backgroundPosition: "center", // Centers the image
          backgroundAttachment: "fixed", // Optional: Makes the image stay fixed while scrolling (parallax effect)
        }}
      >
        <div className="rounded-md h-auto backdrop-blur-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 h-auto backdrop-blur-md rounded-md border border-white/20 dark:border-gray-600 overflow-hidden w-full">
            {/* Right Section (Text) */}
            <div className="flex flex-col justify-center px-6 sm:px-16">
              <div className="mb-4 mt-4 text-headingSecondary">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                  Hallo!
                </p>
              </div>

              <p className="text-2xl mb-4 font-bold text-headingSecondary sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                Ich bin <span className="text-primary">Krishna</span>, <br />
                Fullstack-Webentwickler
              </p>
            </div>

            {/* Left Section (Image) */}
            <div className="flex items-center justify-center">
              <img
                src={Profilebild1}
                alt="Krishna"
                className="w-full h-full max-w-[450px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
