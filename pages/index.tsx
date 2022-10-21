import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Contact from "./Contact";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => (
  <div
    className="bg-[#242424] w-full h-screen overflow-x-hidden snap-y snap-mandatory 
 z-0 !scrollbar-thin !scrollbar-track-transparent !scrollbar-thumb-red-600"
  >
    <div className="">
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
    <section id="about" className=" text-white snap-start">
      <div className="">
        <div className="">
          <About />
        </div>
      </div>
    </section>
    <footer className="">
      <div className="flex items-center text-white justify-center">
        <h3>copyright © 2022 &nbsp; Sam Yusuf</h3>
      </div>
    </footer>
  </div>
);

export default Home;
