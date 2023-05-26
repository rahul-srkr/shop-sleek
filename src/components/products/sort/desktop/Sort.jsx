import { VscFlame } from "react-icons/vsc"
import { HiSpeakerphone, HiTrendingUp, HiTrendingDown } from "react-icons/hi"
import { TbShoppingCartDiscount, TbStars } from "react-icons/tb"

const Sort = () => {
    return (
        <div className={`bgc-initial transition-all duration-500 ease-in-out top-9 max-h-0 group-hover:max-h-screen overflow-hidden absolute w-full shadow-md left-0`}>
            <div className=" flex flex-col gap-4 p-2">
                <div>Popularity</div>
                <div>Latest</div>
                <div>Discount</div>
                <div>Price: High to Low</div>
                <div>Price: Low to High</div>
                <div>Customer Rating</div>
            </div>

        </div>
    )
}
export default Sort