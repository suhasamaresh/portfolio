import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking widest text-gray-600">
            {" "}
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]"> Suhas</span>
          </h1>
          <h1 className="py-2 text-gray-700">
            A Tech enthusiast
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm currently an undergraduate student pursuing degree in computer science. 
            I'm interested in devops. My tech stack include java, golang, javascript, python, numpy, pandas. 
            And i've learnt some development tools like Docker, Kubernetes, Jenkins. currently learning AWS cloud services.
            I'm proficient in video editing , i use davinci resolve for my edits.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
               <FaLinkedin/>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
               <FaGithub/>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
               <FaTwitter/>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
               <AiOutlineMail/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
