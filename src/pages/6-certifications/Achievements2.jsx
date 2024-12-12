import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMaximize } from "react-icons/fi";
import Modal from "./Modal"; // Importing the modal component for the PDF view

import Abschluss from "../../assets/EducationalCertificates/abschluss.pdf";
import FullStackWBS from "../../assets/EducationalCertificates/FullStackWBS .pdf";
import Hochschulreife from "../../assets/EducationalCertificates/hochschulreife.pdf";
import SprachCertificate from "../../assets/EducationalCertificates/sprachCertificate.pdf";

import Abschluss1 from "../../assets/EducationalCertificates/abschluss1.png";
import FullStackWBS1 from "../../assets/EducationalCertificates/FullStackWBS1.png";
import Hochschulreife1 from "../../assets/EducationalCertificates/hochschulreife1.png";
import SprachCertificate1 from "../../assets/EducationalCertificates/sprachCertificate1.png";

// Example certificate data
const certificates = [
  {
    id: 1,
    title:
      "BSc(Hons)-Zeugnisbewertung für ausländische Hochschulqualifikationen",
    organization: "University of East London | Computing | September 2010",
    pdf: Abschluss,
    image: Abschluss1,
  },
  {
    id: 2,
    title: "Full Stack Web and App Development",
    organization: "WBS CODING SCHOOL | December 2024",
    pdf: FullStackWBS,
    image: FullStackWBS1,
  },
  {
    id: 3,
    title:
      "Fachgebundenen Hochschulreife für die bisherige Fachrichtung (Informatik) und benachbarte Fächer",
    organization: "Department of Government Examinations   ",
    pdf: Hochschulreife,
    image: Hochschulreife1,
  },
  {
    id: 4,
    title: "Zertifikat Deutsch-Test für Zuwanderer",
    organization: "telc LANGUAGE TESTS | August 2019",
    pdf: SprachCertificate,
    image: SprachCertificate1,
  },
];

const Achievements2 = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  return (
    <div className="p-6 sm:p-8 md:px-16 lg:px-24 xl:px-32 mt-[85px] dark:bg-darkBackground h-full ">
      <p className="text-3xl font-bold pt-12 pb-8 text-center text-headingPrimary dark:text-headingSecondary md:text-4xl lg:pb-12">
        Akademische Qualifikationen und Zertifizierungen
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
      <div className="p-4">
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-sm object-cover transition-transform duration-300 group-hover:scale-102"
        />

        <div>
          <h3 className="text-xl mt-6 font-semibold text-lightText dark:text-darkText transition-all duration-300 z-10">
            {title}
          </h3>
          <p className="text-sm text-textMuted dark:text-slate-300 mt-2 mb-4 transition-all duration-300 z-10">
            {organization}
          </p>
        </div>
      </div>
      <div className="p-4">
        <button
          onClick={onView}
          className="inline-flex items-center justify-center gap-2 text-sm font-medium mt-2 text-primary dark:text-neutralLight bg-neutralLight dark:bg-primary px-4 py-2 rounded-md shadow-sm hover:shadow-lg hover:ring-2 hover:ring-primary dark:hover:ring-neutralLight transition-all duration-300"
        >
          View Certificate
          <FiMaximize className="text-lg" />
        </button>
      </div>
    </motion.div>
  );
};

export default Achievements2;
