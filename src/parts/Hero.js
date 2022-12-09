import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="container mx-auto">
      <div className="flex mt-32 pt-12 pb-16 lg:pb-20 -mx-8 sm:px-8 px-8 lg:flex-row flex-col">
        <div className="lg:flex-grow lg:w-1/2 flex flex-col lg:items-start lg:text-left mb-3 md:mb-12 lg:mb-0 items-center">
          <h1 className=" title-font sm:text-[32px] lg:text-[32px] text-4xl mb-8 font-bold sm:leading-tight">
            Nikmati kemudahan membeli <br /> ataupun mengisi ulang kembali galon
            di rumah
          </h1>

          <p className="">
            Isi air ga pakai ribet, <br />
            cukup order secara online dan galon akan segera diantar ke rumah dan
            dapat dipasangkan oleh pengantar.
          </p>

          <div className="inline-block items-center mt-5 lg:mx-0 lg:flex justify-center lg:space-x-8 md:space-x-2 sm:space-x-3 space-x-0">
            <Link
              className="bg-[#393E46] no-underline inline-flex font-semibold text-white text-base py-3 px-4 rounded-md mb-4 lg:mb-0 md:mb-0 focus:outline-none hover:shadow-lg hover:text-[#00ADB5]"
              to={"/sign-in"}
            >
              Log In
            </Link>
            <Link
              className="text-[#00ADB5] inline-flex font-semibold text-base py-3 px-4 rounded-md mb-4 lg:mb-0 md:mb-0"
              to={"/sign-up"}
            >
              Sign Up
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center justify-center flex  max-md:hidden">
          <img id="hero" src="/hisyamduduk.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
