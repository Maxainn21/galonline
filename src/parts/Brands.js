import React from "react";
import Aqua from "../assets/Aqua.png";
import Vit from "../assets/Vit.png";
import Cleo from "../assets/Cleo.png";
import LeMinerale from "../assets/LeMinerale.png";
import Pristine from "../assets/Pristine.png";

export default function Brands() {
  const data = [
    {
      id: 1,
      img: Pristine,
    },
    {
      id: 2,
      img: Vit,
    },
    {
      id: 3,
      img: Aqua,
    },
    {
      id: 4,
      img: LeMinerale,
    },
    {
      id: 5,
      img: Cleo,
    },
  ];

  return (
    <div className="w-full mx-auto flex justify-around  bg-[#EEEE] items-center ">
      {data.map((item) => {
        return (
          <div className="max-md:w-12 max-md:h-12 max-md:flex max-md:items-center">
            <img src={item.img} alt="gambar" />
          </div>
        );
      })}
    </div>
  );
}
