"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaXmark } from "react-icons/fa6";

const Header = () => {
  const [navStatus, setnavStatus] = useState(false);

  return (
    <header className='2xl:px-[30px] xl:px-[30px] lg:px-[30px] md:px-[30px] sm:px-[30px]  2xl:py-[10px] xl:py-[10px] lg:py-[10px] md:py-[10px] sm:py-[10px] fixed w-full border-2 border-solid border-white 2xl:h-[120px] flex flex-row flex-nowrap justify-between items-center'>
      <div className='flex flex-row flex-nowrap justify-center items-center gap-3 border-2 border-solid border-white'>
        <Image src={"/icons/menu-icon.svg"} alt='search icon' width={30} height={30} className={"max-sm:block hidden "} />
        <Image src={"/images/logo.png"} alt="planto" width={150} height={150} className='border-2 border-solid border-white' />
      </div>

      <nav className='flex flex-row flex-nowrap justify-center items-center 2xl:gap-20 xl:gap-14 lg:gap-10 md:gap-7 sm:gap-7 max-sm:flex-col max-sm:absolute max-sm:gap-10 max-sm:top-0 border-2 border-solid border-white max-sm:w-[70vw] max-sm:py-[100px]'>
        <FaXmark className='absolute right-10 top-10' size={23} onClick={() => {
          setnavStatus(!navStatus)
        }}/>
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Plant type</Link>
        <Link href={"/"}>More</Link>
        <Link href={"/"}>Contact</Link>
      </nav>

      <div className='flex flex-row flex-nowrap justify-center items-center 2xl:gap-10 xl:gap-10 lg:gap-7 md:gap-5 sm:gap-5 border-2 border-solid border-white'>
        <Link href={"/"} className='border-2 border-solid border-white'><Image src={"/icons/search-icon.svg"} alt='search icon' width={30} height={30} /></Link>
        <Link href={"/"} className='border-2 border-solid border-white'><Image src={"/icons/shopping-bag.svg"} alt='search icon' width={30} height={30} /></Link>
      </div>
    </header>
  )
}

export default Header