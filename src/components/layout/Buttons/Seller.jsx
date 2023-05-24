import {
    FaChevronRight
} from "react-icons/fa"

const Seller = ({ classname }) => {
    return (
        <div className={`flex whitespace-nowrap items-center justify-between p-2 bg-button-seller text-white rounded-md ${classname}`}>
            <div>Became a Seller</div>
            <FaChevronRight />
        </div>
    )
}
export default Seller