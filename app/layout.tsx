import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Sidebar } from "@/components/Sidebar"
import { Player } from "@/components/Player"
import Link from "next/link"
import { Home, Search, Library } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "A web-based Spotify clone",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-black text-white">
          <div className="flex flex-1 overflow-hidden">
            <Sidebar />
            <main className="flex-1 overflow-y-auto">
              <Player />
              {children}
            </main>
          </div>
          <nav className="md:hidden fixed bottom-0 left-0 right-0 flex justify-around items-center bg-gray-900 p-4">
            <Link href="/" className="flex flex-col items-center text-gray-400 hover:text-white">
              <Home />
              <span className="text-xs mt-1">Home</span>
            </Link>
            <Link href="/search" className="flex flex-col items-center text-gray-400 hover:text-white">
              <Search />
              <span className="text-xs mt-1">Search</span>
            </Link>
            <Link href="/library" className="flex flex-col items-center text-gray-400 hover:text-white">
              <Library />
              <span className="text-xs mt-1">Your Library</span>
            </Link>
          </nav>
        </div>
      </body>
    </html>
  )
}

