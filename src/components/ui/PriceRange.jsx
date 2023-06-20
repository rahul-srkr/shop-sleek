"use client"
import Slider from '@mui/material/Slider';
import { useState } from 'react';

const PriceRange = ({ sendData }) => {
    const [value, setValue] = useState([2000, 9000]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        sendData(newValue)
    };
    return (
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

    )
}
export default PriceRange