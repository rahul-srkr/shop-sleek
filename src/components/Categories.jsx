import { categories } from "@/static/data"
import Button from "./ui/Button"
import { nanoid } from 'nanoid'

const Categories = () => {
    const adjust = (cat) => {
        if (cat === "Men") {
            return { col: "repeat(5, minmax(0, 1fr))", wid: "60rem" }
        }

        if (cat === "Women") {
            return { col: "repeat(4, minmax(0, 1fr))", wid: "55rem" }
        }

        if (cat === "Kids") {
            return { col: "repeat(3, minmax(0, 1fr))", wid: "40rem" }
        }
    }
    return (
        <div className="flex justify-between items-center px-6 sm:hidden w-full">
            <div className="flex gap-5 w-full">
                {
                    Object.keys(categories).map((cat, i) => <div key={nanoid()} className="group py-3  z-auto">
                        <div className="cursor-pointer">
                            {cat}
                        </div>
                        <div className="absolute top-28 left-6 max-w-[80vw] max-h-0 overflow-auto group-hover:max-h-[70vh] hover:max-h-[70vh] transition-all duration-300 ease-in-out">
                            {/* <div className="h-6 w-full bg-transparent"></div> */}
                            <div style={{ display: "grid", gridTemplateColumns: adjust(cat).col, width: adjust(cat).wid, minWidth: adjust(cat).wid }} className={`bg-white p-3 h-auto shadow-full`}>
                                {
                                    Object.keys(categories[cat]).map(item => <div key={nanoid()}>
                                        <h2 className="font-semibold">{item}</h2>
                                        <div>
                                            {
                                                categories[cat][item].map(sub => <div key={nanoid()} className="text-sm leading-7">{sub}</div>)
                                            }
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <Button size={"md"}>
                Become a seller
            </Button>
        </div>
    )
}
export default Categories