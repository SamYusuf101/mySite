import React, { useState } from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

type Props = {};

function Navbar({}: Props) {
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#242424");
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header
      style={{ backgroundColor: `${navBg}` }}
      className="fixed w-full h-20 shadow-xl space-y-4"
    >
      <div className="w-full top-0 mx-auto flex p-5 items-center navbar max-w-6xl justify-between ">
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
          className="flex flex-row items-center"
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
          className="flex flex-row items-center cursor-pointer"
        >
          <ul className="hidden md:flex text-white">
            <Link href="/#hero">
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-[#F7AB0A]">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-[#F7AB0A]">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-[#F7AB0A]">
                Skils
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-[#F7AB0A] ">
                Projects
              </li>
            </Link>
            <Link href="/#contacts">
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-[#F7AB0A]">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden  text-white ">
            <AiOutlineMenu size={25} />
          </div>
        </motion.div>
      </div>
      <div className="md:hidden text-white">
        <div
          className={
            nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#242424] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500 sidebar"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between ">
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
            </div>
            <div className="py-4 flex flex-col cursor-pointer ">
              <ul className="uppercase">
                <Link href="/">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    About
                  </li>
                </Link>
                <Link href="/#skills">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Skills
                  </li>
                </Link>
                <Link href="/#projects">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Projects
                  </li>
                </Link>
                <Link href="/#contacts">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
