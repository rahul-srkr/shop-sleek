import Heading from "./Heading"

const Products = ({ children, text }) => {
    return (
        <div>
            <Heading text={text} classname="my-6" />
            <div className="grid grid-cols-5 gap-6 sm:gap-0 sm:gap-y-4 sm:grid-cols-2 xs:grid-cols-1 lg:grid-cols-3 md:gap-3 xl:grid-cols-4">
                {children}
            </div>
        </div>
    )
}
export default Products