import React from "react";

import ActionButton from "./ActionButton";
import TimeDisplay from "./TimeDisplay";
import SocialLinks from "./SocialLinks";
import MagneticButton from "./MagneticButton";

const Footer = () => {
  return (
    <div>
      <section className="flex flex-col justify-between  dark:bg-darkBackground bg-darkBackground   pt-12 text-white  sm:py-18 p-6 sm:p-8 md:px-16 lg:px-24 xl:px-32 ">
        {/* Heading with responsive text size */}
        <div>
          <p className="text-3xl font-bold uppercase tracking-tight text-left sm:text-2xl md:text-4xl lg:text-6xl xl:text-7xl">
            Bereit, meine Fähigkeiten in Ihr Team einzubringen
          </p>

          {/* Buttons section with responsive layout */}
          <div className="flex flex-wrap gap-4 mt-6">
            <ActionButton
              href="https://github.com/krishnawebdev2024"
              label="GitHub"
            />
            <ActionButton
              href="https://www.linkedin.com/in/radhakrishnan-fullstackdeveloper"
              label="LinkedIn"
            />
            <ActionButton
              href="mailto:krisch.webdev@gmail.com"
              label="krisch.webdev@gmail.com"
            />
            <ActionButton href="tel:+4915214855099" label="+4915214855099" />
          </div>

          <div className="w-full h-[1px] bg-slate-400 my-8 mx-auto" />
        </div>
        {/* Social media icons section */}

        <div className=" flex flex-row md:flex-row items-center justify-between  text-white mb-10">
          <div className="flex flex-col      ">
            <p className=" text-sm font-medium text-darkText mb-1">Version:</p>
            <p className="text-sm text-darkText ">2024 © Edition</p>
          </div>
          <div className="flex flex-col  ">
            <p className="text-sm font-medium text-darkText mb-1">
              Aktuelle Uhrzeit:
            </p>
            <TimeDisplay />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
