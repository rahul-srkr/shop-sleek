import Image from "next/image"
import wear1 from "../../../public/assets/wear-categories/active.webp"
import { AiFillCaretDown } from "react-icons/ai"
import { GrClose } from "react-icons/gr"

const CartProductCard = () => {
    return (
        <div className="shadow-md border p-3 sm:p-1 bgc-primary">
            <div className="flex gap-4 flex-grow sm:gap-1 xs:flex-col xs:gap-2">
                <Image src={wear1} width={0} height={0} alt="cart image" className="w-36 min-w-[9rem] h-44 xs:w-full" />
                <div className="flex flex-col gap-3 flex-grow  justify-between">
                    <div className="flex items-center justify-between">
                        <p className="text-lg font-semibold line-clamp-1 md:line-clamp-2 sm:text-base">Women Yellow Printed Top</p>
                        <GrClose className="self-start" />
                    </div>

                    <div className="flex gap-2 items-center text-sm font-semibold txt-primary sm:text-xs">
                        <div className="flex items-center gap-1 border py-1 px-2 sm:p-1 bgc-initial">
                            <span>Size : M</span>
                            <AiFillCaretDown />
                        </div>
                        <div className="flex items-center gap-1 border py-1 px-2 sm:p-1 bgc-initial">
                            <span>Qyt : 1</span>
                            <AiFillCaretDown />
                        </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm font-semibold txt-primary border py-1 px-2 w-fit sm:text-xs bgc-initial">
                        <div className="w-4 h-4 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                        <span>Color : Red</span>
                        <AiFillCaretDown />
                    </div>
                    <div className="flex items-center justify-between md:flex-col md:gap-3 md:items-start md:justify-start sm:text-sm">
                        <div className="space-x-2 font-semibold">
                            <span>₹767</span>
                            <del className="text-red-500">1500</del>
                            <span className="txt-primary">(68%)</span>
                        </div>
                        <button className="px-2 py-1 rounded-sm btn-secondary text-white font-semibold text-sm sm:text-xs ">MOVE TO WISHLIST</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default CartProductCard