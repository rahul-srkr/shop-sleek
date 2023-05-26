import { VscFlame } from "react-icons/vsc"
import { HiSpeakerphone, HiTrendingUp, HiTrendingDown } from "react-icons/hi"
import { TbShoppingCartDiscount, TbStars } from "react-icons/tb"

const Sort = ({ toggleSort }) => {
    return (
        <div className={`hidden md:block fixed bottom-14  bg-primary-light overflow-hidden dark:bg-primary-dark w-full transition-all duration-500 ease-in-out ${toggleSort ? "max-h-full" : "max-h-0"} border-t-2 border-primary`}>
            <div className='border-b p-2 pb-2'>SORT BY</div>
            <div className='flex flex-col gap-4 mt-2 p-2'>
                <div className='flex items-center gap-5'>
                    <VscFlame className='w-5 h-5' />
                    <div>Popularity</div>
                </div>
                <div className='flex items-center gap-5'>
                    <HiSpeakerphone className='w-5 h-5' />
                    <div>Latest</div>
                </div>
                <div className='flex items-center gap-5'>
                    <TbShoppingCartDiscount className='w-5 h-5' />
                    <div>Discount</div>
                </div>
                <div className='flex items-center gap-5'>
                    <HiTrendingDown className='w-5 h-5' />
                    <div>Price: High to Low</div>
                </div>
                <div className='flex items-center gap-5'>
                    <HiTrendingUp className='w-5 h-5' />
                    <div>Price: Low to High</div>
                </div>
                <div className='flex items-center gap-5'>
                    <TbStars className='w-5 h-5' />
                    <div>Customer Rating</div>
                </div>
            </div>
        </div>
    )
}
export default Sort