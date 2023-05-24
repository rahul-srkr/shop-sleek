import Heading from "@/components/Heading"

const Products = ({ children, text }) => {
    return (
        <div>
            <Heading text={text} classname="mb-6 lg:text-xl" />
            <div className="grid grid-cols-4 gap-4 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 2xl:gap-1 2xl:grid-cols-2 4xl:gap-3 4xl:grid-cols-3">
                {children}
            </div>
        </div>
    )
}
export default Products