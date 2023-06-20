import { BsSliders2 } from "react-icons/bs"
import { TbArrowsSort } from "react-icons/tb"

const FilterController = ({ toggleFilters, toggleSort, setToggleFilters, setToggleSort }) => {

    return (
        <>
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
                        <div onClick={() => {
                            setToggleFilters(true)
                            setToggleSort(false)
                        }} className='w-1/2 text-center p-2 flex items-center gap-2 justify-center bgc-initiak'>
                            <BsSliders2 className='w-5 h-5' />
                            <div>FILTER</div>
                        </div>
                    </div>
            }
        </>
    )
}
export default FilterController