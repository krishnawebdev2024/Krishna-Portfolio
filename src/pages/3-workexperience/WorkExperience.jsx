import React from "react";
import adesso from "../../assets/firmenLogos/adesso.png";
import wbs from "../../assets/firmenLogos/wbs.png";
import learning from "../../assets/firmenLogos/learning.png";

const CareerCards = ({ data }) => {
  return (
    <div className="p-6 sm:p-8 md:px-16 lg:px-24 xl:px-32 mt-[85px] dark:bg-darkBackground ">
      <p className="text-3xl font-bold pt-12 pb-8 text-center text-headingPrimary dark:text-headingSecondary md:text-4xl lg:pb-12">
        Berufliche Stationen und Kompetenzen
      </p>
      <div className="grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row bg-lightBackground dark:bg-cardDarkBackground rounded-lg p-6 gap-6 transition-all duration-300 ease-in-out"
          >
            {/* Title Section */}
            <div className="w-full sm:w-[35%] flex flex-col items-center sm:items-start mb-6 sm:mb-0">
              <h2 className="text-2xl font-semibold text-headingPrimary dark:text-headingSecondary">
                {item.title}
              </h2>
              <p className="text-sm text-textMuted dark:text-slate-300 mt-2">
                {item.timeframe}
              </p>

              <img
                src={item.imageUrl}
                alt="Title Image"
                className="w-1/2 h-auto object-cover rounded-md mt-4" // Adjust width and height //for better layout
              />
            </div>

            {/* Details Section */}
            <div className="w-full sm:w-[65%] space-y-6">
              {/* Description */}
              <p className="text-base text-lightForeground dark:text-darkForeground mb-4 font-medium leading-relaxed">
                {item.description}
              </p>

              {/* Highlights Section */}
              <div className="space-y-4">
                <h3 className="text-md font-semibold text-headingPrimary dark:text-headingSecondary">
                  Highlights
                </h3>
                <ul className="space-y-2 list-disc list-inside text-lightForeground dark:text-darkForeground">
                  {item.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="transition-all duration-300dark:hover:text-primaryDark"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const careerData = [
  {
    title: "Full-Stack Web & App Development Bootcamp",
    timeframe: "August 2024 – Dezember 2024",
    imageUrl: wbs,
    description: `
      Intensives Training in modernen Web- und App-Entwicklungstechnologien. 
      Fokus auf die Entwicklung skalierbarer Anwendungen und den Einsatz von KI-Tools für innovative Projekte.
    `,
    highlights: [
      "Erstellung skalierbarer Web- und App-Lösungen mit modernen Technologien.",
      "Vertiefung von Fähigkeiten in React, Node.js und Tailwind CSS sowie SQL- und NoSQL-Datenbanken..",
      "Zusammenarbeit mit Mentoren und einer Community für kontinuierliches Lernen.",
    ],
  },
  {
    title: "Associate Concept Developer",
    timeframe: "April 2023 – August 2024",
    imageUrl: adesso,
    description: `
      Als assoziativer Konzeptentwickler bei Adesso habe ich meine Fähigkeiten weiterentwickelt und innovative Ideen in die Tat umgesetzt. 
      Meine Rolle erforderte ein hohes Maß an Kreativität und strategischem Denken, um sicherzustellen, dass unsere Lösungen den spezifischen Anforderungen 
      und Erwartungen unserer Kunden gerecht werden. Durch meine Arbeit habe ich maßgeblich dazu beigetragen, den Erfolg und die Reputation des Unternehmens zu festigen.
    `,
    highlights: [
      "Durchführung von Usability-Tests mit 50+ Teilnehmern, was zu umsetzbaren Erkenntnissen fürchte und die Benutzerinteraktion verbesserte.",
      "Entwicklung von 15+ Designprototypen in Figma, wodurch die Anzahl der Überarbeitungen um 25 % reduziert wurde.",
      "Erstellung von 10+ benutzerzentrierten Designprojekten, die eine 15%ige Reduktion von Supportanfragen erreichten.",
    ],
  },
  {
    title: "UX/UI Trainee",
    timeframe: "April 2022 – April 2023",
    imageUrl: adesso,
    description: `
      für die Trainee-Position bei Adesso habe ich mich mit großer Begeisterung eingelebt und schnell in die Arbeitskultur integriert. 
      Durch meine Hingabe und mein Engagement konnte ich schnell Verantwortung übernehmen und wertvolle Einblicke in die Welt des IT-Consultings gewinnen.
    `,
    highlights: [
      "Gestaltung intuitiver Schnittstellen für Webanwendungen, was die Einarbeitungszeit um 25% reduzierte.",
      "Übersetzung von Nutzerfeedback aus 15+ Fokusgruppen in 5 Prototypen, die die Zufriedenheitsbewertung um 25% steigerten.",
      "Nutzung von Tools wie Figma, Adobe und Blender für Wireframes, visuelle Assets und 3D-Modelle.",
    ],
  },
  {
    title: "Transition and Personal Development",
    timeframe: "August 2017 – April 2022",
    imageUrl: learning,
    description: `
      Erfolgreiche Integration in die deutsche Kultur und Umgebung nach dem Umzug. 
      Erreichen eines professionellen Sprachniveaus in Deutsch durch gezieltes Lernen. 
      Fokus auf selbstgesteuertes Lernen in den Bereichen UI/UX-Design, was letztendlich den Einstieg in die Tech-Branche ermöglichte.
    `,
    highlights: [
      "Erlernung der deutschen Sprache auf einem professionellen Niveau.",
      "Selbstgesteuertes Lernen in UI/UX-Design, das den Übergang in die Tech-Branche vorbereitete.",
      "Sicherstellung einer erfolgreichen Rolle bei Adesso Dortmund ab April 2022.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <div>
      <CareerCards data={careerData} />
    </div>
  );
};

export default WorkExperience;

//return (
//  <div className="p-6 sm:p-8 md:px-16 lg:px-24 xl:px-32 mt-[85px] dark:bg-darkBackground h-full //">
//    <p className="text-3xl font-bold pt-12 pb-8 text-center text-headingPrimary //dark:text-headingSecondary md:text-4xl lg:pb-12">
//      Berufliche Stationen und Kompetenzen
//    </p>
//    <div className="grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 //xl:grid-cols-2">
//      {data.map((item, index) => (
//        <div
//          key={index}
//          className="flex flex-row bg-lightBackground dark:bg-cardDarkBackground shadow-lg //rounded-lg p-6 gap-6"
//        >
//          {/* Title Section */}
//          <div className="w-[30%] flex flex-col ">
//            <div>
//              <h2 className="text-xl font-bold text-headingPrimary dark:text-headingSecondary">
//                {item.title}
//              </h2>
//              <p className="text-sm text-textMuted dark:text-slate-300 mt-2">
//                {item.timeframe}
//              </p>
//            </div>
//            <img
//              src={item.imageUrl} // Dynamically select the image based on the title
//              alt="Title Image"
//              className="w-1/2 h-auto object-cover rounded-md mt-4" // Adjust width and height //for better layout
//            />
//          </div>
//
//          {/* Details Section */}
//          <div className="w-[70%] space-y-6">
//            {/* Description */}
//            <p className="text-lg text-lightForeground dark:text-darkForeground mb-4 font-medium //leading-relaxed">
//              {item.description}
//            </p>
//
//            {/* Highlights Section */}
//            <div className="space-y-4">
//              <h3 className="text-md font-semibold text-headingPrimary //dark:text-headingSecondary">
//                Highlights
//              </h3>
//              <ul className="space-y-2 list-disc list-inside text-lightForeground //dark:text-darkForeground">
//                {item.highlights.map((highlight, idx) => (
//                  <li
//                    key={idx}
//                    className="transition-all duration-300 hover:text-primary //dark:hover:text-primaryDark"
//                  >
//                    {highlight}
//                  </li>
//                ))}
//              </ul>
//            </div>
//          </div>
//        </div>
//      ))}
//    </div>
//  </div>
//);
