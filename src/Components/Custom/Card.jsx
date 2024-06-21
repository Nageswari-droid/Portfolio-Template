import React from "react";
import { viewCode } from "../../data/title";
import github from "../../assets/github.png";
import githubActive from "../../assets/github_active.png";
import ButtonWithImage from "../Custom/ButtonWithImage";

function Card({ name, img, description, link }) {
  return (
    <div className="w-full shadow-lg bg-[#1f2945] p-4 rounded-lg flex flex-col items-center h-[500px]">
      <div className="h-110 overflow-hidden flex flex-col items-center justify-start">
        <img src={img} className="h-1/3 w-full object-contain rounded-t-lg pb-4" />
        <div className="text-lg font-semibold pb-2 text-[#37BCF8]">{name}</div>
        <div className="w-11/12 h-1/2 overflow-y-auto leading-loose text-sm mx-auto pb-2">
          {description}
        </div>
        <div className="w-1/2 xl:w-1/2 lg:w-3/4 sm:w-1/2 max-[500px]:w-10/12 py-4">
          <a href={link} target="_blank" rel="noreferrer">
            <ButtonWithImage
              icon={github}
              activeIcon={githubActive}
              label={viewCode}
              imageStyle="w-1/6"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
