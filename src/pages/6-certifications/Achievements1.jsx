import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMaximize } from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa"; // Font Awesome PDF icon

import Modal from "./Modal"; // Importing the modal component for the PDF view

import Fullstack from "../../assets/certificates/fullstack.pdf";
import Deployment from "../../assets/certificates/deployment.pdf";
import AI from "../../assets/certificates/AI.pdf";
import Git from "../../assets/certificates/Git.pdf";
import SQL from "../../assets/certificates/SQL.pdf";

import FullStack2 from "../../assets/certificates/certificatePng/FullStack.png";
import Deployment2 from "../../assets/certificates/certificatePng/Deployment.png";
import AI2 from "../../assets/certificates/certificatePng/AI.png";
import Git2 from "../../assets/certificates/certificatePng/Git.png";
import SQL2 from "../../assets/certificates/certificatePng/PostgreSQL.png";

// Example certificate data
const certificates = [
  {
    id: 1,
    title: "Full-Stack Engineer Career Path",
    organization: "Codecademy | October 2024",
    pdf: Fullstack,
    image: FullStack2,
  },
  {
    id: 2,
    title: "OpenAI API Coding with JavaScript ",
    organization: "Codecademy | August 2024",
    pdf: AI,
    image: AI2,
  },
  {
    id: 3,
    title: "Deploying with Render",
    organization: "Codecademy | September 2024",
    pdf: Deployment,
    image: Deployment2,
  },
  {
    id: 4,
    title: "Git & GitHub Certification",
    organization: "Codecademy | October 2024",
    pdf: Git,
    image: Git2,
  },
  {
    id: 5,
    title: "Design Databases With PostgreSQL Skill Path",
    organization: "Codecademy | October 2024",
    pdf: SQL,
    image: SQL2,
  },
];

const Achievements1 = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  return (
    <div className="p-6 sm:p-8 md:px-16 lg:px-24 xl:px-32  dark:bg-darkBackground h-full ">
      <p className="text-3xl font-bold pt-12 pb-8 text-center text-headingPrimary dark:text-headingSecondary md:text-4xl lg:pb-12">
        Berufliche Weiterbildungszertifikate von Codecademy
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
          <h3 className="text-xl font-semibold text-lightText dark:text-darkText transition-all duration-300 z-10">
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

export default Achievements1;
