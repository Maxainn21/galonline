import React from "react";

// import { ReactComponent as DiscountLogo } from "/LikeLogo.svg";

export default function Info() {
  return (
    <div className="content-2-2">
      <div className="container lg:px-32 md:px-8 sm:px-12 px-5 pt-20 pb-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="text-4xl font-semibold title-font mb-2.5 text-medium-black">
            Mengapa harus menggunakan layanan kami?
          </h1>
        </div>

        <div className="flex lg:flex-row flex-col -m-4">
          <div className="px-14 md:px-0 lg:px-4 lg:w-1/3 md:w-1/3 sm:w-4/6 mx-auto">
            <div className="flex rounded-lg h-full lg:pt-8 lg:pb-8 md:pt-8 md:pb-8 pt-4 pb-12 flex-col">
              <div className="items-center text-center">
                <div className="inline-flex items-center justify-center rounded-full mb-6">
                  <img src="/DiscountLogo.svg" alt="" />
                </div>
              </div>
              <div className="flex-grow">
                <h4 className="font-medium text-center text-2xl mb-2.5 text-medium-black">
                  Harga Terjangkau
                </h4>
                <p className="leading-relaxed text-base text-center tracking-wide text-gray mt-[20px] ">
                  Kami selalu memberikan harga terbaik untuk semua layanan yang
                  dapat dijangkau oleh semua kalangan pelanggan
                </p>
              </div>
            </div>
          </div>

          <div className="px-14 md:px-0 lg:px-4 lg:w-1/3 md:w-1/3 sm:w-4/6 mx-auto">
            <div className="flex rounded-lg h-full lg:pt-8 lg:pb-8 md:pt-8 md:pb-8 pt-12 pb-12 flex-col">
              <div className="items-center text-center">
                <div className="inline-flex items-center justify-center rounded-full mb-6">
                  <img src="/LikeLogo.svg" alt="" />
                </div>
              </div>
              <div className="flex-grow">
                <h4 className="font-medium text-center text-2xl mb-2.5 text-medium-black">
                  Kualitas Terjamin
                </h4>
                <p className="leading-relaxed text-base text-center tracking-wide text-gray">
                  Kami berkomitmen untuk memprioritaskan kepuasan setiap
                  pelanggan baik dari segi kualitas maupun dari segi kuantitas
                </p>
              </div>
            </div>
          </div>

          <div className="px-14 md:px-0 lg:px-4 lg:w-1/3 md:w-1/3 sm:w-4/6 mx-auto">
            <div className="flex rounded-lg h-full lg:pt-8 lg:pb-8 md:pt-8 md:pb-8 pt-12 pb-6 flex-col">
              <div className="items-center text-center">
                <div className="inline-flex items-center justify-center rounded-full mb-6">
                  <img src="/VerifyLogo.svg" alt="" />
                </div>
              </div>
              <div className="flex-grow">
                <h4 className="font-medium text-center text-2xl mb-2.5 text-medium-black">
                  Garansi Pengiriman
                </h4>
                <p className="leading-relaxed text-base text-center tracking-wide text-gray">
                  Kami memberikan garansi pengiriman yang kami lakukan. Karena
                  kami selalu berusaha yang terbaik kepada seluruh pelanggan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
