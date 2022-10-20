import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => (
  <div
    className="bg-[#242424] w-full h-screen  overflow-x-hidden snap-y snap-mandatory 
  overflow-y-scroll z-0"
  >
    <div className="first-letter:">
      <div className="">
        <Navbar />
      </div>
    </div>
    <section id="hero" className=" text-white snap-start">
      <div className="">
        <div className="">
          <Hero />
        </div>
      </div>
    </section>
    <section id="about" className=" text-white snap-center">
      <div className="first-letter:">
        <div className="">
          <About />
        </div>
      </div>
    </section>
    <section id="skills" className=" text-white snap-center ">
      <div className="">
        <div className="">
          <Skills />
        </div>
      </div>
    </section>

    <section
      id="projects"
      className="relative mt-8 pt-100 py-80 md:pt-5  text-white snap-start "
    >
      <div className={`bg-[#242424] `}>
        <div className="">
          <Projects />
        </div>
      </div>
    </section>
    <section id="contacts" className=" text-white snap-center ">
      <div className="">
        <div className="">
          <Contact />
        </div>
      </div>
    </section>
  </div>
);

export default Home;
