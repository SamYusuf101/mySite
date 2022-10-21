import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
      className="h-screen text-center relative flex flex-col justify-evenly max-w-7xl mx-auto
    items-center px-10 md:text-left md:flex-row"
    >
      <h3 className="absolute top-28 uppercase tracking-[20px] text-white text-2xl  ">
        About
      </h3>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[350px] -skew-y-12" />

      <p className="absolute top-40  p-5 pb-20 px-0 md:px-10 text-lg text-white ">
        I'm a front-end web and mobile developer specializing in building (and
        occasionally designing) exceptional digital experiences. I have a B.Sc
        in Computer Science and 2years experience in javascript. I have
        developed Websites and Chatbots for various businesses. Currently am
        focused on building responsive front-end web/mobile applications while
        learning back-end technologies.
      </p>
    </motion.div>
  );
}

export default About;
