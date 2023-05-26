import Drawer from '@mui/material/Drawer';
import Link from 'next/link';
import {
    FaUserAlt,
    FaChevronRight
} from "react-icons/fa"
import SignOutButton from '../auth/SignOut';
import Categories from '../products/categories/mobile/Categories';


const Sidebar = ({ state, session, toggleDrawer }) => {
    return (
        <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
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
                            <Link href="/login" className="flex items-center justify-between" onClick={toggleDrawer("left", false)}>
                                <p className="text-xl font-semibold">Login In</p>
                                <FaChevronRight className="w-5 h-5" />
                            </Link>
                    }

                </div>
                <Categories />
                <button className={`flex whitespace-nowrap items-center justify-between p-1 bg-tertiary-light dark:bg-button-tertiary-dark hover:bg-button-tertiary-hover-light dark:hover:bg-button-tertiary-hover-dark text-white rounded-sm mx-2 mt-4 font-semibold gap-5`}>
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