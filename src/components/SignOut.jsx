'use client'

import { signOut } from 'next-auth/react'
import { useState } from 'react'
import Button from './ui/Button'

const SignOutButton = () => {
    const [isSigningOut, setIsSigningOut] = useState(false)
    return (
        <Button
            isLoading={isSigningOut}
            variant='ghost'
            onClick={async () => {
                setIsSigningOut(true)
                try {
                    await signOut()
                } catch (error) {
                    // toast.error('There was a problem signing out')
                } finally {
                    setIsSigningOut(false)
                }
            }}>
            Log Out
        </Button>
    )
}

export default SignOutButton