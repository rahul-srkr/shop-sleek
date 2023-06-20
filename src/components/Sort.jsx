"use client"
import { VscChevronDown } from "react-icons/vsc";
import { VscFlame } from "react-icons/vsc"
import { HiSpeakerphone, HiTrendingUp, HiTrendingDown } from "react-icons/hi"
import { TbShoppingCartDiscount, TbStars } from "react-icons/tb"

const Sort = () => {

    return (
        <div className='text-sm p-2 border flex items-center w-64 justify-between float-right xl:float-none xl:mb-2 md:hidden relative group bgc-primary'>
            <div>
                Sort by : <span className='font-semibold'>Popularity</span>
            </div>
            <VscChevronDown className='w-4 h-4' />
            <div className={`bgc-initial transition-all duration-500 ease-in-out top-9 max-h-0 group-hover:max-h-screen overflow-hidden absolute w-full shadow-md left-0 bgc-primary`}>
                <div className=" flex flex-col gap-4 p-2">
                    <div>Popularity</div>
                    <div>Latest</div>
                    <div>Discount</div>
                    <div>Price: High to Low</div>
                    <div>Price: Low to High</div>
                    <div>Customer Rating</div>
                </div>
            </div>
        </div>
    )
}

const SmallScreenSort = ({ toggleSort }) => {

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
export { Sort, SmallScreenSort }