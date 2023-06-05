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
// import Categories from "../categories/desktop/Categories"
import { useState } from "react"
import Link from "next/link"
import Sidebar from "./Sidebar"
import SignOutButton from "../auth/SignOut"
import Categories from "../products/categories/desktop/Categories"

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/user', {
                method: 'POST',
                headers: { "Content_Type": "application/json" },
                body: JSON.stringify({
                    name: "rahul",
                    email: "rahul@gmail.com"
                })
            })
            // Set the status based on the response from the API route
            if (response.status === 200) {
                console.log("ok");
            } else {
                console.log("error");
            }

        } catch (e) {
            console.log(e)
        }

    }



    return (
        <>
            <Sidebar state={state} toggleDrawer={toggleDrawer} session={session} />
            <nav className='border-b shadow-md fixed top-0 z-50 w-full font-semibold bgc-initial'>
                <div className="flex items-center gap-5 md:gap-0 md:justify-between border-b h-20 px-4 md:px-2 md:border-none text-sm">
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
                        <div className="p-[.5rem] btn-secondary rounded-tr-md rounded-br-md">
                            <BiSearch className="w-5 h-5 text-white" />
                        </div>
                    </div>

                    {/* menus */}
                    <div className="flex items-center gap-7 xs:gap-5">
                        <Link href={`/my/profile`} className="flex flex-col gap-1 md:hidden cursor-pointer">
                            <FaRegUser className="m-auto w-5 h-5" />
                            <span className="lg:hidden">{session ? 'Profile' : 'Login'}</span>
                        </Link>
                        <div onClick={handleSubmit} className="flex flex-col gap-1 relative">
                            <FaRegHeart className="m-auto w-5 h-5" />
                            <span className="lg:hidden">Wishlist</span>
                            <div className="absolute w-4 h-4 rounded-full text-[0.6rem] bg-red-500 -top-2 right-0 text-center text-white flex items-center justify-center lg:-right-3 lg:-top-3">20</div>
                        </div>
                        <Link href={"/checkout/cart"} className="flex flex-col gap-1 relative">
                            <FiShoppingCart className="m-auto w-5 h-5" />
                            <span className="lg:hidden">Cart</span>
                            <div className="absolute w-4 h-4 rounded-full text-[0.6rem] bg-red-500 -top-2 -right-2 text-center text-white flex items-center justify-center lg:-right-3 lg:-top-3">20</div>
                        </Link>
                        <div className="self-start">
                            <ThemeToggle />
                        </div>
                    </div>
                </div>

                <div className="w-full hidden relative px-2 pb-2 md:flex items-center">
                    <input type="search" className='bg-input-light dark:bg-input-dark focus:outline-none w-full p-[0.42rem] rounded-tl-md rounded-bl-md' placeholder='Search for Products, Brand and More' />
                    <div className="p-[.55rem] bg-button-light rounded-tr-md rounded-br-md btn-secondary">
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