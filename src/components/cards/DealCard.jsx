import Image from "next/image"

const DealCard = ({ img, brand }) => {
    return (
        <div className="w-56 min-w-[14rem] h-56 sm:w-32 sm:h-32 sm:min-w-[8rem] flex border rounded-md shadow-lg bg-light dark:bg-dark">
            <div className="w-1/2 h-full">
                <Image src={img} alt="top deals" width={200} height={500} className="w-full h-full object-cover" />
            </div>
            <div className="w-1/2 h-full">
                <div className="h-1/2 border-b flex flex-col justify-center bg-green-500">
                    <p className="text-center text-lg font-semibold text-white">Top Brands</p>
                    <p className="text-center text-red-500 text-xl font-semibold">60% off</p>
                </div>
                <div className="h-1/2 flex items-center">
                    <Image src={brand} alt="brands" width={500} height={500} className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    )
}
export default DealCard