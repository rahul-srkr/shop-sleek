"use client"
import {
    FaRegUser,
    FaRegHeart,
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
import Image from "next/image"
import logo from "../../../public/assets/logo/logo.png"
import { useSession } from 'next-auth/react'
import Categories from "../categories/desktop/Categories"
import { useState } from "react"
import SignOutButton from "./Buttons/auth/SignOut"
import Link from "next/link"
import Sidebar from "./Sidebar"

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
            <Sidebar state={state} toggleDrawer={toggleDrawer} session={session} />
            <nav className='border-b shadow-md fixed top-0 z-50 w-full bg-light dark:bg-dark txt font-semibold'>
                <div className="flex items-center gap-5 md:gap-0 md:justify-between border-b py-3 px-6 md:px-2 md:border-none text-sm">
                    {/* logo */}
                    <div className="flex items-center gap-5">
                        <GiHamburgerMenu className="w-6 h-6 hidden md:block" onClick={toggleDrawer("left", true)} />
                        <Link href="/">
                            <Image src={logo} alt="logo" width={110} height={70} className="min-w-[7rem]" />
                        </Link>
                    </div>


                    {/* search bar */}
                    <div className="flex-grow flex md:hidden items-center">
                        <input type="search" className='bg-input-light dark:bg-input-dark focus:outline-none w-full p-2 rounded-tl-md rounded-bl-md' placeholder='Search for Products, Brand and More' />
                        <div className="p-[.52rem] bg-button-light rounded-tr-md rounded-br-md">
                            <BiSearch className="w-5 h-5 text-white" />
                        </div>
                    </div>

                    {/* menus */}
                    <div className="flex items-center gap-5">
                        <div className="flex flex-col gap-1 md:hidden relative group cursor-pointer">
                            <FaRegUser className="m-auto icons" />
                            <span className="lg:hidden">Profile</span>
                            <div className="absolute hidden group-hover:block hover:block top-10 left-0">
                                <SignOutButton />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <FaRegHeart className="m-auto icons" />
                            <span className="lg:hidden">Wishlist</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <FiShoppingCart className="m-auto icons" />
                            <span className="lg:hidden">Cart</span>
                        </div>
                        <div className="">
                            <ThemeToggle />
                        </div>
                    </div>
                </div>

                <div className="w-full hidden relative px-2 pb-2 md:flex items-center">
                    <input type="search" className='bg-input-light dark:bg-input-dark focus:outline-none w-full border p-[0.35rem] rounded-tl-md rounded-bl-md' placeholder='Search for Products, Brand and More' />
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