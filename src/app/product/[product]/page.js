"use client"
import Slider from "@/components/products/slider/Slider"
import Rating from '@mui/material/Rating';
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"
import ProductDetails from "@/components/products/productDetails/ProductDetails";

const page = () => {
    return (
        <div className="p-2">
            <p className="text-sm">Home/Clothing/Women Clothing/Dresses/SASSAFRAS Dresses: More By SASSAFRAS</p>
            <div className="mt-4 flex gap-6 xl:flex-col xl:gap-4">
                <div className="w-[60%] xl:w-full">
                    <Slider />
                </div>
                <div className="px-2 w-[40%] xl:w-full">
                    {/* title */}
                    <h1 className="text-2xl font-semibold sm:text-xl">Black & Pink Floral Printed Wrap Dress</h1>
                    <div className="flex items-center mt-1 font-semibold txt-primary text-lg sm:text-base">
                        <Rating
                            value={4.5}
                            readOnly
                            precision={0.5}
                            size={"medium"}
                            style={{ color: "#ff0066" }}
                        />
                        <span>4.5</span>
                        <span className="px-1">|</span>
                        <span className="">14k</span>
                    </div>

                    <hr className="h-1 w-full my-2" />

                    <div className="text-2xl font-semibold space-x-2 sm:text-xl">
                        <span>₹767</span>
                        <del className="text-red-500">1500</del>
                        <span className="txt-primary">(68%)</span>
                    </div>

                    <div className="mt-5">
                        <h2 className="text-lg font-semibold sm:text-base">Colors</h2>
                        <div className="flex items-center gap-3 flex-wrap mt-3">
                            <div className="bg-blue-500 h-6 w-6 sm:h-5 sm:w-5 rounded-full" />
                            <div className="bg-blue-500 h-6 w-6 sm:h-5 sm:w-5 rounded-full" />
                            <div className="bg-blue-500 h-6 w-6 sm:h-5 sm:w-5 rounded-full" />
                            <div className="bg-blue-500 h-6 w-6 sm:h-5 sm:w-5 rounded-full" />
                            <div className="bg-blue-500 h-6 w-6 sm:h-5 sm:w-5 rounded-full" />
                            <div className="bg-blue-500 h-6 w-6 sm:h-5 sm:w-5 rounded-full" />
                            <div className="bg-blue-500 h-6 w-6 sm:h-5 sm:w-5 rounded-full" />
                        </div>
                    </div>

                    <div className="mt-5">
                        <h2 className="text-lg font-semibold sm:text-base">Select Size</h2>
                        <div className="flex items-center gap-3 flex-wrap mt-3 txt-primary">
                            <div className="border w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center font-semibold rounded-full bgc-primary sm:text-sm">
                                xs
                            </div>
                            <div className="border w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center font-semibold rounded-full sm:text-sm">
                                sm
                            </div>
                            <div className="border w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center font-semibold rounded-full sm:text-sm">
                                lg
                            </div>
                            <div className="border w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center font-semibold rounded-full sm:text-sm">
                                xl
                            </div>
                            <div className="border w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center font-semibold rounded-full sm:text-sm">
                                2xl
                            </div>
                            <div className="border w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center font-semibold rounded-full sm:text-sm">
                                3xl
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3 mt-5 4xl:text-sm">
                        <button className="px-4 py-2 sm:px-2 sm:py-1 rounded-sm border font-semibold flex items-center gap-2 btn-primary text-white">
                            <AiOutlineShoppingCart className="w-5 h-5 2xl:hidden" />
                            <span className=" whitespace-nowrap">ADD TO CART</span>
                        </button>
                        <button className="px-4 py-2 sm:px-2 sm:py-1 rounded-sm border font-semibold flex items-center gap-2 btn-secondary text-white">
                            <AiOutlineHeart className="w-5 h-5 2xl:hidden" />
                            <span className="whitespace-nowrap">WISHLIST</span>
                        </button>
                    </div>

                    <hr className="h-1 w-full my-4" />

                    <ProductDetails />
                </div>

            </div>
        </div>
    )
}
export default page