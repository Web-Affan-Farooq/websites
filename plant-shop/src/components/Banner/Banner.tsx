import React from 'react';
import Button from '../Buttons/Button';
import Image from 'next/image';
import { IoIosArrowForward } from "react-icons/io";

const FeedBackAuthor = ({ name, stars }: { name: string; stars: number }) => {
    return (
        <div className='bg-[rgba(255,255,255,0.1)] w-[314px] rounded-[45px] p-[30px] flex flex-col flex-nowrap justify-start items-start gap-3'>
            <div className='flex flex-row flex-nowrap justify-start items-center gap-4'>
                <div className="w-[64px] h-[64px] rounded-full bg-[url('/images/person.jpg')] bg-center bg-no-repeat bg-cover"></div>
                <div className='flex flex-col flex-nowrap justify-start items-start gap-[4px]'>
                    <h1 className='text-[22px] '>Alena Patel </h1>
                    <div className='flex flex-row flex-nowrap justify-start items-center gap-2'>
                        <Image src={"/icons/star.svg"} alt='star' width={15} height={15} />
                        <Image src={"/icons/star.svg"} alt='star' width={15} height={15} />
                        <Image src={"/icons/star.svg"} alt='star' width={15} height={15} />
                        <Image src={"/icons/star.svg"} alt='star' width={15} height={15} />
                        <Image src={"/icons/star.svg"} alt='star' width={15} height={15} />
                    </div>
                </div>
            </div>

            <p className='text-gray-400 lg:text-[17px] sm:text-[15px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...
            </p>
        </div>
    )
}

// const Card = () => {
//     return (
//         <div className="rounded-[77px] border-2 border-solid border-white w-[320px] sm:w-[350px] md:w-[400px] px-[30px] py-[20px] whitespace-normal">
//             <Image src={"/images/plant.png"} alt='plant' width={330} height={330} className='rounded-lg border-2 border-solid border-white ' />
//             <div className='flex flex-col flex-nowrap justify-start items-start gap-3'>
//                 <span className='sm:text-[15px] md:text-[17px] text-gray-400'>Trendy House Plant</span>
//                 <div className='flex flex-row flex-nowrap justify-between items-center w-full'>
//                     <h2 className='text-[38px] font-normal'>Calathea plant </h2> <IoIosArrowForward size={30} />
//                 </div>
//                 <Button text='Buy now' type='button' />
//             </div>
//         </div>
//     )
// }
const Card = () => {
    return (
        <div className="rounded-[40px] border-2 border-solid border-white w-[521px] px-6 py-6 whitespace-normal bg-black ">
            {/* Image Container */}
            <div className="flex justify-center">
                <Image 
                    src={"/images/plant.png"} 
                    alt="plant" 
                    width={280} 
                    height={280} 
                    className="rounded-lg border-2 border-solid border-white w-[321px]"
                />
            </div>

            {/* Text Container */}
            <div className="flex flex-col justify-start items-start gap-4 mt-4">
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


const Banner = () => {
    return (
        <section className='border-2 border-solid border-white bg-[url("/images/banner-1.png")] bg-no-repeat bg-center bg-cover w-full h-[2592px] md:px-[50px] sm:px-[30px]'>
            {/* content  */}
            <br /><br /><br /> <br /><br /><br /><br /><br /><br />
            <div>
                <div className='2xl:w-[60%] xl:w-[60%] lg:w-[60%] md:w-[60%] sm:w-[60%] border-2 border-solid border-white' >
                    <h1 className='2xl:text-[118px] lg:text-[90px] xl:text-[90px] md:text-[60px] sm:text-[50px] font-inter font-semibold leading-[100px] '>Breath Natureal</h1>
                    <p className='xl:text-[23px] lg:text-[20px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    <br />
                    <div className='flex flex-row flex-nowrap justify-start items-center gap-3'>
                        <Button type='button' text='Explore' />
                        <div className='flex flex-row flex-nowrap justify-center items-center gap-2 w-[210px] h-[64px] border-2 border-solid border-white text-[21px]'> <Image src={"/images/play.png"} alt='live demo' width={65} height={64} /> Live demo ...</div>
                    </div>
                </div>

                <FeedBackAuthor name='alena patel' stars={5} />
            </div>
{/* 
            <div className='absolute border-2 border-solid border-white rounded-[45px] w-[512px] top-40 right-16 whitespace-nowrap overflow-x-auto overflow-y-hidden'>
                <div className='flex flex-row justify-center items-center flex-shrink-1 overflow-x-auto'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div> */}
            <div className="absolute border-2 border-solid border-white rounded-[45px] w-[512px] top-40 right-16 whitespace-nowrap overflow-hidden">
  {/* Inner div with horizontal scrolling */}
  <div className="flex flex-row flex-nowrap justify-start items-center gap-x-4 overflow-x-auto overflow-y-hidden scrollbar-hide px-4">
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
</div>


        </section>
    )
}

export default Banner;