import Slider from '@mui/material/Slider';
import { BsCheck } from "react-icons/bs"

const Filters = ({ setFilters, filters, value, handleChange, toggleFilters }) => {
    if (toggleFilters) {
        return (
            <>
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
        )
    }



}
export default Filters