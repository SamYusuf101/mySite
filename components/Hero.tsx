import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Sam", "A Frontend developer"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section>
      <div
        className="h-screen flex flex-col items-center  justify-center text-center 
      overflow-hidden xl:px-0 sm:px-16 px-6 text-white"
      >
        <BackgroundCircle />

        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
          
          <Cursor cursorColor="yellow" />
        </h1>
        <h1 className="tracking-[5px] text-sm p-5">Software Developer</h1>
      </div>
    </section>
  );
}

export default Hero;
