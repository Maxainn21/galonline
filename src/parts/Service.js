import React from "react";

export default function Service() {
  const data = [
    {
      id: 1,
      image: "/galon1.png",
    },
    {
      id: 2,
      image: "/galon2.png",
    },
  ];
  return (
    <section
      style={{ maxWidth: "900px" }}
      className="flex flex-wrap container mx-auto"
    >
      {data.map((item) => {
        return (
          <div
            key={item.id}
            style={{ width: "350px" }}
            className="p-4 m-8 w-80 bg-white shadow-md rounded-xl"
          >
            <picture className="rounded-lg block overflow-hidden">
              <img
                style={{ width: "400px", height: "200px" }}
                className="hover:scale-125"
                src={item.image}
                alt=""
              />
            </picture>

            <h1 className="mt-4 mb-2 text-xl font-bold">Judul Card di sini</h1>
            <p className="text-sm text-gray-600">
              Keterangan pendek tentang card di sini. Biasanya panjangnya dua
              sampai tiga baris, biar terlihat rapi.
            </p>
          </div>
        );
      })}
    </section>
  );
}
