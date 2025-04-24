import React from 'react'
import Image from 'next/image'

const AddToCart = ({title}:{title:string}) => {
  return (
    <button type="button" className='border-2 border-solid border-white p-2 rounded-md'>
            <Image src={"/icons/shopping-bag.svg"} alt={`Add ${title} to cart`} width={34} height={34}/>
    </button>
  )
}

export default AddToCart