import "../index.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-[#242424] overflow-y:hidden ">
      <Navbar />
      <Component {...pageProps} />
      <footer className="">
        <div className="flex items-center pt-40 text-white justify-center">
          <h3>copyright © 2022 &nbsp; Sam Yusuf</h3>
        </div>
      </footer>
    </div>
  );
}

export default MyApp;
