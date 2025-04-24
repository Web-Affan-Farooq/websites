"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    const [navStatus, setnavStatus] = useState(false);

    return (
        <header className='z-10 w-full fixed text-white bg-[var(--faun-light)] 
        2xl:px-[60px] 2xl:py-[20px]
         xl:px-[60px] xl:py-[20px]
         lg:px-[60px] lg:py-[20px]
        md:px-[40px] md:py-[20px]
        sm:px-[30px] sm:py-[20px]
        max-sm:px-[25px] max-sm:py-[20px]
        flex flex-row flex-nowrap justify-between items-center
        '>

            <div className='flex flex-row flex-nowrap justify-center items-center gap-2'>
                {navStatus ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 max-sm:block hidden" onClick={() => {
                    setnavStatus(!navStatus)
                }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 max-sm:block hidden" onClick={() => {
                        setnavStatus(!navStatus)
                    }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                    </svg>}

                <span className="font-rye
font-normal
leading-[100%]
tracking-[0%]
2xl:text-[50px]
xl:text-[40px]
lg:text-[38px]
md:text-[38px]
sm:text-[30px]
max-sm:text-[28px]
">Manzarri</span>
            </div>


            <div className='hidden sm:flex flex-row flex-nowrap justify-center items-center gap-4'>
                <Link href={"/"} className=''>
                    Home
                </Link>
                <Link href={"/marketplace"} className=''>
                    Marketplace
                </Link>
                <Link href={"/marketplace"} className=''>
                    Marketplace
                </Link>
            </div>
            <div className={`transition-all duration-200 ease-in-out absolute top-0 right-0 z-10 bg-[var(--faun-light)] w-[80vw] h-screen hidden max-sm:flex flex-col flex-nowrap justify-center items-center gap-6 ${navStatus ? "translate-x-0" : "translate-x-[100%]"}`}>

                <Link href={"/marketplace"} className='' onClick={() => {
                    setnavStatus(!navStatus);
                }}>
                    Marketplace
                </Link>
                <Link href={"/marketplace"} className='' onClick={() => {
                    setnavStatus(!navStatus);
                }}>
                    Marketplace
                </Link>
                <Link href={"/marketplace"} className='' onClick={() => {
                    setnavStatus(!navStatus);
                }}>
                    Marketplace
                </Link>
            </div>

            <div className='flex flex-row flex-nowrap justify-center items-center gap-4'>
                {[
                    { src: "/icons/heart.svg", alt: "liked items", link: "/liked" },
                    { src: "/icons/profile.svg", alt: "profile", link: "/profile" },
                    { src: "/icons/cart.svg", alt: "cart", link: "/cart" },
                ].map((icon, index) => (
                    <Link href={icon.link} key={index}>
                        <div className='relative w-5 h-5 sm:w-5 sm:h-5 md:w-5 md:h-5'>
                            <Image src={icon.src} alt={icon.alt} fill className="object-contain" />
                            <span className='absolute bg-red-600 text-xs right-[-8px] bottom-[10px] rounded-full w-[18px] h-[18px] flex justify-center items-center text-white'>
                                1
                            </span>
                        </div>
                    </Link>
                ))}
            </div>

        </header>
    )
}

export default Header