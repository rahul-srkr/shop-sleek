import Slider from '@mui/material/Slider';

const Filters = ({ value, handleChange }) => {
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
    )
}
export default Filters