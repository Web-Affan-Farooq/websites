"use client";
import React, {useState, useEffect, useRef} from 'react'
import Card from '../Cards/Card-banner';
import "./scroll.css"

const Scrollbar = () => {
  const [scroll, setscroll] = useState(true);
  const [area , setarea ] = useState(0);
  const el = useRef(null);
  useEffect(() => {
      setarea((prevArea) => (prevArea + 525))
      const currentVal= el.current;
      if(currentVal) {
          currentVal.scrollBy(area, 0);  // Ignore this error 
      } 
  },[scroll])
  return (
      <div className='absolute top-[200px] right-[20px] sm:right-[10px] scroll-container 2xl:w-[430px] xl:w-[450px] lg:w-[325px] md:w-[280px] sm:w-[240px] max-sm:hidden border-4 border-solid border-blue-400 m-auto overflow-x-auto whitespace-nowrap rounded-[40px]' ref={el}>
          <div className='flex flex-shrink-0 justify-between'>
              <div className='flex flex-row flex-nowrap gap-7 justify-center items-center'>
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
              </div>
          </div>
      </div>
  )
}

export default Scrollbar;