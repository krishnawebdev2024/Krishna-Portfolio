import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

// Import project thumbnails
import Diarydata from "../../assets/projects/Diarydata.png";
import ECommerceStore from "../../assets/projects/ECommerceStore.png";
import Medicare from "../../assets/projects/Medicare.png";
import MemeGenerator from "../../assets/projects/MemeGenerator.png";
import MovieDiary from "../../assets/projects/MovieDiary.png";
import MysteryNumber from "../../assets/projects/MysteryNumber.png";
import PokemonBattleGame from "../../assets/projects/PokemonBattleGame.png";
import TaskMaster from "../../assets/projects/TaskMaster.png";

const projects = [
  {
    id: 1,
    title: "Medicare-Termin-App",
    description:
      "Eine soziale App zur Verwaltung von Gesundheitsgemeinschaften.",
    thumbnail: Medicare,
    link: "https://medicare-fl9r.onrender.com/",
  },
  {
    id: 2,
    title: "Filmtagebuch",
    description:
      "Eine App zum Nachverfolgen und Dokumentieren Ihrer Filmerlebnisse.",
    thumbnail: MovieDiary,
    link: "https://movie-diary-vm91.onrender.com/",
  },
  {
    id: 3,
    title: "E-Commerce-Shop",
    description: "Eine Online-Plattform für E-Commerce.",
    thumbnail: ECommerceStore,
    link: "https://e-commerce-store-dyah.onrender.com/",
  },
  {
    id: 4,
    title: "Task Master",
    description: "Eine To-Do-App zur effizienten Verwaltung Ihrer Aufgaben.",
    thumbnail: TaskMaster,
    link: "https://app-todo-1ysk.onrender.com/",
  },
  {
    id: 5,
    title: "Meme-Generator",
    description: "Ein lustiges Projekt, um Memes zu erstellen und zu teilen.",
    thumbnail: MemeGenerator,
    link: "https://memehub-5l0q.onrender.com/",
  },
  {
    id: 6,
    title: "Zahlenrätsel",
    description: "Ein Projekt für ein Zahlenratespiel.",
    thumbnail: MysteryNumber,
    link: "https://mystery-number.onrender.com/",
  },
  {
    id: 7,
    title: "Pokemon-Kampfspiel",
    description:
      "Ein Kampfspiel, bei dem Sie mit Pokémon-Charakteren kämpfen können.",
    thumbnail: PokemonBattleGame,
    link: "https://kidspokibattle.onrender.com/",
  },
  {
    id: 8,
    title: "Tagebuch-Daten",
    description:
      "Eine persönliche Tagebuch-App, um Ihre Gedanken festzuhalten.",
    thumbnail: Diarydata,
    link: "https://diarydata.onrender.com/",
  },
];

const WebseitProjects = () => {
  return (
    <div className="p-6 sm:p-8 md:px-16 lg:px-24 xl:px-32 mt-[85px] dark:bg-darkBackground h-full ">
      <p className="text-3xl font-bold pt-12 pb-8 text-center text-headingPrimary dark:text-headingSecondary md:text-4xl lg:pb-12">
        Meine Projekte im Überblick
      </p>
      <div className="grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            thumbnail={project.thumbnail}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ title, description, thumbnail, link }) => {
  return (
    <motion.div
      className="relative group rounded-lg overflow-hidden shadow-sm bg-lightBackground dark:bg-cardDarkBackground transition-all duration-200 flex flex-col justify-between"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Thumbnail */}
      <div>
        <div className="p-4">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-50 rounded-sm object-cover transition-transform duration-300 group-hover:scale-102"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-xl font-semibold text-lightText dark:text-darkText transition-all duration-300 z-10">
            {title}
          </h3>
          <p className="text-sm text-textMuted dark:text-slate-300 mt-2 mb-4 transition-all duration-300 z-10">
            {description}
          </p>
        </div>
      </div>
      <div className="p-4">
        <button
          onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
          className="inline-flex items-center justify-center gap-2 text-sm font-medium mt-2 text-primary dark:text-neutralLight bg-neutralLight dark:bg-primary px-4 py-2 rounded-md shadow-sm hover:shadow-lg hover:ring-2 hover:ring-primary dark:hover:ring-neutralLight transition-all duration-300"
        >
          Projekt ansehen
          <FiExternalLink className="text-lg" />
        </button>
      </div>
    </motion.div>
  );
};

export default WebseitProjects;
