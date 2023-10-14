import React from "react";
import { BsCode } from "react-icons/bs";
import { languages } from "../assets/languages";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3, BiLogoJava, BiLogoTailwindCss } from "react-icons/bi";
import { SiReact, SiTailwindcss } from "react-icons/si";
const Languages = () => {
  return (
    <div className="my-12">
      {/*title*/}
      <div className="flex justify-center text-text gap-2 mb-8">
        <BsCode size={45} />
        <h1 className="text-4xl">Languages</h1>
      </div>

      <div className="grid grid-cols-5">
        {languages.map((language) => {
          return (
            <div
              key={language.id}
              className="flex justify-center flex-col items-center text-accent cursor-pointer hover:text-text"
            >
              {language.title === "HTML" ? (
                <AiFillHtml5 size={45} />
              ) : language.title === "CSS" ? (
                <BiLogoCss3 size={45} />
              ) : language.title === "Java" ? (
                <BiLogoJava size={45} />
              ) : language.title === "React" ? (
                <SiReact size={45} />
              ) : language.title === "Tailwind CSS" ? (
                <BiLogoTailwindCss size={45} />
              ) : null}
              <h1 className="text-xl text-te p-2">{language.title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Languages;
