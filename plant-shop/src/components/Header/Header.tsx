import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='2xl:px-[20px] 2xl:py-[10px] fixed w-full border-2 border-solid border-white 2xl:h-[120px]'>
        <Image src={"/images/logo.png"} alt="planto" width={150} height={150} className='border-2 border-solid border-white'/>

        <nav className=''>
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Plant type</Link>
            <Link href={"/"}>More</Link>
            <Link href={"/"}>Contact</Link>
        </nav>

        <div></div>
    </header>
  )
}

export default Header