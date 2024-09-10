import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

interface ITabButton {
  active: boolean;
  selectTab: () => void;
  children: string;
}

const TabButton = ({ active, selectTab, children }: ITabButton) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`font-semibold hover:text-white text-lg ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-[#00FFFF] mt-2 w-full mx-auto"
      ></motion.div>
    </button>
  );
};

export default TabButton;
