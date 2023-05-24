import Drawer from '@mui/material/Drawer';
import SignOutButton from './Buttons/auth/SignOut';
import Link from 'next/link';
import {
    FaUserAlt,
    FaChevronRight
} from "react-icons/fa"
import Categories from '../categories/mobile/Categories';
import Seller from './Buttons/Seller';


const Sidebar = ({ state, session, toggleDrawer }) => {
    return (
        <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
        >
            <div className="w-[250px] bg-sidebar-light dark:bg-sidebar-dark txt">
                <div className="w-full px-2 py-4 bg-sidebar-top-light dark:bg-sidebar-top-dark">
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
                <Seller classname={"mx-2 mt-4 text-lg font-semibold"} />
                {
                    session && <div className="w-[90%] mx-auto mt-4">
                        <SignOutButton classname="w-full font-semibold text-lg" />
                    </div>
                }

            </div>
        </Drawer>
    )
}
export default Sidebar