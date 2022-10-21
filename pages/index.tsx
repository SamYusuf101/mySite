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
    className="bg-[#242424] w-full h-screen  overflow-x-hidden 
  overflow-y-scroll z-0 !scrollbar-thin !scrollbar-track-transparent !scrollbar-thumb-red-600"
  >
    <div className="">
      <div className="">
        <Navbar />
      </div>
    </div>
    <section id="hero" className=" text-white">
      <div className="">
        <div className="">
          <Hero />
        </div>
      </div>
    </section>
    <section id="about" className=" text-white">
      <div className="">
        <div className="">
          <About />
        </div>
      </div>
    </section>
  </div>
);

export default Home;
