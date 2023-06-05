"use client"
import Image from "next/image"
import wear1 from "../../../public/assets/wear-categories/active.jpeg"
import { AiFillCaretDown } from "react-icons/ai"
import { IoMdClose } from "react-icons/io"
import { useState } from "react"
import Modal from "../ui/Modal"

const CartProductCard = () => {
    const [showModal, setShowModal] = useState(false);
    const [changeMode, setChangeMode] = useState(null);
    return (
        <>
            {
                showModal && <Modal onClose={() => setShowModal(false)}>
                    <div>
                        <div className="flex gap-3">
                            <Image src={wear1} width={100} height={100} className="w-20 min-w-[5rem] h-28 sm:h-24 sm:w-16 sm:min-w-[4rem]" />
                            <div>
                                <h2 className="text-lg font-semibold sm:text-base">Women Yellow Printed Top</h2>
                                <div className="space-x-2 font-semibold sm:text-sm">
                                    <span>₹767</span>
                                    <del className="text-red-500">1500</del>
                                    <span className="txt-primary">(68%)</span>
                                </div>
                            </div>
                        </div>
                        {
                            changeMode === "size" && <div className="mt-3">
                                <h2 className="text-lg font-semibold sm:text-base">Select Size</h2>
                                <div className="flex items-center gap-3 flex-wrap mt-3 txt-primary">
                                    <div className="border w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center font-semibold rounded-full bgc-primary sm:text-sm">
                                        xs
                                    </div>
                                    <div className="border w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center font-semibold rounded-full sm:text-sm">
                                        sm
                                    </div>
                                    <div className="border w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center font-semibold rounded-full sm:text-sm">
                                        lg
                                    </div>
                                    <div className="border w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center font-semibold rounded-full sm:text-sm">
                                        xl
                                    </div>
                                    <div className="border w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center font-semibold rounded-full sm:text-sm">
                                        2xl
                                    </div>
                                    <div className="border w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center font-semibold rounded-full sm:text-sm">
                                        3xl
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            changeMode === "quantity" && <div className="mt-3">
                                <h2 className="text-lg font-semibold sm:text-base">Select Quantity</h2>
                                <div className="flex items-center gap-3 flex-wrap mt-3 txt-primary">
                                    <div className="border w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center font-semibold rounded-full bgc-primary sm:text-sm">
                                        1
                                    </div>
                                    <div className="border w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center font-semibold rounded-full sm:text-sm">
                                        2
                                    </div>
                                    <div className="border w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center font-semibold rounded-full sm:text-sm">
                                        3
                                    </div>
                                    <div className="border w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center font-semibold rounded-full sm:text-sm">
                                        4
                                    </div>
                                    <div className="border w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center font-semibold rounded-full sm:text-sm">
                                        5
                                    </div>
                                    <div className="border w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center font-semibold rounded-full sm:text-sm">
                                        6
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            changeMode === "color" && <div className="mt-3">
                                <h2 className="text-lg font-semibold sm:text-base">Select Color</h2>
                                <div className="flex items-center gap-3 flex-wrap mt-3">
                                    <div className="bg-blue-500 h-6 w-6 sm:h-5 sm:w-5 rounded-full" />
                                    <div className="bg-blue-500 h-6 w-6 sm:h-5 sm:w-5 rounded-full" />
                                    <div className="bg-blue-500 h-6 w-6 sm:h-5 sm:w-5 rounded-full" />
                                    <div className="bg-blue-500 h-6 w-6 sm:h-5 sm:w-5 rounded-full" />
                                    <div className="bg-blue-500 h-6 w-6 sm:h-5 sm:w-5 rounded-full" />
                                    <div className="bg-blue-500 h-6 w-6 sm:h-5 sm:w-5 rounded-full" />
                                    <div className="bg-blue-500 h-6 w-6 sm:h-5 sm:w-5 rounded-full" />
                                </div>
                            </div>
                        }
                        <button className="w-full btn-secondary p-2 mt-4 sm:p-1 sm:text-sm">Done</button>
                    </div>
                </Modal>
            }

            <div className="shadow-md border p-3 sm:p-1 bgc-primary">
                <div className="flex gap-4 flex-grow sm:gap-1 xs:flex-col xs:gap-2">
                    <Image src={wear1} width={0} height={0} alt="cart image" className="w-36 min-w-[9rem] h-44 xs:w-full" />
                    <div className="flex flex-col gap-3 flex-grow  justify-between">
                        <div className="flex items-center justify-between">
                            <p className="text-lg font-semibold line-clamp-1 md:line-clamp-2 sm:text-base">Women Yellow Printed Top</p>
                            <IoMdClose className="self-start dark:text-white p-1 hover:bgc-initial rounded-full w-6 h-6" />
                        </div>

                        <div className="flex gap-2 items-center text-sm font-semibold txt-primary sm:text-xs">
                            <div
                                onClick={() => {
                                    setShowModal(true)
                                    setChangeMode("size")
                                }
                                }
                                className="flex items-center gap-1 border py-1 px-2 sm:p-1 bgc-initial">
                                <span>Size : M</span>
                                <AiFillCaretDown />
                            </div>
                            <div
                                onClick={() => {
                                    setShowModal(true)
                                    setChangeMode("quantity")
                                }
                                }
                                className="flex items-center gap-1 border py-1 px-2 sm:p-1 bgc-initial">
                                <span>Qyt : 1</span>
                                <AiFillCaretDown />
                            </div>
                        </div>
                        <div
                            onClick={() => {
                                setShowModal(true)
                                setChangeMode("color")
                            }
                            }
                            className="flex items-center gap-1 text-sm font-semibold txt-primary border py-1 px-2 w-fit sm:text-xs bgc-initial">
                            <div className="w-4 h-4 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                            <span>Color : Red</span>
                            <AiFillCaretDown />
                        </div>
                        <div className="flex items-center justify-between md:flex-col md:gap-3 md:items-start md:justify-start sm:text-sm">
                            <div className="space-x-2 font-semibold">
                                <span>₹767</span>
                                <del className="text-red-500">1500</del>
                                <span className="txt-primary">(68%)</span>
                            </div>
                            <button className="px-2 py-1 rounded-sm btn-secondary text-white font-semibold text-sm sm:text-xs ">MOVE TO WISHLIST</button>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}
export default CartProductCard