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
      className="  h-screen max-w-[2000px] relative flex  w-full overflow-y-scroll  
      bg-[#242424] flex-col justify-evenly  mx-auto
    items-center px-10 text-left overflow-x-hidden md:flex-row  
    !scrollbar-thin !scrollbar-track-transparent !scrollbar-thumb-red-600 "
    >
      <h3 className="absolute top-28 pb-4 uppercase tracking-[20px] text-white text-2xl ">
        Projects
      </h3>

      <div className="relative mt-80 pt-40 top-20 lg:mt-60 lg:pt-80  md:pt-60 md:mt-60  grid md:grid-cols-2 gap-8">
        <div
          className="relative flex flex-col items-center justify-center h-auto w-full pt-25
     rounde-xl p-4 "
        >
          <Image
            className="rounded-xl group-hover:opacity-10"
            src={hoobankImg}
            alt="/"
          />
          <h3>pppp</h3>
        </div>
        <div
          className="relative flex flex-col items-center justify-center h-auto w-full pt-15
     rounde-xl p-4 "
        >
          <Image
            className="rounded-xl group-hover:opacity-10"
            src={hoobankImg}
            alt="/"
          />
          <h3>pppp</h3>
        </div>
        <div
          className="relative flex flex-col items-center justify-center h-auto w-full pt-15
     rounde-xl p-4 "
        >
          <Image
            className="rounded-xl group-hover:opacity-10"
            src={hoobankImg}
            alt="/"
          />
          <h3>pppp</h3>
        </div>
        <div
          className="relative flex flex-col items-center justify-center cursor-pointer h-auto w-full 
     rounde-xl p-4 pt-15 hover:scale-105 transition transformation duration-200"
        >
          <Image
            className="rounded-xl group-hover:opacity-10"
            src={hoobankImg}
            alt="/"
          />
          <h3>pppp</h3>
        </div>
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[350px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
