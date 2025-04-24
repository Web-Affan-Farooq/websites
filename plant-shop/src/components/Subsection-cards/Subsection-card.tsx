// import React from 'react';
// import Image from 'next/image';
// import Button from '../Buttons/Button';
// import AddToCart from '../Buttons/AddToCart';

// interface SubsectionCard {
//     image: string;
//     title: string;
//     price: number;
//     content: string;
// }
// const Subsection_card = ({
//     image,
//     title,
//     price,
//     content
// }: SubsectionCard) => {
//     return (
//         <div className='border-2 border-solid border-white bg-[rgba(255,255,255,0.1)] backdrop-blur-2xl backdrop-opacity-90 w-full rounded-[151px] flex flex-row flex-wrap justify-between items-center px-16 py-0'>
//             <Image src={image} alt={title} width={500} height={500} className='w-[500px] border-2 border-solid border-white -translate-y-1/2 h-[500px]' />

//             <div className='border-2 border-solid border-white flex flex-col flex-wrap justify-start items-start gap-3 w-[50vw]'>
//                 <h1 className='text-[38px] font-semibold'>{title}</h1>
//                 <p className='text-[20px] font-semibold'>{content}</p>
//                 <span className='text-[38px] font-semibold'>Rs. {price}/-</span>
//                 <div className='flex flex-row flex-nowrap justify-start items-start'>
//                     <Button type='button' text='Explore' />
//                     <AddToCart title={title} />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Subsection_card

"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../Buttons/Button";
import AddToCart from "../Buttons/AddToCart";
import Small from "./Small";
import Large from "./Large";

interface SubsectionCardProps {
  image: string;
  title: string;
  price: number;
  content: string;
}

const SubsectionCards = ({ list }: { list: SubsectionCardProps[] }) => {

    return (
      <div className="border-2 border-solid border-pink-400 bg-[rgba(255,255,255,0.2)] backdrop-blur-[20px] backdrop-opacity-10 w-full sm:w-[80vw] max-sm:w-[84vw] md:rounded-[151px] sm:rounded-[90px] max-sm:rounded-[90px] flex flex-col  md:flex-row flex-nowrap justify-between lg:px-[40px] py-0 items-center 2xl:h-[510px] xl:h-[470px] lg:h-[420px] md:h-[380px] max-sm:h-auto gap-10 md:gap-6 sm:gap-0 max-sm:gap-0">
      {/* Product Image */}

      <div className="relative border-2 border-solid border-blue-500 max-w-full h-auto sm:w-[400px] sm:h-[400px] max-sm:w-[370px] max-sm:h-[370px]">
  <Image
    src={list[0].image}
    alt={list[0].title}
    width={500}
    height={500}
    className="border-2 border-solid border-white rounded-xl lg:-translate-y-[80px] md:-translate-y-0 sm:-translate-y-[120px] max-sm:-translate-y-[150px]"
  />
</div>


      {/* Product Details */}
      <div className="flex flex-col flex-wrap justify-start items-start gap-4 max-sm:gap-2 w-full md:w-[732px] sm:p-10 max-sm:p-10">
        <h1 className="max-sm:text-[26px] sm:text-[26px] md:text-[30px] lg:text-[38px] font-semibold text-white">{list[0].title}</h1>
        <p className="max-sm:text-[18px] md:text-[18px] lg:text-[20px] text-gray-200">{list[0].content}</p>
        <span className="max-sm:text-[26px] sm:text-[26px] text-[30px] font-semibold">Rs. {list[0].price}/-</span>

        {/* Buttons Section */}
        <div className="flex flex-nowrap gap-4">
          <Button type="button" text="Explore" />
          <AddToCart title={list[0].title} />
        </div>
      </div>
    </div>
      // <div className="border-2 border-solid border-pink-400 bg-[rgba(255,255,255,0.2)] backdrop-blur-[20px] backdrop-opacity-10 w-full rounded-[151px] flex flex-col gap-10 md:flex-row flex-nowrap justify-between lg:px-[40px] py-0 items-center 2xl:h-[510px] xl:h-[470px] lg:h-[420px] md:h-[380px] md:gap-6"> {/*lg:px-[60px] md:px-[30px] */}
      //   {/* Product Image */}
      //   <div className="border-2 border-solid border-blue-500 2xl:w-[601px] 2xl:h-[732px] xl:w-[700px] xl:h-[665px] lg:w-[700px] lg:h-[570px] md:w-[700px] md:h-[460px]">
      //     <Image
      //       src={list[0].image}
      //       alt={list[0].title}
      //       width={600}
      //       height={600}
      //       className="w-auto h-auto border-2 border-solid border-white rounded-xl"
      //     />{/*2xl:w-[601px] 2xl:h-[732px] xl:w-[700px] xl:h-[665px] lg:w-[700px] lg:h-[570px] min-[900px]:w-[700px] min-[900px]:h-[200px] md:w-[700px] md:h-[460px] */}
      //   </div>

      //   {/* Product Details */}
      //   <div className="flex flex-col flex-wrap justify-start items-start gap-4 w-full md:w-[732px] ">
      //     <h1 className="md:text-[30px] lg:text-[38px] font-semibold text-white">{list[0].title}</h1>
      //     <p className="md:text-[18px] lg:text-[20px] text-gray-200">{list[0].content}</p>
      //     <span className="text-[30px] font-semibold">Rs. {list[0].price}/-</span>

      //     {/* Buttons Section */}
      //     <div className="flex flex-nowrap gap-4">
      //       <Button type="button" text="Explore" />
      //       <AddToCart title={list[0].title} />
      //     </div>
      //   </div>
      // </div>
    );
}
export default SubsectionCards;
