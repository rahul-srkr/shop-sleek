import StarRating from "@/components/ui/StarRating";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"
import { GrDeliver } from "react-icons/gr"
import { CgDetailsMore } from "react-icons/cg"
import { TbStars } from "react-icons/tb"
import { AiFillStar } from "react-icons/ai"
import ImageSlider from "@/components/ui/ImageSlider";


const page = () => {
    return (
        <div className="p-2 mt-40">
            <div className="text-sm">Home/Clothing/Women Clothing/Dresses/SASSAFRAS Dresses: More By SASSAFRAS</div>
            <div className="mt-4 flex gap-6 xl:flex-col xl:gap-4">
                <div className="w-[60%] xl:w-full">
                    <ImageSlider />
                </div>
                <div className="px-2 w-[40%] xl:w-full">
                    {/* title */}
                    <h1 className="text-2xl font-semibold sm:text-xl">Black & Pink Floral Printed Wrap Dress</h1>
                    <div className="flex items-center mt-1 font-semibold txt-primary text-lg sm:text-base">
                        <StarRating />
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

                    {/* product details */}
                    <div>
                        <div className="flex items-center gap-3">
                            <h2 className="text-lg font-semibold sm:text-base">DELIVERY OPTION</h2>
                            <GrDeliver className="w-5 h-5 sm:w-4 sm:h-4" />
                        </div>
                        <div className="mt-3 flex items-center sm:text-sm">
                            <input type="text" className="focus:outline-none border border-r-0 p-2" />
                            <span className="border border-l-0 p-[0.5rem] font-semibold">check</span>
                        </div>
                        <p className="text-xs font-medium mt-3">Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
                    </div>

                    <div className="font-medium space-y-2 mt-4 sm:text-sm">
                        <p>100% Original Products</p>
                        <p>Pay on delivery might be available</p>
                        <p>Easy 14 days returns and exchanges</p>
                        <p>Try & Buy might be available</p>
                    </div>

                    <hr className="h-1 w-full my-4" />

                    <div>
                        <div>
                            <div className="flex items-center gap-3">
                                <h2 className="text-lg font-semibold sm:text-base">PRODUCT DETAILS</h2>
                                <CgDetailsMore className="w-5 h-5 sm:w-4 sm:h-4" />
                            </div>
                            <p className="font-medium mt-2 txt-primary sm:text-sm">Black and pink printed woven wrap dress with tie-up detail, has a v-neck, three-quarter sleeves, concealed zip closure, an attached lining, and flared hem</p>
                        </div>
                        <div className="mt-3">
                            <h2 className="text-lg font-semibold sm:text-base">Size & Fit</h2>
                            <p className="font-medium mt-2 txt-primary sm:text-sm">The model (height 5.8) is wearing a size S</p>
                        </div>
                        <div className="mt-3">
                            <h2 className="text-lg font-semibold sm:text-base">Material & Care</h2>
                            <div className="space-y-1 txt-primary sm:text-sm">
                                <p className="font-medium">100% polyester</p>
                                <p className="font-medium">Machine-wash</p>
                            </div>
                        </div>

                    </div>

                    <hr className="h-1 w-full my-4" />

                    <div className="mx-auto">
                        <div className="flex items-center gap-3">
                            <h2 className="text-lg font-semibold sm:text-base">RATINGS OPTION</h2>
                            <TbStars className="w-5 h-5 sm:w-4 sm:h-4" />
                        </div>
                        <div className="flex gap-6 items-center mt-3 w-full">
                            <div className="flex flex-col gap-5 items-center w-[40%]">
                                <div className="flex items-center gap-1">
                                    <span className="text-3xl font-bold sm:text-2xl">4.3</span>
                                    <AiFillStar className="w-8 h-8 sm:w-6 sm:h-6" />
                                </div>
                                <p className="text-sm text-center sm:text-xs">19.1k Verified Buyers</p>
                            </div>

                            <div className="w-[0.5%] bg-gray-400 h-20" />

                            <div className="w-[59.5%] sm:text-sm">
                                <div className="flex items-center gap-1">
                                    <span>5</span>
                                    <AiFillStar />
                                    <progress className="h-1.5 w-full" id="file" value="32" max="100"> 32% </progress>
                                    <span>12035</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span>5</span>
                                    <AiFillStar />
                                    <progress className="h-1.5 w-full" id="file" value="32" max="100"> 32% </progress>
                                    <span>12035</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span>5</span>
                                    <AiFillStar />
                                    <progress className="h-1.5 w-full" id="file" value="32" max="100"> 32% </progress>
                                    <span>12035</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span>5</span>
                                    <AiFillStar />
                                    <progress className="h-1.5 w-full" id="file" value="32" max="100"> 32% </progress>
                                    <span>12035</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default page