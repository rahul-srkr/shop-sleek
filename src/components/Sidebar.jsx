"use client"
import Drawer from '@mui/material/Drawer';
import Link from 'next/link';
import {
    FaUserAlt,
    FaChevronRight
} from "react-icons/fa"
import SignOutButton from './auth/SignOut';
import { useState } from 'react';
import { useSession } from 'next-auth/react'
import { useDispatch, useSelector } from 'react-redux';
import { drawerState, setDrawer } from '@/redux/feature/sidebar/sidebarSlice';
import { SidebarCategories } from './Categories';

const Sidebar = () => {
    const sidebarState = useSelector(drawerState)
    const dispatch = useDispatch()
    const { status, data: session } = useSession()

    return (
        <Drawer
            anchor={"left"}
            open={sidebarState}
            onClose={() => dispatch(setDrawer(false))}
        >
            <div className="w-[250px] bgc-initial flex flex-col flex-grow txt-initial">
                <div className="w-full px-2 py-4 bgc-primary">
                    {
                        session ? <img src={session?.user.image} className="object-cover rounded-full w-20 h-20 mx-auto mb-3 border bg-white" /> :
                            <FaUserAlt className="w-12 h-12 mx-auto mb-3" />
                    }
                    {
                        session ? <div className="flex items-center justify-between">
                            <p className="text-xl font-semibold">{session?.user.name.toLocaleUpperCase().split(" ")[0]}</p>
                            <FaChevronRight className="w-5 h-5" />
                        </div> :
                            <Link href="/login" className="flex items-center justify-between" onClick={() => dispatch(setDrawer(false))}>
                                <p className="text-xl font-semibold">Login In</p>
                                <FaChevronRight className="w-5 h-5" />
                            </Link>
                    }

                </div>
                < SidebarCategories />
                <button className={`flex whitespace-nowrap items-center justify-between p-1 btn-tertiary rounded-sm mx-2 mt-4 font-semibold gap-5`}>
                    <span>Became a Seller</span>
                    <FaChevronRight className="w-3 h-3" />
                </button>
                {
                    session &&
                    <SignOutButton classname="font-semibold gap-5 !p-1 mt-4 mx-2" />
                }

            </div>
        </Drawer>
    )
}
export default Sidebar