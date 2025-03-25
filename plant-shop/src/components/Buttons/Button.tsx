import React from 'react'

interface IButton {text:string; type: "button" | "reset" | "submit"; className?:string;}

const Button = ({text, type, className}:IButton) => {
  return (
    <button type={type} className={`border-2 border-solid border-white lg:w-[217px] lg:h-[64px] sm:w-[154px] sm:h-[54px] rounded-md sm:text-[21px] ${className}`}>{text}</button>
  )
}

export default Button