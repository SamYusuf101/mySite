import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import styles from "../styles/styles";

const Home = () => (
  <div
    className="bg-[#242424] w-full h-screen  overflow-x-hidden snap-y snap-mandatory 
  overflow-y-scroll z-0"
  >
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <section id="hero" className=" text-white snap-start">
      <div className={`bg-[#242424] ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
    </section>
    <section id="about" className=" text-white snap-center">
      <div className={`bg-[#242424] ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
        </div>
      </div>
    </section>
    <section id="skills" className=" text-white snap-center ">
      <div className={`bg-[#242424] ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Skills />
        </div>
      </div>
    </section>

    <section
      id="projects"
      className="relative mt-8 pt-100 py-80 md:pt-5  text-white snap-start "
    >
      <div className={`bg-[#242424] `}>
        <div className={`${styles.boxWidth}`}>
          <Projects />
        </div>
      </div>
    </section>
    <section id="contacts" className=" text-white snap-center ">
      <div className={`bg-[#242424] ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Contact />
        </div>
      </div>
    </section>
  </div>
);

export default Home;
