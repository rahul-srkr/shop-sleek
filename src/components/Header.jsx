import Sidebar from "./Sidebar"
import { Categories } from "./Categories"
import Navbar from "./Navbar"

const Header = () => {
    return (
        <>
            <Sidebar />
            <header className="fixed top-0 z-50 w-full">
                <Navbar />
                <Categories />
            </header>
        </>

    )
}

export default Header