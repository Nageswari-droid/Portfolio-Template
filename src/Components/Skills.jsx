import React from "react";
import { mySkills } from "../data/title";
import Icon from "./Custom/Icon";
import { skills } from "../data/skill";

function Skills() {
  return (
    <div className="xl:w-1/3 min-[850px]:w-5/12 py-4">
      <div className="font-bold text-xl text-[#37BCF8] pb-6 text-center">{mySkills}</div>
      <div className="flex flex-wrap w-full justify-center gap-2 items-center">
        {skills.map((element) => {
          return <Icon key={element.name} icon={element.icon} />;
        })}
      </div>
    </div>
  );
}

export default Skills;
