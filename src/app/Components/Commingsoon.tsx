"use client";
import Image from "next/image";
import Mobilebanner from "../../assets/image/pexels-kindelmedia-7457513.jpg";
import PCbanner from "../../assets/image/comesoon.jpg";

export default function CommingSoon() {
  return (
    <div className="w-full -mt-16">
      <div className="block w-full md:hidden relative">
        <Image
          src={Mobilebanner}
          width={1000}
          className=" h-[100vh] w-full  object-cover"
          alt="Organic Food"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center z-20">
          <h1 className="text-6xl ml-2 text-white font-bold">
            Launching <br /> Soon...
          </h1>
          <p className="text-xl p-4 text-white font-semibold">
            Farm-to-Table Subscription Box Service that delivers fresh produce
          </p>
        </div>
      </div>
      <div className="w-full hidden md:block relative">
        <Image
          src={PCbanner}
          alt="Organic Food"
          width={1500}
          className=" h-[100vh] w-full  object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30  z-10"></div>
        <div className="absolute top-[20%] right-0  w-[42rem] bg-[#476234] rounded-l-full h-96 flex flex-col items-center justify-center z-20">
          <h1 className="text-7xl text-white font-bold font">
            Launching Soon...
          </h1>
          <p className="text-3xl text-white font-semibold w-[80%] text-center mt-5">
            Farm-to-Table Subscription Box Service that delivers fresh produce
          </p>
        </div>
      </div>
    </div>
  );
}
