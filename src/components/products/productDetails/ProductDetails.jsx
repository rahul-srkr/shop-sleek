import { GrDeliver } from "react-icons/gr"
import { CgDetailsMore } from "react-icons/cg"
import { TbStars } from "react-icons/tb"
import { AiFillStar} from "react-icons/ai"

const ProductDetails = () => {
    return (
        <>
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
        </>
    )
}
export default ProductDetails