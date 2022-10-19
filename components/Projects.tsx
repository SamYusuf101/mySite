import React from "react";
import Image from "next/image";
import hoobankImg from "../assets/hoobank.png";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
      className="  relative flex   flex-col justify-evenly max-w-7xl mx-auto
    items-center px-10 text-left md:flex-row overflow-hidden"
    >
      <h3
        className="absolute top-24 p-2 uppercase tracking-[20px] text-white text-2xl 
      "
      >
        Projects
      </h3>
      <div className="pt-40 sm:pt-40 md:pt-40 grid md:grid-cols-2 gap-8">
        <div
          className="relative flex flex-col items-center justify-center h-auto w-full 
    shadow-gray-400 rounde-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]"
        >
          <Image
            className="rounded-xl group-hover:opacity-10"
            src={hoobankImg}
            alt="/"
          />
          <h3>pppp</h3>

          <div
            className="hidden group-hover:block absolute top-[50%] left-[50%] 
          translate-x-[-50%] translate-y-[-50%]"
          >
            <h3 className="text-2xl text-white tracking-wider text-center ">
              Track crypto price in real time, add crypto to watchlist, and lets
              you track your crypto assets in your portfolio
            </h3>
            <p className="pb-4 pt-2 text-white text-center">React Native</p>
          </div>
        </div>
        <div
          className="relative flex flex-col items-center justify-center h-auto w-full 
    shadow-gray-400 rounde-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]"
        >
          <Image
            className="rounded-xl group-hover:opacity-10"
            src={hoobankImg}
            alt="/"
          />
          <h3>pppp</h3>

          <div
            className="hidden group-hover:block absolute top-[50%] left-[50%] 
          translate-x-[-50%] translate-y-[-50%]"
          >
            <p className=" text-sm md:text-2xl text-white tracking-wider text-center ">
              Track crypto price in real time, add crypto to watchlist, and lets
              you track your crypto assets in your portfolio
            </p>
            <p className="pb-4 pt-2 text-white text-center">React Native</p>
          </div>
        </div>
        <div
          className="relative flex items-center justify-center h-auto w-full 
    shadow-gray-400 rounde-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]"
        >
          <Image
            className="rounded-xl group-hover:opacity-10"
            src={hoobankImg}
            alt="/"
          />

          <div
            className="hidden group-hover:block absolute top-[50%] left-[50%] 
          translate-x-[-50%] translate-y-[-50%]"
          >
            <h3 className="text-2xl text-white tracking-wider text-center ">
              Track crypto price in real time, add crypto to watchlist, and lets
              you track your crypto assets in your portfolio
            </h3>
            <p className="pb-4 pt-2 text-white text-center">React Native</p>
          </div>
        </div>
        <div
          className="relative flex items-center justify-center h-auto w-full 
    shadow-gray-400 rounde-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]"
        >
          <Image
            className="rounded-xl group-hover:opacity-10"
            src={hoobankImg}
            alt="/"
          />

          <div
            className="hidden group-hover:block absolute top-[50%] left-[50%] 
          translate-x-[-50%] translate-y-[-50%]"
          >
            <h3 className="text-2xl text-white tracking-wider text-center ">
              Track crypto price in real time, add crypto to watchlist, and lets
              you track your crypto assets in your portfolio
            </h3>
            <p className="pb-4 pt-2 text-white text-center">React Native</p>
          </div>
        </div>
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[350px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
