import Image from "next/image"
import Rating from '@mui/material/Rating';
import { useState } from "react";
import Button from "../ui/Button";

const ProductCard = ({ img, name, price, discount, percent, review, star }) => {
    const [value, setValue] = useState(star);
    return (
        <div className=" border bg-light dark:bg-dark txt shadow-md">
            <div className="w-full">
                <Image src={img} alt="kurta" width={500} height={500} className="w-full h-60 object-contain" />
            </div>

            <div className="w-full flex flex-col gap-1 p-2">
                <p className="font-semibold max-w-[12rem] line-clamp-1">{name}</p>
                <div className="flex items-center text-sm font-semibold text-gray-500">
                    <Rating
                        value={value}
                        readOnly
                        precision={0.5}
                        size="small"
                        style={{ color: "#03fca5" }}
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
                    <Button size={"md"}>Add To Cart</Button>
                </div>
            </div>
        </div>
    )
}
export default ProductCard