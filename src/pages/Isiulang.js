import React from "react";
import Dropdown from "../parts/Dropdown";

export default function Isiulang() {
  return (
    <div>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-[#222831]">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-2xl lg:max-w-xl">
          <Dropdown />
        </div>
      </div>
    </div>
  );
}
