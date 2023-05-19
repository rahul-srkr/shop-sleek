import { useRef } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import Heading from "./Heading"

const Carousel = ({ children, text }) => {
    let scrollCards = useRef()
    return (
        <div className="w-full p-3 sm:p-2 mt-8 bg-card-light dark:bg-card-dark select-none">
            <div className="flex justify-between items-center">
                <Heading text={text} />
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