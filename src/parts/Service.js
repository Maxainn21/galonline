import React from "react";

export default function Service() {
  const data = [
    {
      id: 1,
      image: "/galon1.png",
      title: "Beli Galon",
      location: "/home",
      buttonName: "Beli Galon",
    },
    {
      id: 2,
      image: "/galon2.png",
      title: "Isi Ulang Galon",
      location: "/isiulang",
      buttonName: "Isi Ulang Galon",
    },
  ];
  return (
    <>
      {" "}
      <p className="text-center mt-10 text-2xl font-semibold">LAYANAN KAMI</p>
      <section
        style={{ maxWidth: "900px" }}
        className="flex flex-wrap container mx-auto"
      >
        {data.map((item) => {
          return (
            <div
              key={item.id}
              style={{ width: "350px" }}
              className="p-4 m-8 w-80 bg-white shadow-md hover:shadow-2xl rounded-xl"
            >
              <picture className="rounded-lg block overflow-hidden">
                <img
                  style={{ width: "400px", height: "200px" }}
                  className="hover:scale-125"
                  src={item.image}
                  alt=""
                />
              </picture>
              <br />
              <a
                href={item.location}
                className=" bg-[#00ADB5] hover:bg-[#222831] font-bold py-2 px-4 rounded text-white no-underline "
              >
                {item.buttonName}
              </a>
            </div>
          );
        })}
      </section>
    </>
  );
}
