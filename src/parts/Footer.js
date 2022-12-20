import React from "react";
import { ReactComponent as FacebookCircled } from "../assets/FacebookCircled.svg";
import { ReactComponent as InstagramCircle } from "../assets/InstagramCircle.svg";
import { ReactComponent as TwitterCircled } from "../assets/TwitterCircled.svg";

export default function Footer() {
  return (
    <footer className="container-fluid py-4 mx-auto px-4 mt-28 footer-2-1 bg-[#EEEEEE] max-md:w-full">
      <div className="lg:pb-24 pb-16 mx-auto">
        <div className="grid lg:grid-cols-5 sm:grid-cols-2 lg:gap-0 gap-y-6">
          <div className="">
            <div className="mb-5">
              <h2 className="title-font font-semibold text-2xl mb-5">
                TENTANG
              </h2>
            </div>
            <nav className="list-none list-footer space-y-5">
              <li>
                <p>
                  Galonline adalah situs beli <br />
                  galon atau isi ulang galon
                  <br /> secara online disertai yang <br />
                  dengan pengiriman produk <br />
                  dan pemasangan
                  <br />
                  <br />
                  Ada pertanyaan?
                </p>
                <li>
                  <a href="/">support@galonline.com</a>
                </li>
              </li>
            </nav>
          </div>

          <div className="">
            <h2 className="title-font font-semibold text-2xl mb-5">LAYANAN</h2>
            <nav className="list-none list-footer space-y-5">
              <li>
                <a href="/">Isi Ulang Galon</a>
              </li>
              <li>
                <a href="/">Beli Galon</a>
              </li>
            </nav>
          </div>

          <div className="">
            <h2 className="title-font font-semibold text-2xl mb-5">BANTUAN</h2>
            <nav className="list-none list-footer space-y-5">
              <li>
                <a href="/home">Pengiriman</a>
              </li>
              <li>
                <a href="/home">FAQ</a>
              </li>
              <li>
                <a href="/home">Kontak Kami</a>
              </li>
            </nav>
          </div>

          <div className="">
            <h2 className="title-font font-semibold text-2xl mb-5">
              IKUTI KAMI
            </h2>
            <nav className="flex items-center list-none list-footer">
              <FacebookCircled />
              <InstagramCircle />
              <TwitterCircled />
            </nav>
          </div>

          <h2 className="title-font font-semibold text-2xl mb-5">
            TETAP TERUPDATE
          </h2>
          <nav className="list-none list-footer space-y-5">
            <p>
              Jadilah yang pertama tahu tentang penawaran khusus dan produk
              terbaru
            </p>
            <input
              type="text"
              placeholder="Alamat Email"
              className="w-full h-14 rounded-md bg-gray-300 outline focus:outline-none"
            />
            <button className="bg-black text-white w-1/2 h-14">Daftar</button>
          </nav>
        </div>
      </div>

      <nav className="flex lg:flex-row flex-col items-center text-base justify-center">
        <p>Copyright © 2022 GALONLINE</p>
      </nav>
    </footer>
  );
}
