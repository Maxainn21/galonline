import React, { useEffect } from "react";

function Dropdown() {
  useEffect(() => {
    document.querySelector("body").addEventListener("click", (e) => {
      // e.stopPropagation();
      console.log("body");
      if (
        document
          .getElementById("drop-down-div_dropdown_3")
          .classList.contains("active")
      ) {
        document
          .getElementById("drop-down-div_dropdown_3")
          .classList.add("hidden");
        document
          .getElementById("drop-down-div_dropdown_3")
          .classList.remove("active");
      }
    });
  }, []);

  function showDropDownMenu_dropdown_3(el) {
    document.querySelectorAll(".hideme").forEach((el) => {
      el.classList.remove("active");
    });
    el.parentElement.children[1].classList.add("active");
    el.parentElement.children[1].classList.remove("hidden");
  }
  function text_dropdown_3(el) {
    const targetText = el.innerText;
    document.getElementById("drop-down-content-setter_dropdown_3").innerText =
      targetText;
    document
      .getElementById("drop-down-div_dropdown_3")
      .classList.toggle("hidden");
  }

  return (
    <>
      <div className>
        <div className="w-full mx-auto pt-4 pb-52">
          <div className="mt-8 px-6">
            <div className="dropdown-one w-full rounded outline-none bg-white relative mt-2 shadow-md">
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  showDropDownMenu_dropdown_3(event.target);
                }}
                className="relative px-4 py-[12px] flex items-center justify-between w-full shadow-sm"
              >
                <span
                  className="pr-4 text-gray-600 text-sm font-bold"
                  id="drop-down-content-setter_dropdown_3"
                >
                  Call to action
                </span>
                <svg
                  width={12}
                  height={8}
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.06216 1.9393L5.43028 7.0368C5.50069 7.11892 5.58803 7.18484 5.68631 7.23003C5.78459 7.27522 5.89148 7.29862 5.99966 7.29862C6.10783 7.29862 6.21472 7.27522 6.313 7.23003C6.41128 7.18484 6.49862 7.11892 6.56903 7.0368L10.9372 1.9393C11.354 1.45273 11.0084 0.701172 10.3678 0.701172H1.63028C0.989656 0.701172 0.644031 1.45273 1.06216 1.9393Z"
                    fill="#1F2937"
                  />
                </svg>
              </button>
              <div
                className="hidden rounded w-full px-3 py-2 absolute top-16 right-0 bg-white shadow-lg"
                id="drop-down-div_dropdown_3"
              >
                <div
                  onClick={(event) => {
                    event.stopPropagation();
                    text_dropdown_3(event.target);
                  }}
                  className="flex items-center justify-between hover:bg-gray-100 rounded text-gray-600 hover:text-gray-800 p-3 hover:font-bold hover:cursor-default"
                >
                  <a href={"/"} className="cursor-default">
                    <p className="text-sm leading-none">New Project</p>
                  </a>

                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.5 8C1.5 4.41136 4.41136 1.5 8 1.5C11.5886 1.5 14.5 4.41136 14.5 8C14.5 11.5886 11.5886 14.5 8 14.5C4.41136 14.5 1.5 11.5886 1.5 8ZM8 2.5C4.96364 2.5 2.5 4.96364 2.5 8C2.5 11.0364 4.96364 13.5 8 13.5C11.0364 13.5 13.5 11.0364 13.5 8C13.5 4.96364 11.0364 2.5 8 2.5ZM8 5C8.27614 5 8.5 5.22386 8.5 5.5V7.5H10.5C10.7761 7.5 11 7.72386 11 8C11 8.27614 10.7761 8.5 10.5 8.5H8.5V10.5C8.5 10.7761 8.27614 11 8 11C7.72386 11 7.5 10.7761 7.5 10.5V8.5H5.5C5.22386 8.5 5 8.27614 5 8C5 7.72386 5.22386 7.5 5.5 7.5H7.5V5.5C7.5 5.22386 7.72386 5 8 5Z"
                      fill="#4B5563"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
