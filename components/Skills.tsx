import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import htmlImg from "../assets/html.png";
import cssImg from "../assets/css.png";
import github1Img from "../assets/github1.png";
import reactImg from "../assets/react.png";
import tailwindImg from "../assets/tailwind.png";
import javascriptImg from "../assets/javascript.png";
import chatfuelImg from "../assets/chatfuel.png";
import amplifyImg from "../assets/amplify.png";
import sanityImg from "../assets/sanity.png";
import nextImg from "../assets/next.jpg";
import visualImg from "../assets/visual.png";

type Props = {};

function Skills({}: Props) {
  return (
    <div
      className="h-screen relative flex flex-col text-center md:text-left xl:flex-row
    max-w-[2000px] xl:px-10 min-h-screen justify-center
    xl:space-y-0 mx-auto items-center"
    >
      <motion.h3
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="absolute top-28 pb-4 uppercase tracking-[20px] text-white text-2xl"
      >
        Skills
      </motion.h3>

      <motion.h3
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="absolute top-36 uppercase tex:sm space-y-2 p-5 tracking-[3px] text-gray-500 pb-4"
      >
        Current skills proficiency
      </motion.h3>
      <div className=" absolute top-52 md:top-52 grid grid-cols-2 p-2 lg:grid-cols-4 gap-8">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        >
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={htmlImg} alt="/" width="65px" height="65px" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>HTML</h3>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        >
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={nextImg} alt="/" width="65px" height="65px" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>NEXT-JS</h3>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        >
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={javascriptImg} alt="/" width="65px" height="65px" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>JAVASCRIPT</h3>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        >
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={sanityImg} alt="/" width="65px" height="65px" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>SANITY</h3>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        >
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={tailwindImg} alt="/" width="65px" height="65px" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>TAILWIND</h3>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        >
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={github1Img} alt="/" width="65px" height="65px" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>GITHUB</h3>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        >
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={reactImg} alt="/" width="65px" height="65px" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>REACT</h3>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        >
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={cssImg} alt="/" width="65px" height="65px" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>CSS</h3>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        >
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={visualImg} alt="/" width="65px" height="65px" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>VISUAL STUDIO</h3>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        >
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={chatfuelImg} alt="/" width="65px" height="65px" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>CHATFUEL</h3>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        >
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={amplifyImg} alt="/" width="65px" height="65px" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>AMPLIFY</h3>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
