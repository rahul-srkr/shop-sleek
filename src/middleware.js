// import { getServerSession } from 'next-auth'
import { getToken } from 'next-auth/jwt'
import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
// import { authOptions } from './lib/auth'

export default withAuth(
    async function middleware(req) {
        const pathname = req.nextUrl.pathname

        // Manage route protection
        const isAuth = await getToken({ req })

        const isLoginPage = pathname.startsWith('/login')

        const sensitiveRoutes = ['/my/profile', '/my/address']
        const isAccessingSensitiveRoute = sensitiveRoutes.some((route) =>
            pathname.startsWith(route)
        )

        if (isLoginPage) {
            if (isAuth) {
                return NextResponse.redirect(new URL('/', req.url))
            }

            return NextResponse.next()
        }

        if (!isAuth && isAccessingSensitiveRoute) {
            return NextResponse.redirect(new URL('/login', req.url))
        }

        // if (isAuth) {
        //     const session = await getServerSession(authOptions);
        // }

        if (pathname === "/seller") {
            if (isAuth) {
                if (isAuth.role === "seller") {
                    return NextResponse.redirect(new URL('/seller/dashboard', req.url))
                }
            }
        }

        // if (pathname === '/') {
        //     return NextResponse.redirect(new URL('/dashboard', req.url))
        // }
    },
    {
        callbacks: {
            async authorized() {
                return true
            },
        },
    }
)

export const config = {
    matchter: ['/my/profile', '/my/address', '/checkout/cart', '/checkout/address', '/seller'],
}