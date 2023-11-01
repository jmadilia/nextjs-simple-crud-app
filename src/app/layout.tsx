import type { Metadata } from 'next'
import { Hanken_Grotesk } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const hanken_grotesk = Hanken_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next App Tutorial',
  description: 'Next.js tutorial using notes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${hanken_grotesk.className}`}>
        <main className='flex flex-col p-10 space-y-5 min-h-screen'>
          <nav className='flex space-x-5 font-bold text-xl underline'>
            <div>
              <Link href={"/"}>
                Home
              </Link>
            </div>
            <div>
              <Link href={"/notes"}>
                Notes
              </Link>
            </div>
          </nav>
          {children}
        </main>
      </body>
    </html>
  )
}
