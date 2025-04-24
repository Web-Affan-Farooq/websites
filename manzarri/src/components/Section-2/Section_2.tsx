import React from "react";
import Image from "next/image";

const Section_2 = () => {
  return (
    <section className="text-center w-full p-5 block max-[800px]:my-[150px]">
      <h1 className="text-[45px] font-bold font-rye max-md:text-[40px] max-sm:text-[34px]">Shop By Categories</h1>
      <br />
      <br />
      <div className="flex flex-row justify-evenly w-[80vw] m-auto items-center md:flex-nowrap flex-wrap max-md:gap-4">
        {
          ["Earrings","Necklace","Bracelet", "Rings"].map((option:string, idx:number) => {
            return <span className="text-faun-dark font-libre-bodoni text-3xl max-sm:text-2xl font-bold " key={idx}>
            {option}
          </span>
          })
        }
      </div>
      <br />
      <div className="grid grid-cols-2 gap-2 border-2 border-solid border-black mx-auto h-[500px]"> {/* give height to parent */}
  
  {/* Top-left large image */}
  <div className="w-full h-full">
    <Image src="/images/section-2-images/1.svg" alt="image 1" width={200} height={200} className="w-full h-full object-cover" />
  </div>

  {/* Top-right two side-by-side images */}
  <div className="flex flex-row flex-nowrap justify-center items-start">
  <Image src="/images/section-2-images/1.svg" alt="image 1" width={200} height={200} className="w-1/2 h-full" />
  </div>

  {/* Bottom-left two side-by-side images */}
  <div className="grid grid-cols-2 gap-2 items-stretch h-full"> {/* same here */}
    <Image src="/images/section-2-images/2.svg" alt="image 3a" width={100} height={100} className="w-full h-full object-cover" />
    <Image src="/images/section-2-images/2.svg" alt="image 3b" width={100} height={100} className="w-full h-full object-cover" />
  </div>

  {/* Bottom-right large image */}
  <div className="w-full h-full">
    <Image src="/images/section-2-images/1.svg" alt="image 4" width={200} height={200} className="w-full h-full object-cover" />
  </div>
</div>
    </section>
  );
};

export default Section_2;
