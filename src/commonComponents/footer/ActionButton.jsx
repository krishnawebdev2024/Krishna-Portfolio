import React from "react";

const ActionButton = ({ href, label }) => {
  return (
    <div>
      <button
        onClick={() => window.open(href, "_blank", "noopener,noreferrer")}
        className="p-4 rounded-full border-[1px] border-white relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
        <span className="relative z-10 font-medium text-white group-hover:text-white">
          {label}
        </span>
      </button>
    </div>
  );
};

export default ActionButton;
