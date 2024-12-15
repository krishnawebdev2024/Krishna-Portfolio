import React from "react";
import profilebild from "../../assets/profilebild.png";
import Profilebild1 from "../../assets/Profilebild1.png";
import bgCard from "../../assets/heroSection/bgCard.png";

import AnimatedPattern from "./AnimatedPattern";

import DocumentViewer from "./DocumentViewer";

const HeroSection = () => {
  return (
    <>
      <div className="p-6 sm:p-8 md:px-16 lg:px-24 xl:px-32 mt-[85px] dark:bg-darkBackground h-full  ">
        <div className=" relative h-auto rounded-md overflow-hidden">
          {/* Foreground Section (Content) */}
          <div className="relative z-10 rounded-md h-auto  bg-lightBackground  dark:bg-darkBackground">
            <div className="grid grid-cols-1 sm:grid-cols-2 h-auto  overflow-hidden w-full rounded-md bg-lightBackground  dark:bg-darkBackground">
              {/* Right Section (Text) */}
              <div className="flex flex-col justify-center px-6 sm:px-16 dark:bg-cardDarkBackground   ">
                <div className="mb-4 mt-4 text-headingPrimary dark:text-headingSecondary rounded px-2 py-1 ">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                    Hallo!
                  </p>
                </div>

                <p className="text-2xl mb-4 font-bold  text-headingPrimary dark:text-headingSecondary   sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ">
                  Ich bin Krishna, <br />
                  Fullstack-Webentwickler
                </p>
              </div>

              {/* Left Section (Image) */}
              <div className="flex items-center justify-center  bg-lightBackground  dark:bg-cardDarkBackground  ">
                <img
                  src={Profilebild1}
                  alt="Krishna"
                  className="w-full h-full max-w-[450px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <DocumentViewer />
    </>
  );
};

export default HeroSection;

{
  /* Background Section */
}
//<div className="absolute inset-0 z-0 justify-start align-bottom ">
//  <AnimatedPattern />
//</div>
