'use client'

import { signOut } from 'next-auth/react'
import { useState } from 'react'
import Button from '../../../ui/Button'
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
        <div onClick={() => logout()} className={`flex items-center justify-between p-2 bg-button-logout text-white rounded-md whitespace-nowrap ${classname}`}>
            {isSigningOut ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            <div>Log Out</div>
            <FiLogOut />
        </div>
    )
}

export default SignOutButton