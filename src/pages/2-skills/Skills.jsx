import React from "react";
import RobotModel from "../../designSystem/robot/RobotModel.jsx";
import { FiMaximize } from "react-icons/fi";

const skills = [
  "HTML5, CSS3 and Responsive Web Design",
  "Frontend Programming with JavaScript/React",
  "Backend Programming with Node.js (Express)",
  "Version Control Systems (Git & GitHub)",
  "Generative AI Integration",
  "Databases (SQL, NoSQL)",
  "Restful APIs",
  "Unit Testing",
  "Agile Tools and Methodologies and Node.js",
  "SCRUM (JIRA & Confluence)",
  "Adobe Photoshop, Premiere Pro & Illustrator",
  "Blender",
  "UI and UX",
];

const Skills = () => {
  return (
    <div className="p-6 sm:p-8 md:px-16 lg:px-24 xl:px-32 mt-[85px] dark:bg-darkBackground ">
      <p className="text-3xl font-bold pt-12  text-center text-headingPrimary dark:text-headingSecondary md:text-4xl lg:pb-12">
        Kernkompetenzen in Webentwicklung und Design
      </p>

      <div className="flex flex-wrap gap-4 justify-center pt-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-6 py-2 bg-lightBackground dark:bg-cardDarkBackground text-lightText dark:text-darkText rounded-full text-center font-semibold transition-all transform  hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-lightText duration-300"
          >
            {skill}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pb-8 mt-8">
        {/* Robot Model */}
        <div className="col-span-5 row-start-2 flex justify-center items-center bg-lightBackground dark:bg-cardDarkBackground rounded-lg">
          <RobotModel />
        </div>
      </div>
    </div>
  );
};

export default Skills;
