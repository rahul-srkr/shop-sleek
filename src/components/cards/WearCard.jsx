import Image from "next/image"

const WearCard = ({ wear, name, discount = 10 }) => {
    return (
        <div className="w-56 min-w-[14rem] h-64 sm:w-44 sm:h-56 sm:min-w-[11rem] bgc-initial">
            <div className="w-full h-3/4">
                <Image src={wear} alt="top categories" width={500} height={500} className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-1/4 flex justify-between items-center p-1 sm:flex-col sm:items-start">
                <div className="sm:text-sm sm:flex sm:items-center sm:justify-between w-full">
                    <p className="font-semibold">{name}</p>
                    <p className="text-xl sm:text-sm font-bold">{discount}% off</p>
                </div>
                <button className={`btn-initial p-2 rounded-sm whitespace-nowrap  sm:p-1 sm:text-sm sm:px-2 font-semibold text-white`}>Show Now</button>
            </div>
        </div>
    )
}
export default WearCard