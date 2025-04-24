import React from 'react'

interface IButton {text:string; type: "button" | "reset" | "submit"; className?:string;}

const Button = ({text, type, className}:IButton) => {
  return (
    <button type={type} className={`border-2 border-solid border-white rounded-md sm:text-[21px] 2xl:px-[50px] 2xl:py-[16px] xl:px-[50px] xl:py-[15px] lg:px-[50px] lg:py-[15px] md:px-[40px] md:py-[12px] sm:px-[40px] sm:py-[12px] ${className}`}>{text}</button>
  )
}

export default Button