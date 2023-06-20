"use client"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { MdOutlineCreateNewFolder, MdOutlineFolderCopy } from "react-icons/md"
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

const Layout = ({ children }) => {
    const pathname = usePathname()
    const router = useRouter()

    return (
        <div>
            <div className="flex">
                <div className="w-[15%]">
                    <ul className="text-sm pl-2 pt-2 flex flex-col gap-5 w-full">
                        <li
                            className={`flex items-center gap-3 cursor-pointer`}
                            onClick={() => router.push("/")}
                        >
                            <AiOutlineArrowLeft className="w-6 h-6" />
                            <p className="text-base font-medium">Back To Home</p>
                        </li>
                        <li
                            className={`flex items-center gap-3 
                        ${pathname === "/seller/dashboard/all-products" && "bgc-primary p-2"} 
                        transition-all duration-300 rounded-tl-md rounded-bl-md cursor-pointer`}
                            onClick={() => router.push("/seller/dashboard/all-products")}
                        >
                            <MdOutlineFolderCopy className="w-5 h-5" />
                            <p>All Product</p>
                        </li>
                        <li className={`flex items-center gap-3 ${pathname === "/seller/dashboard/create-product" && "bgc-primary p-2"} transition-all duration-300 ease-in-out rounded-tl-md rounded-bl-md  cursor-pointer`} onClick={() => router.push("/seller/dashboard/create-product")}>
                            <MdOutlineCreateNewFolder className="w-5 h-5" />
                            <p>Create Product</p>
                        </li>
                    </ul>
                </div>
                <div className="w-[85%]">
                    {children}
                </div>
            </div>
        </div>
    )
}
export default Layout