"use client"
import { useRef } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const Carousel = ({ children, text }) => {
    let scrollCards = useRef()
    return (
        <div className="w-full p-3 sm:p-2 mt-8 select-none">
            <div className="flex justify-between items-center">
                <h2 className={`text-3xl font-bold sm:text-xl`}>{text}</h2>
                <div className="flex gap-2 sm:hidden">
                    <FaChevronLeft onClick={() => scrollCards.current.scrollLeft -= 500} />
                    <FaChevronRight onClick={() => scrollCards.current.scrollLeft += 500} />
                </div>
            </div>
            <div ref={scrollCards} className="flex gap-5 overflow-x-auto scroll-smooth hide-scrollbar mt-6">
                {children}
            </div>
        </div>
    )
}
export default Carousel