import { categories } from "@/static/data"
import { nanoid } from "nanoid"
import {
    FaChevronRight
} from "react-icons/fa"

const Categories = () => {
    return (
        <ul className="flex flex-col space-y-3 px-2 mt-3">
            {
                Object.keys(categories).map(cat => <li key={nanoid()} className="relative">
                    <input type="checkbox" className="absolute h-7 top-0 inset-x-0 peer opacity-0" />
                    <p className="text-lg font-semibold">{cat}</p>
                    <FaChevronRight className="absolute h-4 w-4 top-1 right-0 transition-all duration-500 peer-checked:rotate-90" />
                    <ul className="flex flex-col space-y-3 pl-3 overflow-hidden max-h-0 transition-all duration-500 peer-checked:max-h-[500rem] peer-checked:mt-3">
                        {
                            Object.keys(categories[cat]).map(item => <li key={nanoid()} className="relative">
                                <input type="checkbox" className="absolute h-7 top-0 inset-x-0 peer opacity-0" />
                                <p className="font-semibold">{item}</p>
                                <FaChevronRight className="absolute h-4 w-4 top-1 right-0 transition-all duration-500 peer-checked:rotate-90" />
                                <ul className="flex flex-col space-y-3 pl-3 overflow-hidden max-h-0 transition-all duration-500 peer-checked:max-h-[500rem] peer-checked:mt-3">
                                    {
                                        categories[cat][item].map(sub => <li key={nanoid()} className="relative">
                                            <p className="font-semibold">{sub}</p>
                                        </li>)
                                    }
                                </ul>
                            </li>)
                        }
                    </ul>
                </li>)
            }
        </ul>
    )
}
export default Categories