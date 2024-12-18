"use client";
import Image from "next/image";
import logo from "../../assets/image/logo.png";

export default function Navbar() {
  return (
    <>
      <nav className="backdrop-blur-sm bg-black/10 border-gray-200  sticky top-0 z-50 shadow-xl">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={logo}
              width={200}
              className=" h-14 w-14"
              alt="Flowbite Logo"
            />
            <span className="text-[#20a414] font-black text-2xl">
              Only Fams
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
            <button
              type="button"
              className="text-white bg-[#5fa414]  text-xl font-bold focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg  px-6 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Cart
            </button>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-bold p-4 md:p-0 mt-4 border border-gray-100 text-lg  rounded-lg md:space-x-20 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 font-Georama">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 hover:text-[#5fa414] text-white text-2xl  rounded md:bg-transparent"
                  aria-current="page"
                >
                  Subscriptions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-2xl text-white rounded hover:text-[#5fa414] "
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-2xl text-white rounded hover:text-[#5fa414] "
                >
                  Our Plans
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
