import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useRouter } from "next/router";
import { motion } from "framer-motion";


const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#242424");
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between pt-8 max-w-7xl  px-2 2xl:px-16">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 1.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center pl-5"
        >
          <SocialIcon
            url="https://twitter.com/jaketrent"
            fgColor="white"
            bgColor="transparent"
          />

          <SocialIcon
            url="https://facebook.com/jaketrent"
            fgColor="white"
            bgColor="transparent"
          />
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="white"
            bgColor="transparent"
          />
        </motion.div>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 1.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          <ul className="hidden md:flex text-white pt-2 items-center no-underline cursor-pointer">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:  hover:text-yellow-400">
                Home
              </li>
            </Link>
            <Link href="/About">
              <li className="ml-10 text-sm uppercase hover: hover:text-yellow-400 ">
                About
              </li>
            </Link>
            <Link href="/Skills">
              <li className="ml-10 text-sm uppercase hover: hover:text-yellow-400">
                Skills
              </li>
            </Link>
            <Link href="/Projects">
              <li className="ml-10 text-sm uppercase hover: hover:text-yellow-400 ">
                Projects
              </li>
            </Link>
            <Link href="/Contact">
              <li className="ml-10 text-sm uppercase hover: hover:text-yellow-400">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden  text-white">
            <AiOutlineMenu size={25} />
          </div>
        </motion.div>
      </div>
      <div className="md:hidden">
        <div
          className={
            nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#242424] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 h-screen ease-in duration-500 sidebar"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between ">
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer text-white"
                >
                  <AiOutlineClose />
                </div>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase text-white">
                <Link href="/">
                  <li onClick={() => setNav(false)} className="py-4 text-sm ">
                    Home
                  </li>
                </Link>
                <Link href="/About">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    About
                  </li>
                </Link>
                <Link href="/Skills">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Skills
                  </li>
                </Link>
                <Link href="/Projects">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Projects
                  </li>
                </Link>
                <Link href="/Contact">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
