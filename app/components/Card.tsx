
import Image from "next/image"
import Link from "next/link";
import {Button} from "./Button"
import { useState } from 'react'


type CardProps = {
  slug?:string;
  name: string;
  image: string;
  description: string;
  price: string;
  rate: string;
  brand: string;
  discount: string;
  sticker?: string;
  onClick?: () => void;
}

export const Card = ({brand, name, image, description, price, rate, onClick, slug, discount, sticker}: CardProps) => {

  const [quantity, setQuantity] = useState(0);
  const quantityAddHandler = () => {
      setQuantity(quantity + 1);
  }
  const quantityMinusHandler = () => {
    if(quantity > 0){
      setQuantity(quantity - 1);
    }
  
  }


  return (
    <div className="border p-5 border-black rounded gap-10 shadow-lg hover:shadow-2xl">


    <Link href={`../p/${slug}`} key={slug} className="">



    <div onClick={onClick} className="">


      <div className="grid p-3 items-center justify-center">

    <div className="border-gray border-b-2">
       <p> <svg width="9" height="9" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block h-[9px] w-[9px]"><path d="M4.69 7.501l2.181 1.44c.281.184.627-.09.545-.428l-.632-2.582a.406.406 0 01.126-.395L8.866 3.84c.255-.22.125-.666-.208-.688L6.105 2.98a.35.35 0 01-.193-.073.372.372 0 01-.123-.17L4.837.246a.372.372 0 00-.131-.178.35.35 0 00-.412 0 .372.372 0 00-.131.178L3.21 2.738a.372.372 0 01-.123.17.35.35 0 01-.193.073l-2.553.17c-.333.023-.463.468-.208.689L2.09 5.536a.406.406 0 01.125.396l-.584 2.392c-.1.405.316.734.65.513L4.31 7.501a.345.345 0 01.38 0z" fill="#F7B543"></path></svg>
            {rate}</p></div>

            <p className="flex font-bold text-black text-xl justify-center">{brand}</p>
            <p className="flex justify-center font-bold italic text-gray-500 text-md">{name}</p>

            <div className="relative shadow-2xl">
            
      <Image className="hover:scale-125 transition duration-500 cursor-pointer" src={image} alt={description} width={200} height={100}/>
      <div className="sm:absolute left-0 top-[220px] right-0 xl:absolute left-0 top-[240px] right-0 bg-green-500 text-white font-bold text-center text-base border border-5 border-inherit rounded-xl p-3
       hover:animate-bounce
      ">
        <Button className="" name="Add to cart"/>
</div>
      </div>
    
    <p className="flex justify-center italic font-serif text-gray-400">{description}</p>
    <p className="text-center text-lg text-black font-extrabold">{price}</p>
    <p className="text-center line-through text-sm text-gray-600">{discount}</p>
    </div>
    </div> 
    
    </Link>

    <div className="grid grid-cols-3 border rounded-2xl py-2 border-black gap-10 items-center text-center justify-center">
  <div className="font-bold text-lg">
<Button onClick={quantityMinusHandler} name="-" />
</div>
<span className='text-sm'>{quantity}</span>
<div className="font-bold text-lg">
<Button onClick={quantityAddHandler} name="+" />
</div>
</div>


</div>

  )
}