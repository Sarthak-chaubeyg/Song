import { Play } from "lucide-react"
import { songs } from "@/lib/songs"

const playlists = ["Chill Vibes", "Workout Mix", "Study Session", "Party Anthems", "Road Trip"]

export default function Home() {
  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Good afternoon</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 sm:mb-8">
        {playlists.slice(0, 6).map((playlist, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-3 sm:p-4 flex items-center space-x-3 sm:space-x-4 hover:bg-gray-700 cursor-pointer"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-600 rounded"></div>
            <span className="font-medium text-sm sm:text-base">{playlist}</span>
          </div>
        ))}
      </div>
      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Your Songs</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-gray-400 border-b border-gray-800">
              <th className="text-left pb-2">#</th>
              <th className="text-left pb-2">Title</th>
              <th className="text-left pb-2 hidden md:table-cell">Album</th>
              <th className="text-left pb-2 hidden sm:table-cell">Duration</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, index) => (
              <tr key={song.id} className="hover:bg-gray-800 group">
                <td className="py-2 sm:py-3">{index + 1}</td>
                <td className="py-2 sm:py-3">
                  <div className="flex items-center">
                    <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 opacity-0 group-hover:opacity-100" />
                    <div>
                      <div className="text-sm sm:text-base">{song.title}</div>
                      <div className="text-xs sm:text-sm text-gray-400">{song.artist}</div>
                    </div>
                  </div>
                </td>
                <td className="py-2 sm:py-3 hidden md:table-cell text-sm sm:text-base">{song.album}</td>
                <td className="py-2 sm:py-3 hidden sm:table-cell text-sm sm:text-base">{song.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

