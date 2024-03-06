'use client';

import React from 'react'
import { products } from '../lib/data'
import { Card } from './Card'
import { Products } from '../lib/type'
import Link from "next/link"
import {Button} from "./Button"
import { useState } from 'react'

type Cardprop = {
    product: Products [];
}

export const Cards = ({product}: Cardprop) => {
   
  return (
    <div className="sm:flex lg:grid grid-cols-3 gap-5 justify-center">
        {products.map((product) => {
            return (
                <div className="">
                    <Card
                    sticker={product.sticker}
                    slug={product.slug}
                    brand={product.brand}
                    name={product.name}
                    description={product.description}
                    image={product.image}
                    price={product.price}
                    rate={product.rate} 
                    discount={product.discount}                 
                    />

        </div>
            )
        })}

    </div>
  )
}
