import { Play } from "lucide-react"
import { songs } from "@/lib/songs"
import Link from "next/link"
import Image from "next/image"

// This is the main homepage of the Spotify clone
// It displays a grid of songs
export default function Home() {
  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Good afternoon</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {songs.map((song) => (
          <Link href={`/song/${song.id}`} key={song.id}>
            <div className="bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition duration-300 ease-in-out">
              <div className="aspect-square relative mb-2">
                <Image
                  src={`/placeholder.svg?height=400&width=400&text=${encodeURIComponent(song.title)}`}
                  alt={song.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <h3 className="font-medium text-sm truncate">{song.title}</h3>
              <p className="text-xs text-gray-400 truncate">{song.artist}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

