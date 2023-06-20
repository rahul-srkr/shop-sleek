"use client"
import { ThemeProvider } from "next-themes"
import { SessionProvider } from "next-auth/react"
import { Toaster } from "react-hot-toast";
import ReduxProvider from "@/redux/ReduxProvider";


const Provider = ({ children }) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="light">
            <SessionProvider>
                <ReduxProvider>
                    <Toaster position="top-center" reverseOrder={false} />
                    {children}
                </ReduxProvider>
            </SessionProvider>
        </ThemeProvider>
    )
}
export default Provider