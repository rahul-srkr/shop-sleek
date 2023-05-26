import Image from "next/image"
const Slides = ({ img, heading, paragraph }) => {
    return (
        <>
            <Image src={img} alt="pexels-fábio-scaletta-1436990" width={1400} height={500} className="w-full h-full object-cover" />
            <div className="absolute top-[50%] mx-6 text-white z-30 w-[75%] md:w-[85%]">
                <h2 className="text-4xl 3xl:text-3xl lg:text-2xl sm:text-xl xs:text-lg">{heading}</h2>
                <p className="font-semibold text-lg 3xl:text-base lg:text-sm sm:text-xs">{paragraph}</p>
            </div>
        </>
    )
}
export default Slides