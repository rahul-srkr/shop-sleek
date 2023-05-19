import {
    FaRegUser,
    FaRegHeart,
    FaOpencart
} from "react-icons/fa"

import {
    BiSearch
} from "react-icons/bi"
import {
    FiShoppingCart
} from "react-icons/fi"
import {
    GiHamburgerMenu
} from "react-icons/gi"
import { categories } from "@/static/data"
import ThemeToggle from "@/components/ThemeToggle"
import Button from "@/components/ui/Button"
import Image from "next/image"
import logo from "../../../public/assets/logo/logo.png"

const Navbar = () => {
    return (
        <nav className='text-sm border-b shadow-md fixed top-0 z-50 w-full bg-light dark:bg-dark txt font-semibold'>
            <div className="flex items-center gap-5 sm:gap-0 sm:justify-between border-b py-3 px-6 sm:px-2 sm:border-none">
                {/* logo */}
                <div className="flex items-center gap-3">
                    <GiHamburgerMenu className="w-6 h-6 hidden sm:block" />
                    <Image src={logo} alt="logo" width={110} height={70} />
                </div>


                {/* search bar */}
                <div className="flex-grow flex sm:hidden items-center">
                    <input type="search" className='bg-input-light dark:bg-input-dark focus:outline-none w-full p-2 rounded-tl-md rounded-bl-md' placeholder='Search for Products, Brand and More' />
                    <div className="p-[.52rem] bg-button-light rounded-tr-md rounded-br-md">
                        <BiSearch className="w-5 h-5 text-white" />
                    </div>
                </div>

                {/* menus */}
                <div className="flex items-center gap-5">
                    <div className="flex flex-col gap-1 sm:hidden">
                        <FaRegUser className="m-auto icons" />
                        <span className="md:hidden">Profile</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <FaRegHeart className="m-auto icons" />
                        <span className="md:hidden">Wishlist</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <FiShoppingCart className="m-auto icons" />
                        <span className="md:hidden">Cart</span>
                    </div>
                    <div className="">
                        <ThemeToggle />
                    </div>
                </div>
            </div>

            <div className="w-full hidden relative px-2 pb-2 sm:flex items-center">
                <input type="search" className='bg-input-light dark:bg-input-dark focus:outline-none w-full border p-2 rounded-tl-md rounded-bl-md' placeholder='Search for Products, Brand and More' />
                <div className="p-[.55rem] bg-button-light rounded-tr-md rounded-br-md">
                    <BiSearch className="w-5 h-5 text-white" />
                </div>
            </div>
            {/* categories */}
            <div className="flex justify-between items-center py-3 text-sm px-6 sm:hidden">
                <div className="flex gap-5">
                    {
                        categories.map((item, i) => <span key={i}>{item}</span>)
                    }
                </div>
                <Button>
                    Become a seller
                </Button>
            </div>
        </nav>
    )
}
export default Navbar