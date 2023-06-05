"use client"
import { ThemeProvider } from "next-themes"
import { SessionProvider } from "next-auth/react"
import { Toaster } from "react-hot-toast";

const Provider = ({ children }) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="light">
            <SessionProvider>
                <Toaster position="top-center" reverseOrder={false} />
                {children}
            </SessionProvider>
        </ThemeProvider>
    )
}
export default Provider