import React from "react";
import { about } from "../data/about";
import { aboutMe } from "../data/title";

function About() {
  return (
    <div className="min-[850px]:w-1/2 py-4">
      <div className="font-bold text-xl text-[#37BCF8] pb-6 text-center">{aboutMe}</div>
      <div className="sm:leading-loose sm:text-base leading-relaxed text-sm text-center">{about}</div>
    </div>
  );
}

export default About;
