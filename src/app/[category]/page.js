"use client"
import ProductCard from '@/components/cards/ProductCard';
import { useState } from 'react';
import { VscChevronDown } from "react-icons/vsc"
import { BsSliders2 } from "react-icons/bs"
import { TbArrowsSort } from "react-icons/tb"
import kurta from "../../../public/assets/product/kurta.jpg"
import Products from '@/components/products/categoryPage/Products';
import Filters from '@/components/filters/desktop/Filters';
import MobileFilters from '@/components/filters/mobile/Filters';

const Page = () => {
    const [value, setValue] = useState([2000, 9000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [toggleFilters, setToggleFilters] = useState(false);

    const [filters, setFilters] = useState({
        brand: true,
        price: false,
        color: false,
        discount: false
    });
    return (
        <div className='w-full relative'>
            <div className='mb-8 md:hidden  px-2'>
                <div className='text-xs mb-2'>Home/Kurtis For Women</div>
                <div className='flex items-center gap-1 text-sm '>
                    <h1 className='font-semibold'>Kurtis For Women</h1>
                    <span>-</span>
                    <span>36855 items</span>
                </div>
            </div>

            {
                !toggleFilters && <div className='flex gap-4 px-2'>
                    {/* filters */}
                    <Filters handleChange={handleChange} value={value} />
                    {/* products */}

                    <div className={`w-[82%] md:w-full `}>
                        <div className='text-sm p-2 border flex items-center w-64 justify-between float-right xl:float-none xl:mb-2 md:hidden'>
                            <div>
                                Sort by : <span className='font-semibold'>Popularity</span>
                            </div>
                            <VscChevronDown className='w-4 h-4' />
                        </div>
                        <Products text={"Kurta's"}>
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
                        </Products>
                    </div>
                </div>
            }


            {
                toggleFilters && <MobileFilters setFilters={setFilters} filters={filters} value={value} handleChange={handleChange} />

            }
            {
                toggleFilters ? <div className='flex items-center fixed bottom-0 w-full bg-light dark:bg-dark'>
                    <div onClick={() => setToggleFilters(false)} className='w-1/2 text-center p-4'>
                        <div>CANCEL</div>
                    </div>
                    <div className='w-1/2 text-center p-2'>
                        <div>APPLY</div>
                    </div>
                </div> :
                    <div className='hidden md:flex items-center fixed bottom-0 w-full bg-light dark:bg-dark'>
                        <div className='w-1/2 text-center p-4 flex items-center gap-2 justify-center'>
                            <TbArrowsSort className='w-5 h-5' />
                            <div>SORT</div>
                        </div>
                        <div onClick={() => setToggleFilters(true)} className='w-1/2 text-center p-2 flex items-center gap-2 justify-center'>
                            <BsSliders2 className='w-5 h-5' />
                            <div>FILTER</div>
                        </div>
                    </div>
            }
        </div>
    )
}
export default Page