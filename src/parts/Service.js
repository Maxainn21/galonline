import React from "react";

export default function Service() {
  return (
    <section style={{ maxWidth: "900px" }} className="flex container mx-auto">
      <div class="container">
        <img src="" alt="Avatar" class="image" style="width:100%" />
        <div class="middle">
          <div class="text">John Doe</div>
        </div>
      </div>

      <div class="p-4 m-8 w-80 bg-white shadow-md rounded-xl">
        <picture class="rounded-lg block overflow-hidden">
          <img
            class="hover:scale-125"
            src="https://placeimg.com/360/240/tech"
            alt=""
          />
        </picture>

        <h1 class="mt-4 mb-2 text-xl font-bold">Judul Card di sini</h1>
        <p class="text-sm text-gray-600">
          Keterangan pendek tentang card di sini. Biasanya panjangnya dua sampai
          tiga baris, biar terlihat rapi.
        </p>
      </div>
    </section>
  );
}
