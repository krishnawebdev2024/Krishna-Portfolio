import React from "react";

const Button = ({ label, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="
        relative
        group
        px-6
        py-3
        font-medium
        text-lightText dark:text-darkText
        bg-gradient-to-r
        from-lightBackground to-backgroundAlt
        dark:from-darkBackground dark:to-darkBackgroundAlt
        rounded-lg
        shadow-md
        overflow-hidden
        transition-all
        duration-300
        ease-in-out
        focus:outline-none
        focus:ring-4
        focus:ring-primary/50
        active:scale-95
      "
    >
      <span
        className="
          absolute
          inset-0
          w-full
          h-full
          bg-gradient-to-r
          from-primary to-secondary
          opacity-0
          transition-opacity
          duration-300
          ease-in-out
          group-hover:opacity-20
        "
      ></span>
      <span
        className="
          absolute
          -inset-1
          bg-transparent
          rounded-lg
          ring-2
          ring-transparent
          group-focus:ring-primary/50
          transition-all
          duration-300
        "
      ></span>
      <span className="relative z-10">{label}</span>
    </button>
  );
};

export default Button;
