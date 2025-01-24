"use client"

import { useState } from "react"
import { Music, Mic2, BookOpen } from "lucide-react"
import { songs } from "@/lib/songs"
import Link from "next/link"

const libraryItems = [
  { icon: Music, title: "Playlists", items: ["Workout Mix", "Chill Vibes"] },
  { icon: Mic2, title: "Artists", items: ["Ed Sheeran", "Adele"] },
  { icon: BookOpen, title: "Albums", items: ["÷ (Divide)", "25"] },
]

// This is the library page of the Spotify clone
// It displays the user's playlists, artists, and albums
export default function LibraryPage() {
  const [activeSection, setActiveSection] = useState("Playlists")

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Your Library</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {libraryItems.map((item) => (
          <div
            key={item.title}
            className={`bg-gray-800 rounded-lg p-4 flex items-center space-x-4 hover:bg-gray-700 cursor-pointer ${
              activeSection === item.title ? "border-2 border-green-500" : ""
            }`}
            onClick={() => setActiveSection(item.title)}
          >
            <item.icon className="w-8 h-8 text-green-500" />
            <div>
              <h2 className="font-medium">{item.title}</h2>
              <p className="text-sm text-gray-400">{item.items.length} items</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">{activeSection}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {libraryItems
            .find((item) => item.title === activeSection)
            ?.items.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-4 flex items-center space-x-4 hover:bg-gray-700 cursor-pointer"
              >
                <div className="w-12 h-12 bg-gray-600 rounded"></div>
                <span className="font-medium">{item}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

