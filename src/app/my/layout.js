import SignOutButton from "@/components/auth/SignOut"
import Link from "next/link"

const Layout = ({ children }) => {
    return (
        <div style={{ minHeight: "calc(100vh - 10rem)" }} className="mx-auto max-w-[65rem] 5xl:mx-2 mt-40">
            <h1>Rahul Sarkar</h1>
            <div className="flex gap-4">
                <div className="w-[20%] border p-3 bgc-primary">
                    <div>
                        <h2 className="my-2 text-sm txt-primary font-medium">Account</h2>
                        <div className="flex flex-col gap-1">
                            <Link href={"/my/profile"}>Profile</Link>
                            <Link href={"/my/address"}>Address</Link>
                        </div>
                    </div>
                    <div className="flex">
                        <SignOutButton classname={"flex-grow text-sm !py-1 !px-2 font-semibold"} />
                    </div>
                </div>
                <div className="w-[80%] border p-3 bgc-primary">
                    {children}
                </div>
            </div>
        </div>
    )
}
export default Layout