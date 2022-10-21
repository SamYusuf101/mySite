import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { AiOutlineArrowUp } from "react-icons/ai";
import Link from "next/link";

type Props = {};

function Contact({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 3.5 }}
      className="h-screen text-center relative  flex flex-col justify-evenly max-w-7xl mx-auto
      items-center px-10 md:text-left md:flex-row"
    >
      <h3
        className="absolute top-28 p-2 uppercase tracking-[20px] text-white text-2xl 
      h-screen"
      >
        Contact
      </h3>
      <div className="flex flex-col space-y-10 pt-10">
        <h4 className="text-3xl text-gray-400 font-semibold text-center">
          I have got just what you need. Contact me through any of the options
          below
        </h4>
        <div className=" flex flex-row items-center justify-center animate-pulse">
          <SocialIcon
            url="https://github.com"
            fgColor="white"
            bgColor="transparent"
          />

          <SocialIcon
            url="https://email.com"
            fgColor="white"
            bgColor="transparent"
            className="md:w-50 md:h-20 "
          />
          <SocialIcon
            url="https://twitter.com"
            fgColor="white"
            bgColor="transparent"
          />
        </div>
        {/*<div className="flex justify-center py-12">
          <Link href="#hero">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineArrowUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
  </div>*/}
      </div>
    </motion.div>
  );
}

export default Contact;
