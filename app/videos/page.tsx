import { Metadata } from 'next'
import Link from 'next/link'
import { Play, Youtube, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Videos - BeyondTAxis.life',
  description: 'Video content exploring 4D perception, consciousness, and living in the 4th dimension.',
}

const videos = [
  {
    id: 'intro-4d',
    title: 'Introduction to 4D Perception',
    description: 'Understanding the basics of perceiving time as a dimension. Learn how to develop your mental eye for 4D consciousness.',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    duration: '12:34',
    category: 'Foundation',
  },
  {
    id: 'developing-mental-eye',
    title: 'Developing Your Mental Eye for 4D',
    description: 'Practical exercises and techniques to develop 4D consciousness. Step-by-step guide to perceiving time as a dimension.',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    duration: '18:45',
    category: 'Practice',
  },
  {
    id: 'time-dimension-explained',
    title: 'Time as Dimension: Explained',
    description: 'Deep dive into how time functions as the 4th dimension. Exploring physics, mathematics, and philosophy of temporal dimensionality.',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    duration: '25:12',
    category: 'Theory',
  },
  {
    id: 'maintaining-relationships',
    title: 'Maintaining Relationships Across Time',
    description: 'How 4D consciousness helps you stay connected with friends and loved ones across years. Practical strategies for temporal relationships.',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    duration: '15:30',
    category: 'Relationships',
  },
  {
    id: 'mathematics-4d',
    title: 'The Mathematics of 4D: Tesseracts',
    description: 'Exploring tesseracts, hypercubes, and 4D geometry. Visualizing higher dimensions through mathematics.',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    duration: '20:15',
    category: 'Mathematics',
  },
  {
    id: 'physics-spacetime',
    title: 'Physics of Spacetime',
    description: 'Understanding Einstein\'s insights into spacetime. How physics reveals time as the fourth dimension.',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    duration: '22:40',
    category: 'Physics',
  },
]

export default function VideosPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Video <span className="text-gradient">Channel</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Visual explorations of 4D consciousness, perception, and living in the 4th dimension. 
            Subscribe to our YouTube channel for regular content.
          </p>
        </div>

        <div className="mb-8">
          <a
            href="https://youtube.com/@beyondtaxis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300"
          >
            <Youtube className="w-5 h-5" />
            <span>Subscribe on YouTube</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Link
              key={video.id}
              href={`/videos/${video.id}`}
              className="block glass rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="relative aspect-video bg-dark-700">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs text-white">
                  {video.duration}
                </div>
                <div className="absolute top-2 left-2">
                  <span className="text-xs font-semibold text-white px-2 py-1 rounded bg-primary-600/80">
                    {video.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-primary-400 transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-2">{video.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

