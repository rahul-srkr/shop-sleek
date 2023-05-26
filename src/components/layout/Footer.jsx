import { BsTwitter, BsFacebook, BsInstagram, BsPinterest, BsGlobe } from "react-icons/bs"
import logo from "../../../public/assets/logo/logo.png"
import Image from "next/image"
import { categories } from "@/static/data"

const Footer = () => {
    return (
        <div className="flex items-center justify-between p-4 lg:flex-col lg:justify-center lg:gap-4 mt-4">
            <div className="flex items-center gap-4  lg:flex-col lg:justify-center lg:gap-4">
                <Image src={logo} alt="logo" width={150} height={100} />
                <div className="font-bold">©Shop Sleek Private Ltd. 2023</div>
            </div>
            <div className="flex items-center gap-12  lg:flex-col lg:justify-center lg:gap-4">
                <div className="flex items-center gap-6">
                    <BsTwitter className="w-5 h-5" />
                    <BsFacebook className="w-5 h-5" />
                    <BsInstagram className="w-5 h-5" />
                    <BsPinterest className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <BsGlobe className="w-5 h-5" />
                        <p className="font-semibold">English</p>
                    </div>
                    <p className="font-bold">₹INR</p>
                </div>
            </div>
        </div>
    )
}
export default Footer