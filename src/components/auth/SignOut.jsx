'use client'

import { signOut } from 'next-auth/react'
import { useState } from 'react'
import { FiLogOut } from "react-icons/fi"
import { Loader2 } from "lucide-react";

const SignOutButton = ({ classname }) => {
    const [isSigningOut, setIsSigningOut] = useState(false)
    const logout = async () => {
        setIsSigningOut(true)
        try {
            await signOut()
        } catch (error) {
            // toast.error('There was a problem signing out')
        } finally {
            setIsSigningOut(false)
        }
    }
    return (
        <button disabled={isSigningOut} onClick={() => logout()} className={`flex p-2 bg-button-danger-color hover:bg-button-danger-hover text-white rounded-sm whitespace-nowrap ${classname}`}>
            {isSigningOut ?
                <Loader2 className="h-4 w-4 animate-spin" /> :
                <div className={`flex items-center justify-between w-full`}>
                    <span>Log Out</span>
                    <FiLogOut />
                </div>
            }
        </button>
    )
}

export default SignOutButton