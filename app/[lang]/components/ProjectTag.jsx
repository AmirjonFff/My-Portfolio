import { CodeBracketIcon } from "@heroicons/react/24/outline";
import React from "react";


const ProjectTag = ({ name, onClick, isSelected, tag, icon: Icon }) => {
  const buttonStyles = isSelected
    ? "text-[#87CEEB] !border-[#87CEEB]"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} border-b-2 flex gap-1 border-transparent  px-2 md:px-4 lg:px-6 py-1 text-sm md:text-base xl:text-lg cursor-pointer relative z-30 -mb-[1px]`}
      onClick={() => onClick(tag)}
    >
      <Icon width={20} />
      {name}
    </button>
  );
};

export default ProjectTag;
