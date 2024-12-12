import React from "react";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";

const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center mt-[85px] bg-black bg-opacity-60 backdrop-blur-sm">
      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white dark:bg-darkBackground rounded-lg shadow-2xl max-w-3xl w-full overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition-colors duration-300 p-2 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md hover:shadow-lg"
          aria-label="Close"
        >
          <FiX size={20} />
        </button>

        <button
          className="absolute bottom-4 right-4 bg-red-600 text-white font-medium px-6 py-2 rounded-lg shadow-lg hover:bg-red-500 hover:shadow-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
          aria-label="Close"
          onClick={onClose}
        >
          Close
        </button>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">{children}</div>
      </motion.div>
    </div>
  );
};

export default Modal;
