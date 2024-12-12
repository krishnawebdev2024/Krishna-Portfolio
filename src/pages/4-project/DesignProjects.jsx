import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMaximize } from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa";

import Modal from "./Modal";

import ads from "../../assets/designProjects/ads.pdf";
import cody from "../../assets/designProjects/cody.pdf";
import Learniverse from "../../assets/designProjects/Learniverse.pdf";
import pgri from "../../assets/designProjects/pgri.pdf";

import ads1 from "../../assets/designProjects/ads1.png";
import cody1 from "../../assets/designProjects/cody1.png";
import Learniverse1 from "../../assets/designProjects/Learniverse1.png";
import pgri1 from "../../assets/designProjects/pgri1.png";

// Example certificate data
const certificates = [
  {
    id: 1,
    title: "Erstellung des Adesso Design Systems",
    organization: "adesso",
    pdf: ads,
    image: ads1,
  },

  {
    id: 2,
    title: "Kreative Entwicklung für Cosmic Coders",
    organization: "adesso",
    pdf: cody,
    image: cody1,
  },
  {
    id: 3,
    title: "Learniverse-Projekt: Benutzeroberfläche und 3D",
    organization: "adesso",
    pdf: Learniverse,
    image: Learniverse1,
  },
  {
    id: 4,
    title: "UX Analyse und Konzept für PGRI",
    organization: "adesso",
    pdf: pgri,
    image: pgri1,
  },
];

const DesignProjects = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  return (
    <div className="p-6 sm:p-8 md:px-16 lg:px-24 xl:px-32  dark:bg-darkBackground h-full ">
      <p className="text-3xl font-bold pt-12 pb-8 text-center text-headingPrimary dark:text-headingSecondary md:text-4xl lg:pb-12">
        UX-Analyse, UI-Design und 3D-Modellierung
      </p>
      <div className="grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {certificates.map((certificate) => (
          <CertificateCard
            key={certificate.id}
            title={certificate.title}
            organization={certificate.organization}
            pdf={certificate.pdf}
            image={certificate.image}
            onView={() => setSelectedPdf(certificate.pdf)}
          />
        ))}
      </div>

      {/* Modal for viewing the PDF */}
      {selectedPdf && (
        <Modal onClose={() => setSelectedPdf(null)}>
          <iframe
            src={selectedPdf}
            title="Certificate Viewer"
            className="w-full h-[80vh] border-none "
          />
        </Modal>
      )}
    </div>
  );
};

const CertificateCard = ({ title, organization, pdf, image, onView }) => {
  return (
    <motion.div
      className="relative group rounded-lg overflow-hidden shadow-sm bg-lightBackground dark:bg-cardDarkBackground transition-all duration-200 flex flex-col justify-between"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <div className="p-4">
          <img
            src={image}
            alt={title}
            className="w-full h-50 rounded-sm object-cover transition-transform duration-300 group-hover:scale-102"
          />
        </div>
        <div className="p-4">
          <div className="flex flex-col justify-start align-top ">
            <h3 className="text-xl font-semibold text-lightText dark:text-darkText transition-all duration-300 z-10">
              {title}
            </h3>
            <p className="text-sm text-textMuted dark:text-slate-300 mt-2 transition-all duration-300 z-10">
              {organization}
            </p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <button
          onClick={onView}
          className="inline-flex items-center justify-center gap-2 text-sm font-medium mt-2 text-primary dark:text-neutralLight bg-neutralLight dark:bg-primary px-4 py-2 rounded-md shadow-sm hover:shadow-lg hover:ring-2 hover:ring-primary dark:hover:ring-neutralLight transition-all duration-300"
        >
          Dokument anzeigen
          <FaFilePdf className="text-lg" />
        </button>
      </div>
    </motion.div>
  );
};

export default DesignProjects;
