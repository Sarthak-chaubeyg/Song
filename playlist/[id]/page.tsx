import { Play } from "lucide-react"

interface PlaylistPageProps {
  params: { id: string }
}

export default function PlaylistPage({ params }: PlaylistPageProps) {
  const playlistId = params.id
  const playlistName = `Playlist ${playlistId}`

  const tracks = [
    { id: 1, title: "Track 1", artist: "Artist 1", album: "Album 1", duration: "3:30" },
    { id: 2, title: "Track 2", artist: "Artist 2", album: "Album 2", duration: "4:15" },
    { id: 3, title: "Track 3", artist: "Artist 3", album: "Album 3", duration: "3:45" },
  ]

  return (
    <div className="p-6">
      <div className="flex items-end space-x-6 mb-6">
        <div className="w-52 h-52 bg-gradient-to-br from-indigo-700 to-purple-500 shadow-lg"></div>
        <div>
          <p className="text-sm font-medium">PLAYLIST</p>
          <h1 className="text-5xl font-bold mt-2 mb-4">{playlistName}</h1>
          <p className="text-sm text-gray-400">3 songs</p>
        </div>
      </div>
      <div className="mt-6">
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
            {tracks.map((track, index) => (
              <tr key={track.id} className="hover:bg-gray-800 group">
                <td className="py-3">{index + 1}</td>
                <td className="py-3">
                  <div className="flex items-center">
                    <Play className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100" />
                    <div>
                      <div>{track.title}</div>
                      <div className="text-sm text-gray-400">{track.artist}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 hidden md:table-cell">{track.album}</td>
                <td className="py-3 hidden sm:table-cell">{track.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

