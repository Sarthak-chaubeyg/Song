"use client"

import { useState } from "react"
import { Upload } from "lucide-react"

// This is the download page
// It allows users to select a local file for download
export default function DownloadPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0])
    }
  }

  const handleDownload = () => {
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile)
      const a = document.createElement("a")
      a.href = url
      a.download = selectedFile.name
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Download Song</h1>
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg">
        <div className="mb-4">
          <label htmlFor="file-upload" className="block text-sm font-medium text-gray-300 mb-2">
            Select song file
          </label>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="file-upload"
              className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-700 hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-8 h-8 mb-3 text-gray-400" />
                <p className="mb-2 text-sm text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-400">MP3 (MAX. 10MB)</p>
              </div>
              <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} accept=".mp3" />
            </label>
          </div>
        </div>
        {selectedFile && (
          <div className="mt-4">
            <p className="text-sm text-gray-300 mb-2">Selected file: {selectedFile.name}</p>
            <button
              onClick={handleDownload}
              className="w-full bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-400"
            >
              Download
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

