import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircle({}: Props) {
  return (
    <div className="flex justify-center mb-12 items-center relative">
      <div className="border absolute border-white rounded-full h-[150px] w-[150px] mt-52 animate-ping" />
      <div className="border absolute border-white opacity-25 rounded-full h-[250px] w-[250px] mt-52 " />
      <div className="border absolute border-red-500 opacity-20 rounded-full h-[450px] w-[450px] mt-52 animate-pulse" />

      <div />
    </div>
  );
}

export default BackgroundCircle;
