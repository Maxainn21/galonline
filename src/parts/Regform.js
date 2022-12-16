import React from "react";

export default function Register() {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-[#222831] ">
      <div className="w-full p-6 mt-30 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-[#00ADB5] underline">
          Sign Up
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              for="Name"
              className="block text-sm font-semibold text-gray-800"
            >
              Name
            </label>
            <input
              type="Name"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mb-2">
            <label
              for="pnumber"
              className="block text-sm font-semibold text-gray-800"
            >
              Phone Number
            </label>
            <input
              type="pnumber"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mb-2">
            <label
              for="username"
              className="block text-sm font-semibold text-gray-800"
            >
              Username
            </label>
            <input
              type="username"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mb-2">
            <label
              for="pass"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="pass"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <br />
          <br />
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md">
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-[#00ADB5] underline hover:underline"
          >
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}
