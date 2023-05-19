import Image from "next/image"

const BrandCard = ({ brand }) => {
    return (
        <div className="w-48 min-w-[12rem] h-48 sm:w-24 sm:h-24 sm:min-w-[6rem]">
            <Image src={brand} alt="top brands" width={500} height={500} className="w-full h-full object-cover rounded-full" />
        </div>
    )
}
export default BrandCard