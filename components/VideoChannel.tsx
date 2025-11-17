'use client'

import { motion } from 'framer-motion'
import { Play, Youtube, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const videos = [
  {
    id: 'intro-4d',
    title: 'Introduction to 4D Perception',
    description: 'Understanding the basics of perceiving time as a dimension',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    duration: '12:34',
  },
  {
    id: 'developing-mental-eye',
    title: 'Developing Your Mental Eye for 4D',
    description: 'Practical exercises to develop 4D consciousness',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    duration: '18:45',
  },
  {
    id: 'time-dimension-explained',
    title: 'Time as Dimension: Explained',
    description: 'Deep dive into how time functions as the 4th dimension',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    duration: '25:12',
  },
  {
    id: 'maintaining-relationships',
    title: 'Maintaining Relationships Across Time',
    description: 'How 4D consciousness helps you stay connected',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    duration: '15:30',
  },
]

export default function VideoChannel() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-800/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Video <span className="text-gradient">Channel</span>
            </h2>
            <p className="text-xl text-gray-300">
              Visual explorations of 4D consciousness and perception
            </p>
          </div>
          <a
            href="https://youtube.com/@beyondtaxis"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors"
          >
            <Youtube className="w-6 h-6" />
            <span>Subscribe</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
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
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-primary-400 transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2">{video.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <a
            href="https://youtube.com/@beyondtaxis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300"
          >
            <Youtube className="w-5 h-5" />
            <span>Visit YouTube Channel</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

