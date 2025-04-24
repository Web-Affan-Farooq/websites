// import React from 'react';
// import Image from 'next/image';
// import Button from './Button/Button';

// const Hero = () => {
//   return (
//     <section className='w-full flex flex-row flex-wrap justify-center items-center h-[573px] gap-10 max-md:my-[100px] max-md:p-4 max-sm:mb-[100px]'>
//       <div className='w-1/2 max-md:w-full'>
//         <h1 className='font-libre-bodoni text-4xl font-bold leading-[62px] tracking-[2.5%] text-left'>IMPECCABLE CRAFTSMANSHIP AND FINESSE
//         </h1>
//         <br />
//         <p className='text-[20px] font-libre-bodoni md:text-[25px] font-bold leading-[32px] text-left tracking-[2.5%] text-faun-light'>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
//         <br />
//         <Button text='Explore'/>
//       </div>
//       <div>
//         <Image src={'/images/hero-img.svg'} alt='hero lady image' width={400} height={500} className='w-[350px] h-[450px] max-md:m-auto' />
//       </div>
//     </section>
//   )
// }

// export default Hero;

import React from 'react';
import Image from 'next/image';
import Button from '../Button/Button';

const Hero = () => {
  return (
    <section className='w-full flex flex-row flex-wrap justify-center items-center h-auto gap-10 px-4 py-[170px] md:py-[140px]'>
      
      {/* Left Text Section */}
      <div className='w-1/2 max-md:w-full'>
        <h1 className='font-libre-bodoni text-3xl sm:text-4xl md:text-5xl font-bold leading-tight md:leading-[62px] tracking-wide text-left'>
          IMPECCABLE CRAFTSMANSHIP AND FINESSE
        </h1>
        <br />
        <p className='text-base sm:text-lg md:text-xl font-bold leading-relaxed text-left tracking-wide text-faun-light font-libre-bodoni'>
          An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
        </p>
        <br />
        <Button text='Explore' />
      </div>

      {/* Right Image Section */}
      <div className='w-auto max-md:w-full flex justify-center'>
        <Image
          src={'/images/hero-img.svg'}
          alt='hero lady image'
          width={400}
          height={500}
          className='w-[280px] sm:w-[320px] md:w-[350px] lg:w-[400px] h-auto object-contain max-md:m-auto'
        />
      </div>
      
    </section>
  );
};

export default Hero;
