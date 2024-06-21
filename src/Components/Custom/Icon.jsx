import React from "react";

function Icon({ icon }) {
  return (
    <div className="lg:w-1/6 min-[850px]:w-1/5 w-16 select-none rounded-lg p-2">
      <div className="mx-auto">
        <img src={icon} className="rounded-lg"/>
      </div>
    </div>
  );
}

export default Icon;
