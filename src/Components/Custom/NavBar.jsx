import React, { useState } from "react";
import { navBar } from "../../data/title";
import { name } from "../../data/about";
import menu from "../../assets/menu.png";
import close from "../../assets/close.png";
import "../../style/navBar.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("");

  const onClickHandler = (element) => {
    setActiveNav(element.name);
  };

  return (
    <>
      <nav className="items-center justify-between flex-wrap p-6 py-6 z-10 fixed top-0 w-full bg-[#09132e] shadow-lg">
        <div className="md:w-10/12 w-11/12 mx-auto flex flex-shrink-0 flex-wrap justify-between items-center">
          <div>
            <a
              href="#home"
              onClick={() => {
                setActiveNav("");
              }}
            >
              <div className="text-[#37BCF8] font-semibold text-lg">
                <span className="name-title">{"< "}</span> {name}
                <span className="name-title">{" />"}</span>
              </div>
            </a>
          </div>
          <div className="block md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
            >
              <img
                src={menu}
                className={`h-7 w-7 object-contain ${
                  isOpen ? "hidden" : "block"
                }`}
              />
              <img
                src={close}
                className={`h-4 w-4 object-contain ${
                  isOpen ? "block" : "hidden"
                }`}
              />
            </button>
          </div>
          <div
            className={`w-full block md:flex md:items-center md:w-auto ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="text-sm md:flex md:flex-grow gap-5">
              {navBar.map((element) => {
                return (
                  <div key={element.name}>
                    <a
                      href={element.linkTo}
                      className={`${
                        activeNav === element.name
                          ? "text-[#37BCF8] font-bold"
                          : "text-white font-semibold"
                      } hover:text-[#37BCF8] block mt-4 md:inline-block md:mt-0 text-white-200`}
                      onClick={() => {
                        onClickHandler(element);
                      }}
                    >
                      {element.name}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
