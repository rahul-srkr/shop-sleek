import Heading from "../../Heading"

const Products = ({ children, text }) => {
    return (
        <div>
            <Heading text={text} classname="my-6" />
            <div className="grid grid-cols-5 gap-6 xs:grid-cols-1 lg:gap-2 lg:grid-cols-2 2xl:gap-4 2xl:grid-cols-3 4xl:grid-cols-4 ">
                {children}
            </div>
        </div>
    )
}
export default Products