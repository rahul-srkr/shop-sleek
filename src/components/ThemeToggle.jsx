"use client"
import { useTheme } from "next-themes";
import {
    BsMoonStars,
    BsSunFill
} from "react-icons/bs"

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div>
            <BsMoonStars className="w-5 h-5 text-light dark:text-dark" onClick={() => theme === "light" ? setTheme("dark") : setTheme("light")} />
        </div>
    )
}
export default ThemeToggle