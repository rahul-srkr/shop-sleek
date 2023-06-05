"use client"
import Image from "next/image"
import Rating from '@mui/material/Rating';
import { useState } from "react";
import Link from "next/link";

const ProductCard = ({ img, name, price, discount, percent, review, star }) => {
    const [value, setValue] = useState(star);
    return (
        <div className="border shadow-md bgc-initial">
            <div className="w-full">
                <Image src={img} alt="kurta" width={500} height={500} className="w-full h-60 object-contain" />
            </div>

            <div className="w-full flex flex-col gap-1 p-2">
                <Link href={`/product/${name}`} className="font-semibold max-w-[12rem] line-clamp-1 block">{name}</Link>
                <div className="flex items-center text-sm font-semibold txt-primary">
                    <Rating
                        value={value}
                        readOnly
                        precision={0.5}
                        size="small"
                        style={{ color: "#ff0066" }}
                    />
                    <span>{star}</span>
                    <span className="px-1 sm:hidden">|</span>
                    <span className="sm:hidden">{review}k</span>
                </div>
                <div className="flex items-center gap-2 text-sm flex-wrap">
                    <span className="font-semibold">Rs.{price}</span>
                    <del className="text-red-400">{discount}</del>
                    <span className="sm:hidden">{percent}% off</span>
                </div>
                <div className="flex items-end">
                    <button className={`btn-primary p-2 rounded-sm whitespace-nowrap sm:p-1 sm:text-sm sm:px-2 font-semibold text-white`}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default ProductCard