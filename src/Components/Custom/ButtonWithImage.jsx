import React, { useState } from "react";

function ButtonWithImage({ icon, activeIcon, label, imageStyle = "" }) {
  const [buttonIcon, setButtonIconn] = useState(icon);
  return (
    <div
      className="border-2 border-[#37BCF8] text-[#37BCF8] py-3 px-5 rounded-md flex items-center justify-center gap-2 hover:bg-[#37BCF8] hover:text-black hover:font-semibold"
      onMouseEnter={() => {
        setButtonIconn(activeIcon);
      }}
      onMouseLeave={() => {
        setButtonIconn(icon);
      }}
    >
      <img src={buttonIcon} className={imageStyle} />
      <div>{label}</div>
    </div>
  );
}

export default ButtonWithImage;
