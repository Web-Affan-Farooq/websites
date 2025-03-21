"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [navStatus, setnavStatus] = useState(false);

  const handleNav = () => {
    setnavStatus(!navStatus);
  }

  return (
    <header className={`w-full fixed bg-black px-8 py-5 grid grid-cols-5 grid-rows-1 items-center max-md:items-start max-md:${navStatus? "h-[60vh]" : "h-[100px]"} transition-all`}>

      <div className="logo text-green text-2xl">CRYPTO</div>

      <div className={`flex flex-row justify-center items-center flex-wrap gap-7 col-span-3 text-gray-400 max-md:flex-col transition-all max-md:${navStatus? "translate-y-0 flex" : "-translate-y-72 hidden"} relative max-md:top-[80px]`}>
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Services</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>What's new</Link>
      </div>

      <button type="button" className="font-bold w-[180px] bg-green text-black px-[25px] py-[10px] rounded-xl max-md:hidden">Explore now</button>

      <div className="md:hidden text-white text-2xl absolute right-10 top-5" onClick={handleNav}>
      {navStatus? <i className="fa-solid fa-xmark"></i>:<i className="fa-solid fa-bars"></i> }
      </div>
    </header>

  );
};

export default Header;
