"use client"
import { categories, getCategories } from "@/redux/feature/categories/categoriesSlice"
import { nanoid } from 'nanoid'
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaChevronRight } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import useSWR from "swr"
import { useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation';

const Categories = () => {
    const pathname = usePathname();
    const { status, data: session } = useSession()
    const dispatch = useDispatch()
    const allCategories = useSelector(categories)
    const fetcher = (...args) => fetch(...args).then((res) => res.json())

    const { data, mutate, error, isLoading } = useSWR(
        allCategories.length === 0 ?
            "/api/category" :
            null,
        fetcher
    )

    useEffect(() => {
        data && dispatch(getCategories(data))
    }, [data]);

    const [showCategories, setShowCategories] = useState(true);

    if (typeof window !== "undefined" && window) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                setShowCategories(false)
            } else {
                setShowCategories(true)
            }
        })
    }

    if (pathname.startsWith("/seller")) {
        return
    }

    const renderCategories = (categories) => {
        const allCategories = []
        for (const cate of categories) {
            allCategories.push(
                <div key={nanoid()}>
                    {
                        cate.children.length > 0 ?
                            <h2 className="font-semibold">{cate.name}</h2> :
                            <Link href={`/category/${cate.name}`} className="font-normal">{cate.name}</Link>
                    }
                    {
                        cate.children.length > 0 && renderCategories(cate.children)
                    }
                </div>
            )
        }

        return allCategories
    }

    if (showCategories) {
        return (
            <div className="flex justify-between items-center px-6 md:hidden w-full h-14 relative bgc-initial txt-initial border-b">
                <div className="flex gap-5 w-full">
                    {
                        allCategories.map((cate) => <div key={cate._id} className="group z-auto p-2 hover:bgc-primary rounded-tr-md rounded-tl-md">
                            <div className="cursor-pointer">
                                {cate.name}
                            </div>
                            {
                                cate.children.length > 0 &&
                                <div className="absolute top-12 left-0 w-full h-0 overflow-auto group-hover:h-[70vh] hover:h-[70vh] transition-all duration-300 ease-in-out shadow-lg bgc-initial bgc-primary">
                                    <div className={`flex flex-wrap gap-8 p-3 h-full w-full shadow-full`}>
                                        {
                                            renderCategories(cate.children)
                                        }
                                    </div>
                                </div>
                            }

                        </div>)
                    }
                </div>
                <button className={`flex whitespace-nowrap items-center justify-between px-2 p-1 gap-4 btn-tertiary text-white rounded-sm`}>
                    <Link href={"/seller"}>{
                        session?.user?.role === "seller" ?
                            "Dashboard" :
                            "Became a Seller"
                    }</Link>
                    <FaChevronRight />
                </button>
            </div>
        )
    }

}

const SidebarCategories = () => {
    const dispatch = useDispatch()
    const allCategories = useSelector(categories)
    const fetcher = (...args) => fetch(...args).then((res) => res.json())

    const { data, mutate, error, isLoading } = useSWR(
        "http://localhost:3000/api/category",
        fetcher
    )

    useEffect(() => {
        data && dispatch(getCategories(data))
    }, [data]);

    const renderCategories = (categories) => {
        const allCategories = []
        for (const cate of categories) {
            allCategories.push(
                <li key={cate._id} className="relative">
                    <input type="checkbox" className="absolute h-7 top-0 inset-x-0 peer opacity-0" />
                    <p className="font-semibold">{cate.name}</p>
                    <FaChevronRight className="absolute h-4 w-4 top-1 right-0 transition-all duration-500 peer-checked:rotate-90" />
                    {
                        cate.children.length > 0 &&
                        <ul className="flex flex-col space-y-3 pl-3 overflow-hidden max-h-0 transition-all duration-500 peer-checked:max-h-[500rem] peer-checked:mt-3 text-sm">
                            {
                                renderCategories(cate.children)
                            }
                        </ul>
                    }
                </li>
            )
        }

        return allCategories
    }
    return (
        <ul className="flex flex-col space-y-3 px-2 mt-3">
            {renderCategories(allCategories)}
        </ul>
    )
}
export {
    Categories,
    SidebarCategories
}