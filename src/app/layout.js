import Providers from '@/components/Providers'
import './globals.css'
import { Montserrat } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mon',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` ${montserrat.variable} font-mon`}>
      <body className={`dark:bg-dark bg-light text-light dark:text-dark w-full`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
