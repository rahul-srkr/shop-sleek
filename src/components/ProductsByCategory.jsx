"use client"
import ProductCard from './cards/ProductCard';
import { useState } from 'react';
import kurta from "../../../public/assets/product/kurta.jpg"
import { Filters, SmallScreenFilters } from './Filters';
import { Sort, SmallScreenSort } from './Sort';
import FilterController from './controller/FilterController';

const ProductsByCategory = () => {

    const [toggleFilters, setToggleFilters] = useState(false);
    const [toggleSort, setToggleSort] = useState(false);

    return (
        <div className='w-full relative'>
            {
                !toggleFilters && <div className='flex gap-4 px-2'>

                    <Filters />

                    {/* products */}
                    <div className={`w-[82%] md:w-full `}>
                        <Sort />
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

            <SmallScreenSort toggleSort={toggleSort} />

            <SmallScreenFilters toggleFilters={toggleFilters} />

            <FilterController
                toggleFilters={toggleFilters}
                toggleSort={toggleSort}
                setToggleFilters={setToggleFilters}
                setToggleSort={setToggleSort}
            />
        </div>
    )
}
export default ProductsByCategory