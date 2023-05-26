"use client"
import ProductCard from '@/components/cards/ProductCard';
import { useState } from 'react';
import { VscChevronDown } from "react-icons/vsc";
import kurta from "../../../public/assets/product/kurta.jpg"
import MobileFilters from '@/components/products/filters/mobile/Filters';
import MobileSort from '@/components/products/sort/mobile/Sort';
import Sort from '@/components/products/sort/desktop/Sort';
import Filters from '@/components/products/filters/desktop/Filters';
import FilterControler from '@/components/products/filters/mobile/FilterControler';

const Page = () => {
    const [value, setValue] = useState([2000, 9000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [toggleFilters, setToggleFilters] = useState(false);
    const [toggleSort, setToggleSort] = useState(false);

    const [filters, setFilters] = useState({
        brand: true,
        price: false,
        color: false,
        discount: false
    });
    return (
        <div className='w-full relative'>
            <div className='mb-8 md:hidden  px-2'>
                <div className='text-sm mb-2 txt-primary'>Home/Kurtis For Women</div>
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
                        <div className='text-sm p-2 border flex items-center w-64 justify-between float-right xl:float-none xl:mb-2 md:hidden relative group'>
                            <div>
                                Sort by : <span className='font-semibold'>Popularity</span>
                            </div>
                            <VscChevronDown className='w-4 h-4' />
                            <Sort />
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

            <MobileSort toggleSort={toggleSort} />

            <MobileFilters
                setFilters={setFilters}
                filters={filters}
                value={value}
                handleChange={handleChange}
                toggleFilters={toggleFilters}
            />

            <FilterControler
                toggleFilters={toggleFilters}
                setToggleFilters={setToggleFilters}
                toggleSort={toggleSort}
                setToggleSort={setToggleSort}
            />
        </div>
    )
}
export default Page