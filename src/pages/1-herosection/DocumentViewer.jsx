import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMaximize } from "react-icons/fi";
import Modal from "./Modal"; // Importing the modal component for the PDF view

// Importing PDFs
import ResumeEnglish from "../../assets/resume/ResumeEnglish.pdf";
import ResumeDeutsch from "../../assets/resume/ResumeDeutsch.pdf";
import Zwischenzeugnis from "../../assets/resume/Zwischenzeugnis.pdf";

const DocumentViewer = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  return (
    <div className="p-6 sm:p-8 md:px-16 lg:px-24 xl:px-32  dark:bg-darkBackground h-full">
      <div className="grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* Resume Card */}
        <DocumentCard
          title="Lebenslauf-Englisch"
          description="My professional resume."
          pdf={ResumeEnglish}
          onView={() => setSelectedPdf(ResumeEnglish)}
        />
        <DocumentCard
          title="Lebenslauf-Deutsch"
          description="My professional resume."
          pdf={ResumeDeutsch}
          onView={() => setSelectedPdf(ResumeDeutsch)}
        />

        {/* Zwischenzeugnis Card */}
        <DocumentCard
          title="Zwischenzeugnis"
          description="My Zwischenzeugnis document."
          pdf={Zwischenzeugnis}
          onView={() => setSelectedPdf(Zwischenzeugnis)}
        />

        {/* Contact Me Button */}
        <div className="relative group rounded-lg overflow-hidden shadow-sm bg-lightBackground dark:bg-cardDarkBackground transition-all duration-200 flex flex-col justify-between">
          <div className="p-4">
            <h3 className="text-xl font-semibold text-lightText dark:text-darkText transition-all duration-300 z-10">
              Lassen Sie uns in Kontakt treten!
            </h3>
          </div>
          <div className="p-4">
            <button
              onClick={() =>
                (window.location.href = "mailto:krisch.webdev@gmail.com")
              }
              className="inline-flex items-center justify-center gap-2 text-sm font-medium mt-2 text-primary dark:text-neutralLight bg-neutralLight dark:bg-primary px-4 py-2 rounded-md shadow-sm hover:shadow-lg hover:ring-2 hover:ring-primary dark:hover:ring-neutralLight transition-all duration-300"
            >
              Kontaktieren Sie mich
            </button>
          </div>
        </div>
      </div>

      {/* Modal for viewing the selected PDF */}
      {selectedPdf && (
        <Modal onClose={() => setSelectedPdf(null)}>
          <iframe
            src={selectedPdf}
            title="Document Viewer"
            className="w-full h-[80vh] border-none"
          />
        </Modal>
      )}
    </div>
  );
};

// DocumentCard Component to display individual document cards
const DocumentCard = ({ title, description, pdf, onView }) => {
  return (
    <motion.div
      className="relative group rounded-lg overflow-hidden shadow-sm bg-lightBackground dark:bg-cardDarkBackground transition-all duration-200 flex flex-col justify-between"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <div className="p-4">
          <h3 className="text-xl  font-semibold text-lightText dark:text-darkText transition-all duration-300 z-10">
            {title}
          </h3>
        </div>
      </div>
      <div className="p-4">
        <button
          onClick={onView}
          className="inline-flex items-center justify-center gap-2 text-sm font-medium mt-2 text-primary dark:text-neutralLight bg-neutralLight dark:bg-primary px-4 py-2 rounded-md shadow-sm hover:shadow-lg hover:ring-2 hover:ring-primary dark:hover:ring-neutralLight transition-all duration-300"
        >
          Dokument anzeigen
          <FiMaximize className="text-lg" />
        </button>
      </div>
    </motion.div>
  );
};

export default DocumentViewer;
