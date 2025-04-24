"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { IoIosArrowForward } from "react-icons/io";
import Button from '../Buttons/Button';
import clsx from 'clsx';

const Card = () => {
    const [isVisible, setisVisible] = useState(true)
    const el = useRef(null)
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    setisVisible(true)
                }
                else {
                    setisVisible(false)
                }
            })
        },)


        if(el.current){
            observer.observe(el.current)
        }

    },[]);

    return (
        <div className={clsx("rounded-[40px] transition-all duration-600 ease-in-out 2xl:w-[430px] xl:w-[430px] lg:w-[310px] md:w-[280px] sm:w-[230px] p-6 md:p-5 sm:p-5 whitespace-normal bg-[rgba(255,255,255,0.1)]", {
            "opacity-100":isVisible,
            "opacity-0":!isVisible
        })} ref={el}>
            {/* Image Container */}
            <div className="flex justify-center items-center">
                <Image
                    src={"/images/plant.png"}
                    alt="plant"
                    width={280}
                    height={280}
                    className="rounded-lg xl:w-[300px] lg:w-[230px] md:w-[190px] sm:w-[150px] border-2 border-solid border-white"
                />
            </div>

            {/* Text Container */}
            <div className="flex flex-col justify-start items-start gap-3 mt-4">
                <span className="text-sm sm:text-[15px] md:text-[17px] text-gray-400">
                    Trendy House Plant
                </span>

                {/* Title and Arrow */}
                <div className="flex flex-row justify-between items-center w-full">
                    <h2 className="text-[24px] md:text-[28px] font-normal">Calathea Plant</h2>
                    <IoIosArrowForward size={28} />
                </div>

                {/* Button */}
                <Button text="Buy now" type="button" />
            </div>
        </div>
    )
}
export default Card