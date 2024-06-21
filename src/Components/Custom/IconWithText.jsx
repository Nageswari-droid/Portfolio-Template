import React from "react";

function IconWithText({ icon, label, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="flex flex-wrap items-center gap-2">
        <img src={icon} className="h-7 object-contain rounded-lg" />
        <div className="text-sm border-b-2 border-dotted border-[#37bbf8] hover:text-[#37bbf8] hover:border-0 font-semibold">{label}</div>
      </div>
    </a>
  );
}

export default IconWithText;
