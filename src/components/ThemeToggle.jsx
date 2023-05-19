"use client"

import { useTheme } from "next-themes";
import {
    BsMoonStars,
    BsSun
} from "react-icons/bs"

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    console.log(theme);
    if (theme === "light") {
        return (
            <div>
                <BsMoonStars className="md:w-4 md:h-4 w-5 h-5 text-light dark:text-dark" onClick={() => setTheme("dark")} />
            </div>
        )
    } else {
        return (
            <div>
                <BsSun className="md:w-4 md:h-4 w-5 h-5" onClick={() => setTheme("light")} />
            </div>
        )
    }
}
export default ThemeToggle