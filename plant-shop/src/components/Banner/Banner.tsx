import React from 'react';
import Button from '../Buttons/Button';
import Image from 'next/image';
import Scrollbar from '../Scrollbar/Scrollbar';
import SubsectionCards from '../Subsection-cards/Subsection-card';

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

const Banner = () => {

    const subSectionCardsContent =[
        {
            title:"For Small Decs Ai Plat",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            price:599,
            image:"/images/plant-1.png",
        },
        {
            title:"For Small Decs Ai Plat",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            price:599,
            image:"/images/plant-1.png",
        },
    ]

    return (
        <section className='border-2 border-solid border-white bg-[url("/images/banner-1.png")] bg-no-repeat bg-center bg-cover w-full h-[2592px] md:px-[50px] sm:px-[30px] max-sm:px-[30px]'>
            {/* content  */}
            <br /><br /><br /> <br /><br /><br /><br /><br /><br />
            <div className='flex flex-col flex-wrap justify-start items-start gap-16'>
                <div className='2xl:w-[60%] xl:w-[60%] lg:w-[60%] md:w-[60%] sm:w-[60%] border-2 border-solid border-white' >
                    <h1 className='2xl:text-[118px] lg:text-[90px] xl:text-[90px] md:text-[60px] sm:text-[50px] max-sm:text-[40px] font-inter font-semibold leading-[100px]'>Breath Natureal</h1>
                    <p className='xl:text-[23px] lg:text-[20px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    <br />
                    <div className='flex flex-row flex-nowrap justify-start items-center gap-3'>
                        <Button type='button' text='Explore' />
                        <div className='flex flex-row flex-nowrap justify-center items-center gap-2 w-[210px] h-[64px] border-2 border-solid border-white text-[21px]'> <Image src={"/images/play.png"} alt='live demo' width={65} height={64} /> Live demo ...</div>
                    </div>
                </div>

                <FeedBackAuthor name='alena patel' stars={5} />
            </div>

            <Scrollbar />
            <br />

            <div className='py-[70px] flex flex-col flex-wrap justify-center items-center gap-14'>
                <h1 className='border-2 border-solid border-white text-[55px] rounded-lg font-semibold text-center'>Our Trendy Plants</h1>
                 <SubsectionCards list={subSectionCardsContent}/>
            </div>

        </section>
    )
}

export default Banner;