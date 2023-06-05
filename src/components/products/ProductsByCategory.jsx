"use client"
import ProductCard from '../cards/ProductCard';
import { useState } from 'react';
import { VscChevronDown } from "react-icons/vsc";
import kurta from "../../../public/assets/product/kurta.jpg"
import { BsSliders2 } from "react-icons/bs"
import { TbArrowsSort } from "react-icons/tb"
import { VscFlame } from "react-icons/vsc"
import { HiSpeakerphone, HiTrendingUp, HiTrendingDown } from "react-icons/hi"
import { TbShoppingCartDiscount, TbStars } from "react-icons/tb"
import { BsCheck } from "react-icons/bs"
import Slider from '@mui/material/Slider';

const ProductsByCategory = () => {

    const [value, setValue] = useState([2000, 9000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [filters, setFilters] = useState({
        brand: true,
        price: false,
        color: false,
        discount: false
    });

    const [toggleFilters, setToggleFilters] = useState(false);
    const [toggleSort, setToggleSort] = useState(false);

    return (
        <div className='w-full relative'>
            {
                !toggleFilters && <div className='flex gap-4 px-2'>

                    {/* filters */}
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
                            <div>
                                <div className='flex items-center justify-between text-center mb-2'>
                                    <div>
                                        <div>min</div>
                                        <div className='font-semibold'>{value[0]}</div>
                                    </div>
                                    <div>
                                        <div>max</div>
                                        <div className='font-semibold'>{value[1]}</div>
                                    </div>
                                </div>
                                <Slider
                                    value={value}
                                    min={300}
                                    step={100}
                                    max={10000}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                />
                            </div>
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

                    {/* products */}
                    <div className={`w-[82%] md:w-full `}>
                        <div className='text-sm p-2 border flex items-center w-64 justify-between float-right xl:float-none xl:mb-2 md:hidden relative group'>
                            <div>
                                Sort by : <span className='font-semibold'>Popularity</span>
                            </div>
                            <VscChevronDown className='w-4 h-4' />
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
                        </div>
                        <div>
                            <h2 className={`text-3xl font-bold sm:text-xl mb-6 lg:text-xl`}>Kurtas</h2>
                            <div className="grid grid-cols-4 gap-4 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 2xl:gap-1 2xl:grid-cols-2 4xl:gap-3 4xl:grid-cols-3">
                                <ProductCard
                                    img={kurta}
                                    name={"Kurta with Palazzos"}
                                    price={3000}
                                    discount={5000}
                                    percent={70}
                                    star={4.5}
                                    review={14}
                                />
                                <ProductCard
                                    img={kurta}
                                    name={"Kurta with Palazzos"}
                                    price={3000}
                                    discount={5000}
                                    percent={70}
                                    star={4.5}
                                    review={14}
                                />
                                <ProductCard
                                    img={kurta}
                                    name={"Kurta with Palazzos"}
                                    price={3000}
                                    discount={5000}
                                    percent={70}
                                    star={4.5}
                                    review={14}
                                />
                                <ProductCard
                                    img={kurta}
                                    name={"Kurta with Palazzos"}
                                    price={3000}
                                    discount={5000}
                                    percent={70}
                                    star={4.5}
                                    review={14}
                                />
                                <ProductCard
                                    img={kurta}
                                    name={"Kurta with Palazzos"}
                                    price={3000}
                                    discount={5000}
                                    percent={70}
                                    star={4.5}
                                    review={14}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            }

            {/* mobile sort */}
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
            {
                toggleFilters && <>
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
                                <div className='flex items-center justify-between text-center mb-2'>
                                    <div>
                                        <div>min</div>
                                        <div className='font-semibold'>{value[0]}</div>
                                    </div>
                                    <div>
                                        <div>max</div>
                                        <div className='font-semibold'>{value[1]}</div>
                                    </div>
                                </div>
                                <Slider
                                    value={value}
                                    min={300}
                                    step={100}
                                    max={10000}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                />
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
                </>
            }

            {
                toggleFilters ? <div className='flex items-center fixed bottom-0 w-full bgc-initial'>
                    <div onClick={() => setToggleFilters(false)} className='w-1/2 text-center p-4'>
                        <div>CANCEL</div>
                    </div>
                    <div className='w-1/2 text-center p-2'>
                        <div>APPLY</div>
                    </div>
                </div> :
                    <div className='hidden md:flex items-center fixed bottom-0 w-full bgc-initial'>
                        <div className='w-1/2 text-center p-4 flex items-center gap-2 justify-center'>
                            <TbArrowsSort className='w-5 h-5' />
                            <div onClick={() => setToggleSort(!toggleSort)}>SORT</div>
                        </div>
                        <div onClick={() => setToggleFilters(true)} className='w-1/2 text-center p-2 flex items-center gap-2 justify-center bgc-initiak'>
                            <BsSliders2 className='w-5 h-5' />
                            <div>FILTER</div>
                        </div>
                    </div>
            }
        </div>
    )
}
export default ProductsByCategory