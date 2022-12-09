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
    <div className="flex justify-around mx-auto bg-[#EEEE] items-center py-3">
      {data.map((item) => {
        return (
          <div>
            <img src={item.img} />
          </div>
        );
      })}
    </div>
  );
}
