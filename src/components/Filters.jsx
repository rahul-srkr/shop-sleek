"use client"
import { useState } from "react";
import PriceRange from "./ui/PriceRange";
import { BsCheck } from "react-icons/bs"

const Filters = () => {
    const handleData = (data) => {
        console.log(data);
    }

    return (
        <div className='w-[18%] text-sm min-w-[14rem] md:hidden'>
            <div className='flex justify-between items-center mb-3'>
                <h2 className='text-base font-semibold'>FILTERS</h2>
                <div className='text-sm font-semibold text-red-500'>CLEAR ALL</div>
            </div>
            <form action="" className='border px-3  bgc-primary'>
                <h2 className='font-semibold my-3'>Brand</h2>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" name="" id="" className='w-4 h-4' />
                        <label htmlFor="">Kalani (3359)</label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" name="" id="" className='w-4 h-4' />
                        <label htmlFor="">Kalani (3359)</label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" name="" id="" className='w-4 h-4' />
                        <label htmlFor="">Kalani (3359)</label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" name="" id="" className='w-4 h-4' />
                        <label htmlFor="">Kalani (3359)</label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" name="" id="" className='w-4 h-4' />
                        <label htmlFor="">Kalani (3359)</label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" name="" id="" className='w-4 h-4' />
                        <label htmlFor="">Kalani (3359)</label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" name="" id="" className='w-4 h-4' />
                        <label htmlFor="">Kalani (3359)</label>
                    </div>
                </div>

                <h2 className='font-semibold my-3'>Price</h2>

                <PriceRange sendData={handleData} />

                <h2 className='font-semibold my-3'>Color</h2>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" name="" id="" className='w-4 h-4' />
                        <div className='w-4 h-4 rounded-full bg-red-500'></div>
                        <label htmlFor="">Kalani (3359)</label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" name="" id="" className='w-4 h-4' />
                        <div className='w-4 h-4 rounded-full bg-red-500'></div>
                        <label htmlFor="">Kalani (3359)</label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" name="" id="" className='w-4 h-4' />
                        <div className='w-4 h-4 rounded-full bg-red-500'></div>
                        <label htmlFor="">Kalani (3359)</label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" name="" id="" className='w-4 h-4' />
                        <div className='w-4 h-4 rounded-full bg-red-500'></div>
                        <label htmlFor="">Kalani (3359)</label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" name="" id="" className='w-4 h-4' />
                        <div className='w-4 h-4 rounded-full bg-red-500'></div>
                        <label htmlFor="">Kalani (3359)</label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" name="" id="" className='w-4 h-4' />
                        <div className='w-4 h-4 rounded-full bg-red-500'></div>
                        <label htmlFor="">Kalani (3359)</label>
                    </div>

                </div>
                <h2 className='text-sm font-semibold my-3'>Discount</h2>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-2'>
                        <input type="radio" className='w-4 h-4' />
                        <label htmlFor="">10% and above</label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type="radio" className='w-4 h-4' />
                        <label htmlFor="">10% and above</label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type="radio" className='w-4 h-4' />
                        <label htmlFor="">10% and above</label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type="radio" className='w-4 h-4' />
                        <label htmlFor="">10% and above</label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type="radio" className='w-4 h-4' />
                        <label htmlFor="">10% and above</label>
                    </div>
                </div>
            </form>
        </div>
    )
}

const SmallScreenFilters = ({ toggleFilters }) => {
    const [filters, setFilters] = useState({
        brand: true,
        price: false,
        color: false,
        discount: false
    });

    if (!toggleFilters) {
        return
    }

    return (
        <div className="mt-40">
            <div className='flex items-center justify-between pb-3 border-b px-2'>
                <div>FILTERS</div>
                <div className='text-red-500'>CLEAR ALL</div>
            </div>
            <div className='flex text-lg'>
                <div className='w-[30%] flex flex-col flex-grow bgc-primary'>
                    <div onClick={() => setFilters({ brand: true, color: false, price: false, discount: false })} className={`p-2 ${filters.brand && "bgc-initial"}`}>Brand</div>
                    <div onClick={() => setFilters({ brand: false, color: false, price: true, discount: false })} className={`p-2 ${filters.price && "bgc-initial"}`}>Price</div>
                    <div onClick={() => setFilters({ brand: false, color: true, price: false, discount: false })} className={`p-2 ${filters.color && "bgc-initial"}`}>Color</div>
                    <div onClick={() => setFilters({ brand: false, color: false, price: false, discount: true })} className={`p-2 ${filters.discount && "bgc-initial"}`}>Discount</div>
                </div>
                <div className='w-[70%] bgc-initial'>
                    <div className={`px-2 ${filters.brand ? "block" : "hidden"}`}>
                        <div className='flex items-center gap-6 p-2'>
                            <BsCheck className='w-6 h-6' />
                            <div>Kalani</div>
                        </div>
                        <div className='flex items-center gap-6 p-2'>
                            <BsCheck className='w-6 h-6' />
                            <div>Kalani</div>
                        </div>
                        <div className='flex items-center gap-6 p-2'>
                            <BsCheck className='w-6 h-6' />
                            <div>Kalani</div>
                        </div>
                        <div className='flex items-center gap-6 p-2'>
                            <BsCheck className='w-6 h-6' />
                            <div>Kalani</div>
                        </div>
                        <div className='flex items-center gap-6 p-2'>
                            <BsCheck className='w-6 h-6' />
                            <div>Kalani</div>
                        </div>
                        <div className='flex items-center gap-6 p-2'>
                            <BsCheck className='w-6 h-6' />
                            <div>Kalani</div>
                        </div>
                        <div className='flex items-center gap-6 p-2'>
                            <BsCheck className='w-6 h-6' />
                            <div>Kalani</div>
                        </div>
                        <div className='flex items-center gap-6 p-2'>
                            <BsCheck className='w-6 h-6' />
                            <div>Kalani</div>
                        </div>
                    </div>
                    <div className={`px-2 ${filters.price ? "block" : "hidden"}`}>
                        <PriceRange />
                    </div>
                    <div className={`px-2 ${filters.color ? "block" : "hidden"}`}>
                        <div className='flex items-center gap-6 p-2'>
                            <BsCheck className='w-6 h-6' />
                            <div className='w-9 h-6 bg-red-500' />
                            <div>Red</div>
                        </div>
                        <div className='flex items-center gap-6 p-2'>
                            <BsCheck className='w-6 h-6' />
                            <div className='w-9 h-6 bg-red-500' />
                            <div>Red</div>
                        </div>
                        <div className='flex items-center gap-6 p-2'>
                            <BsCheck className='w-6 h-6' />
                            <div className='w-9 h-6 bg-red-500' />
                            <div>Red</div>
                        </div>
                        <div className='flex items-center gap-6 p-2'>
                            <BsCheck className='w-6 h-6' />
                            <div className='w-9 h-6 bg-red-500' />
                            <div>Red</div>
                        </div>
                        <div className='flex items-center gap-6 p-2'>
                            <BsCheck className='w-6 h-6' />
                            <div className='w-9 h-6 bg-red-500' />
                            <div>Red</div>
                        </div>
                        <div className='flex items-center gap-6 p-2'>
                            <BsCheck className='w-6 h-6' />
                            <div className='w-9 h-6 bg-red-500' />
                            <div>Red</div>
                        </div>
                        <div className='flex items-center gap-6 p-2'>
                            <BsCheck className='w-6 h-6' />
                            <div className='w-9 h-6 bg-red-500' />
                            <div>Red</div>
                        </div>
                    </div>
                    <div className={`px-2 ${filters.discount ? "block" : "hidden"}`}>
                        <div className='flex items-center gap-6 p-2'>
                            <BsCheck className='w-6 h-6' />
                            <div>10% and higher</div>
                        </div>
                        <div className='flex items-center gap-6 p-2'>
                            <BsCheck className='w-6 h-6' />
                            <div>10% and higher</div>
                        </div>
                        <div className='flex items-center gap-6 p-2'>
                            <BsCheck className='w-6 h-6' />
                            <div>10% and higher</div>
                        </div>
                        <div className='flex items-center gap-6 p-2'>
                            <BsCheck className='w-6 h-6' />
                            <div>10% and higher</div>
                        </div>
                        <div className='flex items-center gap-6 p-2'>
                            <BsCheck className='w-6 h-6' />
                            <div>10% and higher</div>
                        </div>
                        <div className='flex items-center gap-6 p-2'>
                            <BsCheck className='w-6 h-6' />
                            <div>10% and higher</div>
                        </div>
                        <div className='flex items-center gap-6 p-2'>
                            <BsCheck className='w-6 h-6' />
                            <div>10% and higher</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Filters, SmallScreenFilters }