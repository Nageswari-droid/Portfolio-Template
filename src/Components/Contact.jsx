import React from "react";
import { contact } from "../data/title";
import { contacts } from "../data/contact";
import IconWithText from "./Custom/IconWithText";

function Contact() {
  return (
    <div className="md:w-10/12 w-11/12 mx-auto text-white py-14 pb-24" id="contact">
      <div className="font-bold text-xl text-[#37bbf8] pb-6">{contact}</div>
      <div className="sm:w-3/4 w-10/12 mx-auto shadow-lg rounded-lg">
        <div className="bg-[#1f2945] rounded-lg py-6 px-4 flex flex-wrap items-center sm:justify-center gap-6">
          {contacts.map((element) => {
            return (
              <IconWithText
                key={element.label}
                icon={element.icon}
                label={element.label}
                link={element.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Contact;
