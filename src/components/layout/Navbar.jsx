"use client"
import {
    FaRegUser,
    FaRegHeart,
    FaChevronRight
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
import ThemeToggle from "@/components/ThemeToggle"
import Button from "@/components/ui/Button"
import Image from "next/image"
import logo from "../../../public/assets/logo/logo.png"
import { signOut, useSession } from 'next-auth/react'
import Categories from "../Categories"
import Drawer from '@mui/material/Drawer';
import { useState } from "react"
import { categories } from "@/static/data"
import { nanoid } from "nanoid"
import SignOutButton from "../SignOut"

const Navbar = () => {
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const { status, data: session } = useSession()

    return (
        <>
            <Drawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
            >
                <div className="w-[250px]">
                    <div className="w-full px-2 py-4 bg-card-light dark:bg-card-dark">
                        <img src={session?.user.image} className="object-cover rounded-full w-20 h-20 mx-auto mb-3 border bg-white" />
                        <div className="flex items-center justify-between">
                            <p className="text-xl font-semibold">{session?.user.name.toLocaleUpperCase().split(" ")[0]}</p>
                            <FaChevronRight className="w-5 h-5" />
                        </div>
                    </div>
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
                                            <p className="text-lg font-semibold">{item}</p>
                                            <FaChevronRight className="absolute h-4 w-4 top-1 right-0 transition-all duration-500 peer-checked:rotate-90" />
                                            <ul className="flex flex-col space-y-3 pl-3 overflow-hidden max-h-0 transition-all duration-500 peer-checked:max-h-[500rem] peer-checked:mt-3">
                                                {
                                                    categories[cat][item].map(sub => <li key={nanoid()} className="relative">
                                                        <p className="text-lg font-semibold">{sub}</p>
                                                    </li>)
                                                }
                                            </ul>
                                        </li>)
                                    }
                                </ul>
                            </li>)
                        }
                    </ul>
                    <SignOutButton />
                </div>
            </Drawer>
            <nav className='border-b shadow-md fixed top-0 z-50 w-full bg-light dark:bg-dark txt font-semibold'>
                <div className="flex items-center gap-5 sm:gap-0 sm:justify-between border-b py-3 px-6 sm:px-2 sm:border-none">
                    {/* logo */}
                    <div className="flex items-center gap-3">
                        <GiHamburgerMenu className="w-6 h-6 hidden sm:block" onClick={toggleDrawer("left", true)} />
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
                        <div className="flex flex-col gap-1 sm:hidden relative group cursor-pointer">
                            <FaRegUser className="m-auto icons" />
                            <span className="md:hidden">Profile</span>
                            <div className="absolute hidden group-hover:block hover:block top-10 left-0">
                                <SignOutButton />
                            </div>
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
                <Categories />
            </nav>
        </>

    )
}
export default Navbar